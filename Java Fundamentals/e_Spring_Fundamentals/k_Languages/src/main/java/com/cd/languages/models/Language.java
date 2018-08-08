package com.cd.languages.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name="languages")
public class Language {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Size(min = 2, max = 20)
	private String name;
	@Size(min=2, max=20)
	private String creator;
	@Size(min=1)
	private String currentVersion;
	@Column(updatable=false)
	private Date createdAt;
	private Date updatedAt;
	
	@PrePersist
	protected void onCreate(){
	    this.createdAt = new Date();
	}
	
	@PreUpdate
	protected void onUpdate(){
	    this.updatedAt = new Date();
	}
	
	public Language() {
	}

	public Language(Long id, @Size(min = 2, max = 20) String name, @Size(min = 2, max = 20) String creator,
			@NotNull String currentVersion, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.name = name;
		this.creator = creator;
		this.currentVersion = currentVersion;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public String getCurrentVersion() {
		return currentVersion;
	}

	public void setCurrentVersion(String currentVersion) {
		this.currentVersion = currentVersion;
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
}


//@Entity
//@Table(name="books")
//public class Book {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    @Size(min = 5, max = 200)
//    private String title;
//    @Size(min = 5, max = 200)
//    private String description;
//    @Size(min = 3, max = 40)
//    private String language;
//    @Min(100)
//    private Integer numberOfPages;
//    // This will not allow the createdAt column to be updated after creation
//    @Column(updatable=false)
//    private Date createdAt;
//    private Date updatedAt;
//    
//    @PrePersist
//    protected void onCreate(){
//        this.createdAt = new Date();
//    }
//    
//    @PreUpdate
//    protected void onUpdate(){
//        this.updatedAt = new Date();
//    }
//    
//	public Book() {
//	}
//	
//    public Book(String title, String desc, String lang, int pages) {
//        this.title = title;
//        this.description = desc;
//        this.language = lang;
//        this.numberOfPages = pages;
//    }
//    
//
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public String getTitle() {
//		return title;
//	}
//
//	public void setTitle(String title) {
//		this.title = title;
//	}
//
//	public String getDescription() {
//		return description;
//	}
//
//	public void setDescription(String description) {
//		this.description = description;
//	}
//
//	public String getLanguage() {
//		return language;
//	}
//
//	public void setLanguage(String language) {
//		this.language = language;
//	}
//
//	public Integer getNumberOfPages() {
//		return numberOfPages;
//	}
//
//	public void setNumberOfPages(Integer numberOfPages) {
//		this.numberOfPages = numberOfPages;
//	}
//
//	public Date getCreatedAt() {
//		return createdAt;
//	}
//
//	public void setCreatedAt(Date createdAt) {
//		this.createdAt = createdAt;
//	}
//
//	public Date getUpdatedAt() {
//		return updatedAt;
//	}
//
//	public void setUpdatedAt(Date updatedAt) {
//		this.updatedAt = updatedAt;
//	}
//}