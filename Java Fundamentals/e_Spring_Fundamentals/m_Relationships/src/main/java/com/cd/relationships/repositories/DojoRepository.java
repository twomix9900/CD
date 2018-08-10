package com.cd.relationships.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.relationships.models.Dojo;

@Repository
public interface DojoRepository extends CrudRepository<Dojo, Long>{
	List<Dojo> findAll();
	Optional<Dojo> findById(Long id);
	void deleteById(Long id);
}

//@Repository
//public interface LicenseRepository extends CrudRepository<License, Long>{
//	List<License> findAll();
//	Optional<License> findById(Long id);
//	void deleteById(Long id);
//}