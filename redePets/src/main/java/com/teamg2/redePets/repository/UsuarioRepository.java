package com.teamg2.redePets.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamg2.redePets.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> 
{
	
	public Optional<Usuario> findByEmail(String email);

}