package com.cd.languages.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cd.languages.models.Language;


public interface LanguageRepository extends CrudRepository<Language, Long>{
	List<Language> findAll();
	Optional<Language> findById(Long id);
	void deleteById(Long id);
}


//@Repository
//public interface BookRepository extends CrudRepository<Book, Long>{
//    // this method retrieves all the books from the database
//    List<Book> findAll();
//    // this method find a book by their description
//    List<Book> findByDescriptionContaining(String search);
//    // this method counts how many titles contain a certain string
//    Long countByTitleContaining(String search);
//    // this method deletes a book that starts with a specific title
//    Long deleteByTitleStartingWith(String search);
//    Optional<Book> findById(Long id);
//    void deleteById(Long id);
//}
