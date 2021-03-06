package com.cd.relationships.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.relationships.models.License;

@Repository
public interface LicenseRepository extends CrudRepository<License, Long>{
	List<License> findAll();
	Optional<License> findById(Long id);
	void deleteById(Long id);
}

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
