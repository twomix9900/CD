package com.cd.advancedquery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.advancedquery.models.City;
import com.cd.advancedquery.models.Country;
import com.cd.advancedquery.repositories.CountryRepository;

@Service
public class CountryService {
	private final CountryRepository countryRepository;
	public CountryService(CountryRepository countryRepository) {
		this.countryRepository = countryRepository;
	}
	
	public List<Country> allCategories() {
		return countryRepository.findAll();
	}
	
	public Country createCountry(Country country) {
		return countryRepository.save(country);
	}
	
	public Country findCountry(Long id) {
	Optional<Country> optionalCountry = countryRepository.findById(id);
	if(optionalCountry.isPresent()) {
		return optionalCountry.get();
		} else {
		return null;
		}
	}
	
	public Country updateCountry(Country country) {
		return countryRepository.save(country);
	}
	
	public Boolean deleteCountry(Long id) {
		Optional<Country> optionalCountry = countryRepository.findById(id);
		if(optionalCountry.isPresent()) {
			countryRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
	

	
	
}
