package com.cd.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.relationships.models.License;
import com.cd.relationships.repositories.LicenseRepository;

@Service
public class LicenseService {
	private final LicenseRepository licenseRepository;
	public LicenseService(LicenseRepository licenseRepository) {
		this.licenseRepository = licenseRepository;
	}
	
	public List<License> allLicenses() {
		return licenseRepository.findAll();
	}
	
	public License createLicense(License l) {
		return licenseRepository.save(l);
	}
	
	public License findLicense(Long id) {
		Optional<License> optionalLicense = licenseRepository.findById(id);
		if(optionalLicense.isPresent()) {
			return optionalLicense.get();
		} else {
			return null;
		}
	}
	
	public License updateLicense(License license) {
		license.setNumber(license.getNumber());
		license.setExpiration_date(license.getExpiration_date());
		license.setState(license.getState());
		license.setPerson(license.getPerson());
		
		return licenseRepository.save(license);
	}

	public Boolean deleteLicense(Long id) {
		Optional<License> optionalLicense = licenseRepository.findById(id);
		if(optionalLicense.isPresent()) {
			licenseRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
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
