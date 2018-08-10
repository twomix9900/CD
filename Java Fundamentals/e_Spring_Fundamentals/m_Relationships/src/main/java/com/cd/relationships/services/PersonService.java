package com.cd.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.relationships.models.Person;
import com.cd.relationships.repositories.PersonRepository;

@Service
public class PersonService {
	private final PersonRepository personRepository;
	public PersonService(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}
	
	public List<Person> allPersons() {
		return personRepository.findAll();
	}
	
	public Person createPerson(Person p) {
		return personRepository.save(p);
	}
	
	public Person findPerson(Long id) {
	Optional<Person> optionalPerson = personRepository.findById(id);
	if(optionalPerson.isPresent()) {
		return optionalPerson.get();
		} else {
		return null;
		}
	}
	
	public Person updatePerson(Person person) {
		person.setFirstName(person.getFirstName());
		person.setLastName(person.getLastName());
		
		return personRepository.save(person);
	}
	
	public Boolean deletePerson(Long id) {
		Optional<Person> optionalPerson = personRepository.findById(id);
		if(optionalPerson.isPresent()) {
			personRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
	
	public List<Person> searchLastName(String search) {
		return personRepository.findByLastNameContaining(search);
	}
}

//package com.cd.lookify.services;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.stereotype.Service;
//
//import com.cd.lookify.models.Song;
//import com.cd.lookify.repositories.SongRepository;
//
//
//@Service
//public class SongService {
//	private final SongRepository songRepository;
//	public SongService(SongRepository songRepository) {
//		this.songRepository = songRepository;
//	}
//	
//	public List<Song> allSongs() {
//		return songRepository.findAll();
//	}
//	
//	public Song createSong(Song s) {
//		return songRepository.save(s);
//	}
//	
//	public Song findSong(Long id) {
//		Optional<Song> optionalSong = songRepository.findById(id);
//		if(optionalSong.isPresent()) {
//			return optionalSong.get();
//		} else {
//			return null;
//		}
//	}
//	
//	public Song updateSong(Song song) {
//		song.setTitle(song.getTitle());
//		song.setArtist(song.getArtist());
//		song.setRating(song.getRating());
//		
//		return songRepository.save(song);
//	}
//	
//	public Boolean deleteSong(Long id) {
//		Optional<Song> optionalSong = songRepository.findById(id);
//		if(optionalSong.isPresent()) {
//			songRepository.deleteById(id);
//			return true; 
//		} else {
//			return false;
//		}
//	}
//	
//	public List<Song> searchArtist(String search) {
//		return songRepository.findByArtistContaining(search);
//	}
//}
