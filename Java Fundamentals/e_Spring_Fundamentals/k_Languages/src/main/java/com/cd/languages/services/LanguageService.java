package com.cd.languages.services;

import java.awt.print.Book;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.languages.models.Language;
import com.cd.languages.repositories.LanguageRepository;
@Service
public class LanguageService {
	private final LanguageRepository languageRepository;
	
	public LanguageService(LanguageRepository languageRepository) {
		this.languageRepository = languageRepository;
	}
	
	public List<Language> allLanguages() {
		return languageRepository.findAll();
	}
	
	public Language createLanguage(Language l) {
		return languageRepository.save(l);
	}
	
	public Language findLanguage(Long id) {
	  Optional<Language> optionalLanguage = languageRepository.findById(id);
	  if(optionalLanguage.isPresent()) {
	      return optionalLanguage.get();
	  } else {
	      return null;
	  }
	}
	
	public Language updateLanguage(Language language) {
		language.setName(language.getName());
		language.setCreator(language.getCreator());
		language.setCurrentVersion(language.getCurrentVersion());
		
		return languageRepository.save(language);
  }
	public Boolean deleteLanguage(Long id) {
      Optional<Language> optionalLanguage = languageRepository.findById(id);
      if(optionalLanguage.isPresent()) {
          languageRepository.deleteById(id);
          return true; 
      } else {
          return false;
      }
  }
}


//@Service
//public class BookService {
//	private final BookRepository bookRepository;
//	
//	public BookService(BookRepository bookRepository) {
//		this.bookRepository = bookRepository;
//	}
//	
//    // returns all the books
//    public List<Book> allBooks() {
//        return bookRepository.findAll();
//    }
//    // creates a book
//    public Book createBook(Book b) {
//        return bookRepository.save(b);
//    } 
//    // retrieves a book
//    public Book findBook(Long id) {
//        Optional<Book> optionalBook = bookRepository.findById(id);
//        if(optionalBook.isPresent()) {
//            return optionalBook.get();
//        } else {
//            return null;
//        }
//    }
//    public Book updateBook(Book book) {
//		book.setTitle(book.getTitle());
//		book.setDescription(book.getDescription());
//		book.setLanguage(book.getLanguage());
//		book.setNumberOfPages(book.getNumberOfPages());
//		return bookRepository.save(book);
//    }
//    public Boolean deleteBook(Long id) {
//        Optional<Book> optionalBook = bookRepository.findById(id);
//        if(optionalBook.isPresent()) {
//            bookRepository.deleteById(id);
//            return true; 
//        } else {
//            return false;
//        }
//    }
//}