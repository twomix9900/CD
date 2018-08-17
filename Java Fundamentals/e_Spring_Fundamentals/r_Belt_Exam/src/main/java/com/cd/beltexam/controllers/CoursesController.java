package com.cd.beltexam.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.cd.beltexam.models.Course;
import com.cd.beltexam.models.User;
import com.cd.beltexam.services.AllService;
import com.cd.beltexam.services.UserService;

@Controller
@RequestMapping("/courses")
public class CoursesController {
	private final AllService allService;
	private final UserService userService;
	
	public CoursesController(AllService allService, UserService userService) {
		this.allService = allService;
		this.userService = userService;
	}
	
    @GetMapping("")
    public String showCourses (HttpSession session, Model model) {
    	System.out.println("/home invoked");    	
    	model.addAttribute("allCourses", allService.getAllCourses()); 
    	model.addAttribute("user", userService.findUserById((Long) session.getAttribute("userId")));

        return "showCourses.jsp";
    }
    
    @GetMapping("new")
    public String showAddCourse(@Valid @ModelAttribute("course") Course course, BindingResult result) {
    	return "addCourse.jsp";
    }
    
    @PostMapping("new")
    public String addCourse(Model model, @Valid @ModelAttribute("course") Course course, BindingResult result) {
		if (result.hasErrors()) {
			return "addCourse.jsp";
		} else {
			allService.createCourse(course);
			return "redirect:/courses";
		}
    	
    }
    
    @GetMapping("{courseId}")
    public String showCourseDetails(@PathVariable("courseId") Long courseId, Model model, HttpSession session) {
		model.addAttribute("course", allService.findCourseById(courseId));
		model.addAttribute("students", allService.findAllCourseStudents(courseId));
		model.addAttribute("user", userService.findUserById((Long) session.getAttribute("userId")));
		
    	return "courseDetails.jsp";
    }
    
    @GetMapping("edit/{courseId}")
    public String showEditCourse(@PathVariable("courseId") Long courseId, Model model) {
		model.addAttribute("course", allService.findCourseById(courseId));
    	return "editCourse.jsp";
    }
    
    @RequestMapping(value="edit/{id}", method=RequestMethod.PUT)
    public String updateCourse(@Valid @ModelAttribute("course") Course course, BindingResult result) {
    	if (result.hasErrors()) {
    		return "editCourse.jsp";
    	} else {
    		allService.updateCourse(course);
    		return "redirect:/courses";
    	}
    }
    
    @RequestMapping("delete/{courseId}")
    public String deleteCourse(@PathVariable("courseId") Long courseId) {
    	allService.deleteCourseById(courseId);
    	return "redirect:/courses";
    }
    
    @PostMapping("enroll/{id}")
    public String addStudent(@PathVariable("id") String id, HttpSession session) {
    	User user = userService.findUserById((Long) session.getAttribute("userId"));
    	Course course = allService.findCourseById(Long.parseLong(id));
    	allService.addStudent(course, user);
    	return "redirect:/courses";
    }
    
    @PostMapping("leave/{id}")
    public String removeStudent(@PathVariable("id") String id, HttpSession session) {
    	User user = userService.findUserById((Long) session.getAttribute("userId"));
    	Course course = allService.findCourseById(Long.parseLong(id));
    	allService.removeStudent(course, user);
    	return "redirect:/courses";
    }
}
