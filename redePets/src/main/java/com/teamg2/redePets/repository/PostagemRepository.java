package com.teamg2.redePets.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamg2.redePets.model.Postagem;

@Repository 
public interface PostagemRepository extends JpaRepository<Postagem, Long>
{
	
	public List <Postagem> findAllByTituloContainingIgnoreCase(String titulo);

}