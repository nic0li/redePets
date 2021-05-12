package com.teamg2.redePets.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamg2.redePets.model.Usuario;
import com.teamg2.redePets.model.UsuarioLogin;
import com.teamg2.redePets.repository.UsuarioRepository;
import com.teamg2.redePets.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
    private UsuarioRepository repository;
	
	@GetMapping("/{id}")
    public ResponseEntity<Usuario> findByIdUsuario(@PathVariable long id) {

        return repository.findById(id)
                .map(resp -> ResponseEntity.ok(resp))
                .orElse(ResponseEntity.notFound().build());

    }
	
	@PostMapping("/entrar")
	public ResponseEntity<UsuarioLogin> Autentication(@RequestBody Optional<UsuarioLogin> usuarioLogin) {
		
		return usuarioService.Logar(usuarioLogin).map(response -> ResponseEntity.ok(response))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
		
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> Post(@RequestBody Usuario usuario) {
		
		Optional<Usuario> user = usuarioService.CadastrarUsuario(usuario);

        try {
            return ResponseEntity.ok(user.get());
        } 
        catch (Exception err) {
            return ResponseEntity.badRequest().build();
        }
        
	}
	

}
