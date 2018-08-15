package com.cd.advancedquery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.advancedquery.models.City;
import com.cd.advancedquery.repositories.CityRepository;

@Service
public class CityService {
	private final CityRepository cityRepository;
	public CityService(CityRepository cityRepository) {
		this.cityRepository = cityRepository;
	}
	
	public List<City> allCities() {
		return cityRepository.findAll();
	}
	
	public City createCity(City city) {
		return cityRepository.save(city);
	}
	
	public City findCity(Long id) {
	Optional<City> optionalCity = cityRepository.findById(id);
	if(optionalCity.isPresent()) {
		return optionalCity.get();
		} else {
		return null;
		}
	}
	
	public City updateCity(City city) {
		
		
		return cityRepository.save(city);
	}
	
	public Boolean deleteCity(Long id) {
		Optional<City> optionalCity = cityRepository.findById(id);
		if(optionalCity.isPresent()) {
			cityRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
}
