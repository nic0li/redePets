package com.teamg2.redePets.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.teamg2.redePets.model.Usuario;
import com.teamg2.redePets.repository.UsuarioRepository;

public class UserDetailsServiceImpl implements UserDetailsService
{
	@Autowired
	private UsuarioRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) 
	{
		Optional<Usuario> user = userRepository.findByEmail(email);
		user.orElseThrow(() -> new UsernameNotFoundException (email + "not found."));
		
		return user.map(UserDetailsImpl:: new).get(); 
	}
}
