package com.cd.beltexam.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.beltexam.models.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Long>{
	List<Student> findAll();
	Optional<Student> findById(Long id);
	void deleteById(Long id);
	Student findByCourseIdAndUserId(Long courseId, Long userId);
	
	@Query(value="SELECT student FROM Student student WHERE student.course.id = ?1")
	List<Student> findAllCourseStudents(Long id);
}
