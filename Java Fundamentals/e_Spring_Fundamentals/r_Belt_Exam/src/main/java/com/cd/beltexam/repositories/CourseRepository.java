package com.cd.beltexam.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.beltexam.models.Course;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long>{
	List<Course> findAll();
	Optional<Course> findById(Long id);
	void deleteById(Long id);
	
//	@Query(value="SELECT event FROM User user JOIN user.userEvents event WHERE event.state = ?1")
//	List<Event> findAllEventsInUserState(String state);
//	
//	@Query(value="SELECT event FROM User user JOIN user.userEvents event WHERE event.state != ?1")
//	List<Event> findAllEventsNotInUserState(String state);
}
