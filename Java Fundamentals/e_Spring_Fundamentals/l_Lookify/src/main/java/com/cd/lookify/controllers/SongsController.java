package com.cd.lookify.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.cd.lookify.models.Song;
import com.cd.lookify.services.SongService;


@Controller
@RequestMapping("/songs")
public class SongsController {
	private final SongService songService;
	
	public SongsController(SongService songService) {
		this.songService = songService;
	}
	
	@RequestMapping("")
	public String index(Model model, @Valid @ModelAttribute("language") Song song, BindingResult result) {
		List<Song> songs = songService.allSongs();
		model.addAttribute("songs", songs);
		return "/songs/index.jsp";
	}
	
	@RequestMapping("/new")
	public String newSong(@Valid @ModelAttribute("song") Song song, BindingResult result) {	
		return "/songs/new.jsp";
	}
	
	@RequestMapping(value="/new", method=RequestMethod.POST)
	public String createSong(@Valid @ModelAttribute("song") Song song, BindingResult result) {
		if (result.hasErrors()) {
			return "/songs/new.jsp";
		} else {
			songService.createSong(song);
			return "redirect:/songs";
		}
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public String destroySong(@PathVariable("id") Long id) {
		songService.deleteSong(id);
		return "redirect:/songs";
	}
	
	@RequestMapping("/{id}") 
	public String showSong(@PathVariable("id") Long id, Model model) {
		Song song = songService.findSong(id);
		if (song != null) {
			model.addAttribute("song", song);
			return "/songs/show.jsp";
		} else {
			return "redirect:/songs";
		}
	}
	
	@RequestMapping("/topten")
	public String showTopTenSongs(Model model) {
		List<Song> topTenSongs = new ArrayList<Song>();
		List<Song> songs = songService.allSongs();
		Arrays.sort(songs);
		model.addAttribute("songs", songs);
		return "/songs/topten.jsp";
	}
	
	
//	public LanguagesController(LanguageService languageService) {
//		this.languageService = languageService;
//	}
//	
//	@RequestMapping("")
//	public String index(Model model, @Valid @ModelAttribute("language") Language language, BindingResult result) {
//		List<Language> languages = languageService.allLanguages();
//		model.addAttribute("languages", languages);
//		return "/languages/index.jsp";
//	}
//	
//    @RequestMapping(value="", method=RequestMethod.POST)
//    public String create(@Valid @ModelAttribute("language") Language language, BindingResult result) {
//    	if (result.hasErrors()) {
//    		return "/languages/index.jsp";
//    	} else {
//    		languageService.createLanguage(language);
//    		return "redirect:/languages";
//    	}
//    }
//    
//    @RequestMapping("{id}") 
//    public String showBook(@PathVariable("id") Long id, Model model) {
//    	Language language = languageService.findLanguage(id);
//    	if (language != null) {
//    		model.addAttribute("language", language);
//    		return "/languages/show.jsp";
//    	} else {
//    		return "redirect:/languages";
//    	}
//    }
//    
//    @RequestMapping(value="{id}", method=RequestMethod.PUT)
//    public String update(@Valid @ModelAttribute("language") Language language, BindingResult result) {
//    	if (result.hasErrors()) {
//    		return "/languages/edit.jsp";
//    	} else {
//    		languageService.updateLanguage(language);
//    		return "redirect:/languages";
//    	}
//    }
//    
//    @RequestMapping(value="{id}", method=RequestMethod.DELETE)
//    public String destroy(@PathVariable("id") Long id) {
//    	languageService.deleteLanguage(id);
//    	return "redirect:/languages";
//    }
//    
//    @RequestMapping("{id}/edit")
//    public String editBook(@PathVariable("id") Long id, Model model) {
//    	Language language = languageService.findLanguage(id);
//    	if (language != null) {
//    		model.addAttribute("language", language);
//    		return "/languages/edit.jsp";
//    	} else {
//    		return "redirect:/languages";
//    	}
//    }
}
