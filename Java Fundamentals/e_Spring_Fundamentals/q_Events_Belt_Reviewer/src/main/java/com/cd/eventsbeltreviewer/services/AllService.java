package com.cd.eventsbeltreviewer.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.eventsbeltreviewer.models.Event;
import com.cd.eventsbeltreviewer.models.Message;
import com.cd.eventsbeltreviewer.models.User;
import com.cd.eventsbeltreviewer.repositories.EventRepository;
import com.cd.eventsbeltreviewer.repositories.MessageRepository;
import com.cd.eventsbeltreviewer.repositories.UserRepository;

@Service
public class AllService {
	private final UserRepository userRepository;
	private final MessageRepository messageRepository;
	private final EventRepository eventRepository;
	
	public AllService(UserRepository userRepository, MessageRepository messageRepository, EventRepository eventRepository) {
		this.userRepository = userRepository;
		this.messageRepository = messageRepository;
		this.eventRepository = eventRepository;
	}
	
	public List<Event> findAllEventsInUserState(String state) {
		return eventRepository.findAllEventsInUserState(state);
	}
	
	public List<Event> findAllEventsNotInUserState(String state) {
		return eventRepository.findAllEventsNotInUserState(state);
	}
	
	public Event createEvent(Event event, User eventHost) {
		event.setEventHost(eventHost);
		return eventRepository.save(event);
	}
	
	public Optional<Event> findEventById(Long id) {
		return eventRepository.findById(id);
	}
	
	public Message addMessageToEvent(Event event, Message message, User user) {
		message.setMessageEvent(event);
		message.setMessagePoster(user);
		return messageRepository.save(message);
	}
	
	public Event updateEvent(Event oldEvent, Event newEvent) {
		oldEvent.setCity(newEvent.getCity());
		oldEvent.setName(newEvent.getName());
		oldEvent.setState(newEvent.getState());
		oldEvent.setDate(newEvent.getDate());
		
		return eventRepository.save(oldEvent);
	}
	
}
