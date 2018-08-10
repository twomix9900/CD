package com.cd.relationships.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.relationships.models.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long>{
	List<Person> findAll();
	Optional<Person> findById(Long id);
	void deleteById(Long id);
	List<Person> findByLastNameContaining(String search);
}
//
//package com.cd.lookify.repositories;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.stereotype.Repository;
//
//import com.cd.lookify.models.Song;
//
//@Repository
//public interface SongRepository extends CrudRepository<Song, Long>{
//	List<Song> findAll();
//	Optional<Song> findById(Long id);
//	void deleteById(Long id);
//	List<Song> findByArtistContaining(String search);
//}
