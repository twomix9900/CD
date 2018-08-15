package com.cd.eventsbeltreviewer.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.eventsbeltreviewer.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
	List<User> findAll();
	Optional<User> findById(Long id);
	void deleteById(Long id);
}