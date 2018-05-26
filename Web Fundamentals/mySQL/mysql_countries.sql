SELECT name, language, percentage
FROM countries
LEFT JOIN languages
ON countries.id = languages.country_id
WHERE languages.language = "Slovene"
ORDER BY percentage DESC;

SELECT countries.name, COUNT(cities.name) 
AS cities
FROM countries
LEFT JOIN cities
ON countries.id = cities.country_id
GROUP BY countries.name DESC;


SELECT cities.name, cities.population
FROM countries
LEFT JOIN cities
ON countries.id = cities.country_id
WHERE cities.population > 500000
AND countries.name = "Mexico";

SELECT name, language, percentage
FROM countries
LEFT JOIN languages
ON countries.id = languages.country_id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;

SELECT name, surface_area, population
FROM countries
WHERE surface_area < 501 
AND population > 100000;

SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE capital > 200
AND life_expectancy > 75
AND government_form = "Constitutional Monarchy";

SELECT countries.name AS name, cities.name AS city, district, cities.population
FROM countries
LEFT JOIN cities
ON countries.id = cities.country_id
WHERE cities.population > 500000
AND district = "Buenos Aires";

SELECT region, COUNT(countries.name) AS countries
FROM countries
GROUP BY region
ORDER BY countries DESC;