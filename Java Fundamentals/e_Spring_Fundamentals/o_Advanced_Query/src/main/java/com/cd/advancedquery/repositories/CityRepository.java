package com.cd.advancedquery.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.advancedquery.models.City;

@Repository
public interface CityRepository extends CrudRepository<City, Long>{
	List<City> findAll();
	Optional<City> findById(Long id);
	void deleteById(Long id);
}
