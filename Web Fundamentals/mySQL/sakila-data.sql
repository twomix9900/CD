-- 1
SELECT address.city_id, city.city, first_name, last_name, email, address
FROM customer
LEFT JOIN address
ON customer.address_id = address.address_id
LEFT JOIN city
ON address.city_id = city.city_id
WHERE address.city_id = 312;

-- 2
SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre
FROM film
LEFT JOIN film_category
ON film.film_id = film_category.film_id
LEFT JOIN category
ON film_category.category_id = category.category_id
WHERE category.name = "Comedy";

-- 3
SELECT actor.actor_id, CONCAT(actor.first_name, " ", actor.last_name) AS actor_name, film.film_id, film.title, film.description, film.release_year
FROM film
JOIN film_actor
ON film.film_id = film_actor.film_id
JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE actor.actor_id = 5;

-- 4, incorrect
SELECT store.store_id, city.city_id, customer.first_name, customer.last_name, customer.email, address.address
FROM store
JOIN address
ON store.address_id = address.address_id
JOIN customer
ON customer.store_id = store.store_id
JOIN city
ON city.city_id = address.city_id;

-- 5
SELECT film.title, film.description, film.release_year, film.rating, film.special_features
FROM film
JOIN film_actor
ON film.film_id = film_actor.film_id
WHERE (rating = "G")
AND (special_features LIKE "%Behind the Scenes%")
AND (film_actor.actor_id = 15);

-- 6
SELECT film.film_id, film.title, actor.actor_id, CONCAT(actor.first_name, actor.last_name) AS actor_name
FROM film
JOIN film_actor
ON film.film_id = film_actor.film_id
JOIN actor
ON actor.actor_id = film_actor.actor_id
WHERE film.film_id = 369;

-- 7 incorrect
SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre, payment.amount AS rental_rate
FROM film
JOIN inventory
ON film.film_id = inventory.film_id
JOIN rental
ON inventory.inventory_id = rental.inventory_id
JOIN film_category
ON film.film_id = film_category.film_id
JOIN category
ON film_category.category_id = category.category_id
JOIN payment
ON rental.rental_id = payment.rental_id
WHERE payment.amount = 2.99
AND category.name = "drama"
GROUP BY film.film_id;

