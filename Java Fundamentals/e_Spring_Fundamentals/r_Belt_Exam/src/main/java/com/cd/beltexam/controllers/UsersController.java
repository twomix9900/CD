package com.cd.beltexam.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.cd.beltexam.models.User;
import com.cd.beltexam.services.UserService;
import com.cd.beltexam.validator.UserValidator;

@Controller
public class UsersController {
    private final UserService userService;
    private final UserValidator userValidator;
    
    public UsersController(UserService userService, UserValidator userValidator) {
        this.userService = userService;
        this.userValidator = userValidator;
    }

    @GetMapping("/")
    public String login(@ModelAttribute("user") User user, Model model, HttpSession session) {
    	System.out.println("/ get invoked");
    	if (session.getAttribute("error") != null) {
    		model.addAttribute("error", "Invalid credentials");
    		session.invalidate();
    	}
        return "login.jsp";
    }
    
    @PostMapping(value="/registration")
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	System.out.println("/registration post invoked");
        userValidator.validate(user, result);
        if(result.hasErrors()) {
            return "login.jsp";
        }
        User u = userService.registerUser(user);
        session.setAttribute("userId", u.getId());
        return "redirect:/courses";
    }
    
    @PostMapping(value="/login")
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
    	System.out.println("/login post invoked");
    	boolean isAuthenticated = userService.authenticateUser(email, password);
        if (isAuthenticated) {
        	User u = userService.findByEmail(email);
        	session.setAttribute("userId", u.getId());
        	return "redirect:/courses";
        } else {
        	session.setAttribute("error", "Invalid login credentials");
        	return "redirect:/";
        }
    }
    
    @GetMapping("/logout")
    public String logout(HttpSession session) {
    	System.out.println("/logout get invoked");
    	session.invalidate();
    	return "redirect:/";
    }
}