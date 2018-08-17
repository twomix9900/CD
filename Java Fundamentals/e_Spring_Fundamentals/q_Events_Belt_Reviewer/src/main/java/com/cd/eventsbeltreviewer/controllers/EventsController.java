package com.cd.eventsbeltreviewer.controllers;

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
import org.springframework.web.bind.annotation.RequestParam;

import com.cd.eventsbeltreviewer.models.Attendee;
import com.cd.eventsbeltreviewer.models.Event;
import com.cd.eventsbeltreviewer.models.Message;
import com.cd.eventsbeltreviewer.models.User;
import com.cd.eventsbeltreviewer.services.AllService;
import com.cd.eventsbeltreviewer.services.UserService;

@Controller
@RequestMapping("/events")
public class EventsController {
	private final AllService allService;
	private final UserService userService;
	
	public EventsController(AllService allService, UserService userService) {
		this.allService = allService;
		this.userService = userService;
	}
	
    @GetMapping("")
    public String showEvents (HttpSession session, Model model, @Valid @ModelAttribute("event") Event event, BindingResult result) {
    	System.out.println("/home invoked");
    	User user = userService.findUserById((Long) session.getAttribute("userId"));
    	
    	List<Event> events1 = allService.findAllEventsInUserState(user.getState());
    	List<Event> events2 = allService.findAllEventsNotInUserState(user.getState());
    	List<Attendee> a = allService.findAllAttendeeEntries();
    	
    	model.addAttribute("events1", events1); 
    	model.addAttribute("events2", events2);
    	model.addAttribute("user", user);
    	model.addAttribute("attendees", a);

    	
        return "showEvents.jsp";
    }
    
    @PostMapping("createNewEvent")
    public String createNewEvent (HttpSession session, @Valid @ModelAttribute("event") Event event, BindingResult result) {
//    	System.out.println(new Date().before(event.getDate()));
    	User user = userService.findUserById((Long) session.getAttribute("userId"));
    	
        if(result.hasErrors()) {
            return "showEvents.jsp";
        }
        
        allService.createEvent(event, user);
        
    	return "redirect:/events";
    }
    
    @GetMapping("{eventId}")
    public String getEventInfo(@PathVariable("eventId") Long eventId, Model model, @ModelAttribute("messageObj") Message message) {
    	Event event = allService.findEventById(eventId).get();
		model.addAttribute("event", event);
    	return "eventDetails.jsp";
    }
    
    @PostMapping("addNewMessage")
    public String createNewMessage(@ModelAttribute("messageObj") Message message, @RequestParam("eventId") String id, HttpSession session) {
    	Event event = allService.findEventById(Long.parseLong(id)).get();
    	User user = userService.findUserById((Long) session.getAttribute("userId"));
    	allService.addMessageToEvent(event, message, user);
    	
    	return "redirect:/events";
    }
    
    @GetMapping("edit/{eventId}")
    public String showEditEvent(@PathVariable("eventId") Long eventId, Model model, @ModelAttribute("event") Event event) {
    	Event e = allService.findEventById(eventId).get();
		model.addAttribute("event", e);
    	return "editEvent.jsp";
    }
    
    @PostMapping("edit/{eventId}")
    public String editEvent(@PathVariable("eventId") Long eventId, @ModelAttribute("event") Event event) {
    	System.out.println("Edit event invoked");
    	Event oldEvent = allService.findEventById(eventId).get();
    	allService.updateEvent(oldEvent, event);
    	return "redirect:/events";
    }
    
    @PostMapping("delete/{eventId}")
    public String deleteEvent(@PathVariable("eventId") Long eventId) {
    	System.out.println("delete event invoked");
    	Event event = allService.findEventById(eventId).get();
    	allService.deleteEvent(event);
    	return "redirect:/events";
    }
    
    @PostMapping("joinEvent/{id}")
    public String joinEvent(@PathVariable("id") String id, HttpSession session) {
    	System.out.println("joinEvent " + id);
    	Event event = allService.findEventById(Long.parseLong(id)).get();
    	User user = userService.findUserById((Long) session.getAttribute("userId"));
    	allService.addAttendee(event, user);
    	
    	return "redirect:/events";
    }
    
    @PostMapping("leaveEvent/{id}")
    public String leaveEvent(@PathVariable("id") String id, HttpSession session) {
    	System.out.println("leaveEvent " + id);
    	Event event = allService.findEventById(Long.parseLong(id)).get();
    	User user = userService.findUserById((Long) session.getAttribute("userId"));
    	allService.removeAttendee(event, user);
    	
    	return "redirect:/events";
    }
}
