package com.cd.beltexam.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cd.beltexam.models.Course;
import com.cd.beltexam.models.Student;
import com.cd.beltexam.models.User;
import com.cd.beltexam.repositories.CourseRepository;
import com.cd.beltexam.repositories.StudentRepository;
import com.cd.beltexam.repositories.UserRepository;

@Service
public class AllService {
	private final UserRepository userRepository;
	private final CourseRepository courseRepository;
	private final StudentRepository studentRepository;
	
	public AllService(UserRepository userRepository, CourseRepository courseRepository, StudentRepository studentRepository) {
		this.userRepository = userRepository;
		this.courseRepository = courseRepository;
		this.studentRepository = studentRepository;
	}
	
	public User findUserById(Long id) {
		return userRepository.findById(id).get();
	}
	
	public List<Course> getAllCourses() {
		return courseRepository.findAll();
	}
	
	public Course createCourse(Course course) {
		return courseRepository.save(course);
	}
	
	public Course findCourseById(Long id) {
		return courseRepository.findById(id).get();
	}
	
	public Course updateCourse(Course course) {
		course.setName(course.getName());
		course.setInstructor(course.getInstructor());
		course.setCapacity(course.getCapacity());
		
		return courseRepository.save(course);
	}
	
	public Boolean deleteCourseById(Long id) {
		courseRepository.deleteById(id);
		return true;
	}
	
	public Student addStudent(Course course, User user) {
		Student student = new Student();
		student.setUser(user);
		student.setCourse(course);
		return studentRepository.save(student);
	}
	
	public void removeStudent(Course course, User user) {
		Student student = studentRepository.findByCourseIdAndUserId(course.getId(), user.getId());
		studentRepository.deleteById(student.getId());
	}
	
	public List<Student> findAllCourseStudents(Long id) {
		return studentRepository.findAllCourseStudents(id);
	}
}
