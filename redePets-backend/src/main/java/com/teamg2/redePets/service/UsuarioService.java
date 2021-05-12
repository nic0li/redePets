package com.teamg2.redePets.service;

import java.nio.charset.Charset;

import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.teamg2.redePets.model.Usuario;
import com.teamg2.redePets.model.UsuarioLogin;
import com.teamg2.redePets.repository.UsuarioRepository;

@Service         
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	public Optional<Usuario> CadastrarUsuario(Usuario usuario) {
		
		if (repository.findByEmail(usuario.getEmail()).isPresent()&& usuario.getId() == 0) {
			return null;
		}
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		String senhaCriptografada = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaCriptografada);
		
		return Optional.of(repository.save(usuario));
	}
	
	public Optional<UsuarioLogin> Logar(Optional<UsuarioLogin> usuarioLogin) {
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		Optional<Usuario> usuario = repository.findByEmail(usuarioLogin.get().getEmail());
		
		if(usuario.isPresent()) {
			if(encoder.matches(usuarioLogin.get().getSenha(), usuario.get().getSenha())) {
				
				String auth = usuarioLogin.get().getEmail() + ":" + usuarioLogin.get().getSenha();
				byte[] encodeAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encodeAuth);
				
				usuarioLogin.get().setToken(authHeader);
				usuarioLogin.get().setId(usuario.get().getId());
				usuarioLogin.get().setNome(usuario.get().getNome());
				usuarioLogin.get().setFoto(usuario.get().getFoto());
				usuarioLogin.get().setTipo(usuario.get().getTipo());
				usuarioLogin.get().setSobre(usuario.get().getSobre());
				usuarioLogin.get().setTelefone(usuario.get().getTelefone());
				usuarioLogin.get().setCapa(usuario.get().getCapa());
				
				return usuarioLogin;
				
			}
		}
		
		return null;
	}
	
}
