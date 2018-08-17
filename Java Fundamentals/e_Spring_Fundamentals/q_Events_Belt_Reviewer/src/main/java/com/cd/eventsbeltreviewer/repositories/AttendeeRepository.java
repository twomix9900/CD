package com.cd.eventsbeltreviewer.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.eventsbeltreviewer.models.Attendee;

@Repository
public interface AttendeeRepository extends CrudRepository<Attendee, Long>{
	List<Attendee> findAll();
	Optional<Attendee> findById(Long id);
	void deleteById(Long id);
	Attendee findByEventIdAndUserId(Long eventId, Long userId);

}
