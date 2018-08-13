package com.cd.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.relationships.models.Dojo;
import com.cd.relationships.repositories.DojoRepository;

@Service
public class DojoService {
	private final DojoRepository dojoRepository;
	public DojoService(DojoRepository dojoRepository) {
		this.dojoRepository = dojoRepository;
	}
	
	public List<Dojo> allDojos() {
		return dojoRepository.findAll();
	}

	public Dojo createDojo(Dojo dojo) {
		return dojoRepository.save(dojo);
	}
	
	public Dojo findDojo(Long id) {
		Optional<Dojo> optionalDojo = dojoRepository.findById(id);
		if(optionalDojo.isPresent()) {
			return optionalDojo.get();
		} else {
			return null;
		}
	}
	
	public Dojo updateLicense(Dojo dojo) {
		dojo.setName(dojo.getName());
		dojo.setId(dojo.getId());
		
		return dojoRepository.save(dojo);
	}
	
	public Boolean deleteDojo(Long id) {
		Optional<Dojo> optionalDojo = dojoRepository.findById(id);
		if(optionalDojo.isPresent()) {
			dojoRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
	
	
	//Advanced query stuff
//	List<Object[]> dojos = dojoRepo.findAllDojosNamesWithId2();
//	Object[] dojo = dojos.get(0);
//	Object dojoId = dojo[0];
//	Object dojoName = dojo[1];

}

//@Service
//public class LicenseService {
//	private final LicenseRepository licenseRepository;
//	public LicenseService(LicenseRepository licenseRepository) {
//		this.licenseRepository = licenseRepository;
//	}
//	
//	public List<License> allLicenses() {
//		return licenseRepository.findAll();
//	}
//	
//	public License createLicense(License l) {
//		return licenseRepository.save(l);
//	}
//	
//	public License findLicense(Long id) {
//		Optional<License> optionalLicense = licenseRepository.findById(id);
//		if(optionalLicense.isPresent()) {
//			return optionalLicense.get();
//		} else {
//			return null;
//		}
//	}
//	
//	public License updateLicense(License license) {
//		license.setNumber(license.getNumber());
//		license.setExpiration_date(license.getExpiration_date());
//		license.setState(license.getState());
//		license.setPerson(license.getPerson());
//		
//		return licenseRepository.save(license);
//	}
//
//	public Boolean deleteLicense(Long id) {
//		Optional<License> optionalLicense = licenseRepository.findById(id);
//		if(optionalLicense.isPresent()) {
//			licenseRepository.deleteById(id);
//			return true; 
//		} else {
//			return false;
//		}
//	}
//}