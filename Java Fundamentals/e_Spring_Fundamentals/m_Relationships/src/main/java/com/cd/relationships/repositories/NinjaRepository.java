package com.cd.relationships.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.relationships.models.Ninja;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long>{
	List<Ninja> findAll();
	Optional<Ninja> findById(Long id);
	void deleteById(Long id);
}

//@Repository
//public interface LicenseRepository extends CrudRepository<License, Long>{
//	List<License> findAll();
//	Optional<License> findById(Long id);
//	void deleteById(Long id);
//}