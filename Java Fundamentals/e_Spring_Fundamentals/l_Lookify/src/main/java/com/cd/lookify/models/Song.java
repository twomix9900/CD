package com.cd.lookify.models;

import java.util.Comparator;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@Entity
@Table(name="songs")
public class Song {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Size(min = 5, max = 50)
	private String title;
	@Size(min = 5, max = 50)
	private String artist;
	@Min(1)
	@Max(10)
	private Integer rating;
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
	
	public Song() {
	}

	public Song(Long id, @Size(min = 5) String title, @Size(min = 5) String artist,
			@Size(min = 1, max = 10) Integer rating, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.title = title;
		this.artist = artist;
		this.rating = rating;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
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
	
//	public int compareTo(Song compareSong) {
//		int compareRating = ((Song) compareSong).getRating();
//		
//		return compareRating - this.rating;
//	}
//	
//	public static Comparator<Song> SongTitleComparator = new Comparator<Song>() {
//		public int compare(Song song1, Song song2) {
//			String songTitle1 = song1.getTitle().toUpperCase();
//			String songTitle2 = song2.getTitle().toUpperCase();
//			
//			return songTitle1.compareTo(songTitle2);
//			//return songTitle2.compareTo(songTitle1);
//		}
//	};
	

}
