package com.cd.languages.controllers;

import java.awt.print.Book;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.cd.languages.models.Language;
import com.cd.languages.services.LanguageService;

@Controller
@RequestMapping("/languages")
public class LanguagesController {
	private final LanguageService languageService;
	public LanguagesController(LanguageService languageService) {
		this.languageService = languageService;
	}
	
	@RequestMapping("")
	public String index(Model model, @Valid @ModelAttribute("language") Language language, BindingResult result) {
		List<Language> languages = languageService.allLanguages();
		model.addAttribute("languages", languages);
		return "/languages/index.jsp";
	}
	
    @RequestMapping(value="", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("language") Language language, BindingResult result) {
    	if (result.hasErrors()) {
    		return "/languages/index.jsp";
    	} else {
    		languageService.createLanguage(language);
    		return "redirect:/languages";
    	}
    }
    
    @RequestMapping("{id}") 
    public String showBook(@PathVariable("id") Long id, Model model) {
    	Language language = languageService.findLanguage(id);
    	if (language != null) {
    		model.addAttribute("language", language);
    		return "/languages/show.jsp";
    	} else {
    		return "redirect:/languages";
    	}
    }
    
    @RequestMapping(value="{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("language") Language language, BindingResult result) {
    	if (result.hasErrors()) {
    		return "/languages/edit.jsp";
    	} else {
    		languageService.updateLanguage(language);
    		return "redirect:/languages";
    	}
    }
    
    @RequestMapping(value="{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
    	languageService.deleteLanguage(id);
    	return "redirect:/languages";
    }
    
    @RequestMapping("{id}/edit")
    public String editBook(@PathVariable("id") Long id, Model model) {
    	Language language = languageService.findLanguage(id);
    	if (language != null) {
    		model.addAttribute("language", language);
    		return "/languages/edit.jsp";
    	} else {
    		return "redirect:/languages";
    	}
    }
    
    
//    private final BookService bookService;
//    
//    public BooksController(BookService bookService) {
//        this.bookService = bookService;
//    }
//    
//    @RequestMapping("/books")
//    public String index(Model model) {
//        List<Book> books = bookService.allBooks();
//        model.addAttribute("books", books);
//        return "/books/index.jsp";
//    }
//    
//    @RequestMapping("/books/new")
//    public String newBook(@ModelAttribute("book") Book book) {
//        return "/books/new.jsp";
//    }
//    
//    @RequestMapping(value="/books", method=RequestMethod.POST)
//    public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
//        if (result.hasErrors()) {
//            return "/books/new.jsp";
//        } else {
//            bookService.createBook(book);
//            return "redirect:/books";
//        }
//    }
//    
//    @RequestMapping("/books/{id}") 
//    public String showBook(@PathVariable("id") Long id, Model model) {
//    	Book book = bookService.findBook(id);
//    	if (book != null) {
//    		model.addAttribute("book", book);
//    		return "/books/show.jsp";
//    	} else {
//    		return "redirect:/books";
//    	}
//    }
//    
//    @RequestMapping("/books/{id}/edit")
//    public String edit(@PathVariable("id") Long id, Model model) {
//        Book book = bookService.findBook(id);
//        model.addAttribute("book", book);
//        return "/books/edit.jsp";
//    }
//    
//    @RequestMapping(value="/books/{id}", method=RequestMethod.PUT)
//    public String update(@Valid @ModelAttribute("book") Book book, BindingResult result) {
//        if (result.hasErrors()) {
//            return "/books/edit.jsp";
//        } else {
//            bookService.updateBook(book);
//            return "redirect:/books";
//        }
//    }
//    
//    @RequestMapping(value="/books/{id}", method=RequestMethod.DELETE)
//    public String destroy(@PathVariable("id") Long id) {
//        bookService.deleteBook(id);
//        return "redirect:/books";
//    }
}
