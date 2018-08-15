package com.cd.eventsbeltreviewer.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.eventsbeltreviewer.models.Message;

@Repository
public interface MessageRepository extends CrudRepository<Message, Long>{
	List<Message> findAll();
	Optional<Message> findById(Long id);
	void deleteById(Long id);
}
