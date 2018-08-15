package com.cd.eventsbeltreviewer.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.eventsbeltreviewer.models.Event;

@Repository
public interface EventRepository extends CrudRepository<Event, Long>{
	List<Event> findAll();
	Optional<Event> findById(Long id);
	void deleteById(Long id);
	
	@Query(value="SELECT event FROM User user JOIN user.userEvents event WHERE event.state = ?1")
	List<Event> findAllEventsInUserState(String state);
	
	@Query(value="SELECT event FROM User user JOIN user.userEvents event WHERE event.state != ?1")
	List<Event> findAllEventsNotInUserState(String state);
}
