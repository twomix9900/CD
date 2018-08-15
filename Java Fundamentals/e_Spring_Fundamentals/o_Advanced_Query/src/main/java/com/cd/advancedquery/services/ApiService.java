package com.cd.advancedquery.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cd.advancedquery.models.City;
import com.cd.advancedquery.models.Country;
import com.cd.advancedquery.models.Language;
import com.cd.advancedquery.repositories.CityRepository;
import com.cd.advancedquery.repositories.CountryRepository;
import com.cd.advancedquery.repositories.LanguageRepository;

@Service
public class ApiService {
	private final LanguageRepository languageRepository;
	private final CityRepository cityRepository;
	private final CountryRepository countryRepository;
	
	public ApiService(LanguageRepository languageRepository, CityRepository cityRepository, CountryRepository countryRepository) {
		this.languageRepository = languageRepository;
		this.countryRepository = countryRepository;
		this.cityRepository = cityRepository;
	}
	
	public List<Language> allLanguages() {
		return languageRepository.findAll();
	}
	
	public List<City> allCities() {
		return cityRepository.findAll();
	}
	
	public List<Country> allCountries() {
		return countryRepository.findAll();
	}
	
	public List<Object[]> findAllCountriesSpeakingSlovene() {
		List<Object[]> countries = countryRepository.findAllCountriesSpeakingSlovene();
		for(Object[] obj : countries) {
			System.out.println(obj[0] + " " + obj[1] + " " + obj[2]);
		}
		return countries;
	}
	
	public List<Object[]> citiesInEachCountry() {
		List<Object[]> cities = countryRepository.citiesInEachCountry();
		for(Object[] obj : cities) {
			System.out.println(obj[0] + " " + obj[1]);
		}
		return cities;
	}
	
	public List<Object[]> citiesInMexico() {
		List<Object[]> cities = countryRepository.citiesInMexico();
		for(Object[] obj : cities) {
			System.out.println(obj[0] + " " + obj[1]);
		}
		return cities;
	}
	
	public List<Object[]> majorityLanguageInCountry() {
		List<Object[]> countries = countryRepository.majorityLanguageInCountry();
		for(Object[] obj : countries) {
			System.out.println(obj[0] + " " + obj[1] + " " + obj[2]);
		}
		return countries;
	}
	
	public List<Object[]> allMediumSizedCountries() {
		List<Object[]> countries = countryRepository.allMediumSizedCountries();
		for(Object[] obj : countries) {
			System.out.println(obj[0] + " " + obj[1] + " " + obj[2]);
		}
		return countries;
	}
	
	public List<Object[]> constitutionalMonarchyCountries() {
		List<Object[]> countries = countryRepository.constitutionalMonarchyCountries();
		for(Object[] obj : countries) {
			System.out.println(obj[0] + " " + obj[1] + " " + obj[2] + " " + obj[3]);
		}
		return countries;
	}
	
	public List<Object[]> argentinaCities() {
		List<Object[]> cities = countryRepository.argentinaCities();
		for(Object[] obj : cities) {
			System.out.println(obj[0] + " " + obj[1] + " " + obj[2] + " " + obj[3]);
		}
		return cities;
	}
	
	public List<Object[]> countrySummary() {
		List<Object[]> countries = countryRepository.countrySummary();
		for(Object[] obj : countries) {
			System.out.println(obj[0] + " " + obj[1]);
		}
		return countries;
	}
	
}
