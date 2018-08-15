package com.cd.eventsbeltreviewer.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Future;
import javax.validation.constraints.Size;

@Entity
@Table(name="events")
public class Event {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    @Future(message="Enter a valid date (can't be in the past!)")
    private Date date;
    @Size(min=3, message="Event name must be greater than 3 characters")
    private String name;
    @Size(min=3, message="City name must be greater than 3 characters")
    private String city;
    @Size(min=2, max=2, message="State must be in 2 letter format")
    private String state;
    
    //many to many: attendees, or event attendees
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "attendees", 
        joinColumns = @JoinColumn(name = "event_id"), 
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )     
    private List<User> attendeeUsers;
    
    //many to one: host, or event host
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User eventHost;
    
    //one to many: messages belonging to event
    @OneToMany(mappedBy="messageEvent", fetch = FetchType.LAZY)
    private List<Message> eventMessages;
    
    
	public Event() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public List<User> getAttendeeUsers() {
		return attendeeUsers;
	}

	public void setAttendeeUsers(List<User> attendeeUsers) {
		this.attendeeUsers = attendeeUsers;
	}

	public User getEventHost() {
		return eventHost;
	}

	public void setEventHost(User eventHost) {
		this.eventHost = eventHost;
	}

	public List<Message> getEventMessages() {
		return eventMessages;
	}

	public void setEventMessages(List<Message> eventMessages) {
		this.eventMessages = eventMessages;
	}

	@PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
	
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
}
