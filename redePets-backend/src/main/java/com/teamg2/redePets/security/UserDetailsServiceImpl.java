package com.teamg2.redePets.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.teamg2.redePets.model.Usuario;
import com.teamg2.redePets.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService
{
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException 
	{
		Optional<Usuario> user = usuarioRepository.findByEmail(email);
		user.orElseThrow(() -> new UsernameNotFoundException (email + "not found."));
		
		return user.map(UserDetailsImpl::new).get(); 
	}
}
