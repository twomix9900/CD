package com.cd.mvcdemo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.mvcdemo.models.Book;
import com.cd.mvcdemo.repositories.BookRepository;

@Service
public class BookService {
	private final BookRepository bookRepository;
	
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    } 
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    public Book updateBook(Book book) {
		book.setTitle(book.getTitle());
		book.setDescription(book.getDescription());
		book.setLanguage(book.getLanguage());
		book.setNumberOfPages(book.getNumberOfPages());
		return bookRepository.save(book);
    }
    public Boolean deleteBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            bookRepository.deleteById(id);
            return true; 
        } else {
            return false;
        }
    }
}
