package com.cd.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.relationships.models.Ninja;
import com.cd.relationships.repositories.NinjaRepository;

@Service
public class NinjaService {
	private final NinjaRepository ninjaRepository;
	public NinjaService(NinjaRepository ninjaRepository) {
		this.ninjaRepository = ninjaRepository;
	}
	
	public List<Ninja> allNinjas() {
		return ninjaRepository.findAll();
	}
	
	public Ninja createNinja(Ninja ninja) {
		return ninjaRepository.save(ninja);
	}
	
	public Ninja findNinja(Long id) {
		Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
		if(optionalNinja.isPresent()) {
			return optionalNinja.get();
		} else {
			return null;
		}
	}
	
	public Ninja updateNinja(Ninja ninja) {
		ninja.setFirstName(ninja.getFirstName());
		ninja.setLastName(ninja.getLastName());
		ninja.setAge(ninja.getAge());
		ninja.setDojo(ninja.getDojo());
		
		
		return ninjaRepository.save(ninja);
	}

	public Boolean deleteNinja(Long id) {
		Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
		if(optionalNinja.isPresent()) {
			ninjaRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
}

//@Service
//public class NinjaService {
//	private final NinjaRepository ninjaRepository;
//	public NinjaService(NinjaRepository ninjaRepository) {
//		this.ninjaRepository = ninjaRepository;
//	}
//	
//	public List<Ninja> allNinjas() {
//		return ninjaRepository.findAll();
//	}
//	
//	public Ninja createNinja(Ninja l) {
//		return ninjaRepository.save(l);
//	}
//	
//	public Ninja findNinja(Long id) {
//		Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
//		if(optionalNinja.isPresent()) {
//			return optionalNinja.get();
//		} else {
//			return null;
//		}
//	}
//	
//	public Ninja updateNinja(Ninja ninja) {
//		ninja.setNumber(ninja.getNumber());
//		ninja.setExpiration_date(ninja.getExpiration_date());
//		ninja.setState(ninja.getState());
//		ninja.setPerson(ninja.getPerson());
//		
//		return ninjaRepository.save(ninja);
//	}
//
//	public Boolean deleteNinja(Long id) {
//		Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
//		if(optionalNinja.isPresent()) {
//			ninjaRepository.deleteById(id);
//			return true; 
//		} else {
//			return false;
//		}
//	}
//}