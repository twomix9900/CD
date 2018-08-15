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
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Entity
@Table(name="users")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Email(message="Email must be valid")
    private String email;
    @Size(min=3, message="First name must be greater than 3 characters")
    private String firstName;
    @Size(min=3, message="Last name must be greater than 3 characters")
    private String lastName;
    @Size(min=3, message="City name must be greater than 3 characters")
    private String city;
    @Size(min=2, max=2, message="State must be in 2 letter format")
    private String state;
    @Size(min=5, message="Password must be greater than 5 characters")
    private String password;
    @Transient
    private String passwordConfirmation;
    @Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    
    //many to many: attendees, or events user is attending
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "attendees", 
        joinColumns = @JoinColumn(name = "user_id"), 
        inverseJoinColumns = @JoinColumn(name = "event_id")
    )     
    private List<Event> attendeeEvents;
    
    //one to many: events, or events user is hosting
    @OneToMany(mappedBy="eventHost", fetch = FetchType.LAZY)
    private List<Event> userEvents;
    
    //one to many: messages, or messages user posted
    @OneToMany(mappedBy="messagePoster", fetch = FetchType.LAZY)
    private List<Message> userMessages;
    
    public User() {
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPasswordConfirmation() {
		return passwordConfirmation;
	}

	public void setPasswordConfirmation(String passwordConfirmation) {
		this.passwordConfirmation = passwordConfirmation;
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

	public List<Event> getAttendeeEvents() {
		return attendeeEvents;
	}

	public void setAttendeeEvents(List<Event> attendeeEvents) {
		this.attendeeEvents = attendeeEvents;
	}

	public List<Event> getUserEvents() {
		return userEvents;
	}

	public void setUserEvents(List<Event> userEvents) {
		this.userEvents = userEvents;
	}

	public List<Message> getUserMessages() {
		return userMessages;
	}

	public void setUserMessages(List<Message> userMessages) {
		this.userMessages = userMessages;
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

