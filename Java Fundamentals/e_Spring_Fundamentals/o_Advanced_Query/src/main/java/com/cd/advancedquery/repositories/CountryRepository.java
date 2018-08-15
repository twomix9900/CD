package com.cd.advancedquery.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.advancedquery.models.Country;

@Repository
public interface CountryRepository extends CrudRepository<Country, Long>{
	List<Country> findAll();
	Optional<Country> findById(Long id);
	void deleteById(Long id);
	
//	@Query("SELECT co, ci FROM Country co JOIN co.cities ci")
//	List<Object[]> allCountriesAndCities();
	
    @Query(value="SELECT name, language, percentage\n" + 
    		"FROM countries\n" + 
    		"LEFT JOIN languages\n" + 
    		"ON countries.id = languages.country_id\n" + 
    		"WHERE languages.language = \"Slovene\"\n" + 
    		"ORDER BY percentage DESC;", nativeQuery=true)
    List<Object[]> findAllCountriesSpeakingSlovene();
    
    @Query(value="SELECT countries.name, COUNT(cities.name) \n" + 
    		"AS cities\n" + 
    		"FROM countries\n" + 
    		"LEFT JOIN cities\n" + 
    		"ON countries.id = cities.country_id\n" + 
    		"GROUP BY countries.name DESC;", nativeQuery=true)
    List<Object[]> citiesInEachCountry();
    
    @Query(value="SELECT cities.name, cities.population\n" + 
    		"FROM countries\n" + 
    		"LEFT JOIN cities\n" + 
    		"ON countries.id = cities.country_id\n" + 
    		"WHERE cities.population > 500000\n" + 
    		"AND countries.name = \"Mexico\";", nativeQuery=true)
    List<Object[]> citiesInMexico();
    
    @Query(value="SELECT name, language, percentage\n" + 
    		"FROM countries\n" + 
    		"LEFT JOIN languages\n" + 
    		"ON countries.id = languages.country_id\n" + 
    		"WHERE languages.percentage > 89\n" + 
    		"ORDER BY languages.percentage DESC;", nativeQuery=true)
    List<Object[]> majorityLanguageInCountry();
    
    @Query(value="SELECT name, surface_area, population\n" + 
    		"FROM countries\n" + 
    		"WHERE surface_area < 501 \n" + 
    		"AND population > 100000;", nativeQuery=true)
    List<Object[]> allMediumSizedCountries();
    
    @Query(value="SELECT name, government_form, capital, life_expectancy\n" + 
    		"FROM countries\n" + 
    		"WHERE capital > 200\n" + 
    		"AND life_expectancy > 75\n" + 
    		"AND government_form = \"Constitutional Monarchy\";", nativeQuery=true)
    List<Object[]> constitutionalMonarchyCountries();
    
    @Query(value="SELECT countries.name AS name, cities.name AS city, district, cities.population\n" + 
    		"FROM countries\n" + 
    		"LEFT JOIN cities\n" + 
    		"ON countries.id = cities.country_id\n" + 
    		"WHERE cities.population > 500000\n" + 
    		"AND district = \"Buenos Aires\";", nativeQuery=true)
    List<Object[]> argentinaCities();
    
    @Query(value="SELECT region, COUNT(countries.name) AS countries\n" + 
    		"FROM countries\n" + 
    		"GROUP BY region\n" + 
    		"ORDER BY countries DESC;", nativeQuery=true) 
    List<Object[]> countrySummary();
}
