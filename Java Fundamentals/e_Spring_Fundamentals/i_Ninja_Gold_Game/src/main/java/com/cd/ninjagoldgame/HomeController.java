package com.cd.ninjagoldgame;

import java.util.ArrayList;
import java.util.Date;
import java.util.ArrayList;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@SuppressWarnings("unused")
@Controller
public class HomeController {
	@RequestMapping("")
	public String home(HttpSession session, Model model) {
		if (session.getAttribute("gold") == null) {
			session.setAttribute("gold", 0);
		}
		
		if (session.getAttribute("activity") == null) {
			ArrayList <String> activity = new ArrayList <String>(); 
			session.setAttribute("activity", activity);
		}
		
		int gold = (int) session.getAttribute("gold");
		@SuppressWarnings("unchecked")
		ArrayList <String> activity = (ArrayList <String>) session.getAttribute("activity");
		
		model.addAttribute("activity", activity);
		model.addAttribute("gold", gold);
		return "index.jsp";
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public String homeProcess(
			HttpSession session, 
			Model model,
			@RequestParam(value="farm", required=false) String farm,
			@RequestParam(value="cave", required=false) String cave,
			@RequestParam(value="house", required=false) String house,
			@RequestParam(value="casino", required=false) String casino
		) {
		Random random = new Random();
		
		if (farm != null) {			
			this.goldProcess(10, 20, session, "farm");
		}
		
		if (cave != null) {
			this.goldProcess(5, 10, session, "cave");
		}
		
		if (house != null) {		
			this.goldProcess(2, 5, session, "house");
		}
		
		if (casino != null) {		
			this.goldProcess(-50, 50, session, "casino");
		}
		
		return "redirect:/";
	}
	
	private void goldProcess(int min, int max, HttpSession session, String location) {
		@SuppressWarnings("unchecked")
		ArrayList <String> activity = (ArrayList <String>) session.getAttribute("activity");
		Date date = new java.util.Date();
		Random random = new Random();
		int randomNum = random.nextInt((max - min) + 1) + min;
		int gold = (int) session.getAttribute("gold");
		gold += randomNum;
		if (randomNum > 0) {			
			String activityEntry = "You entered " + location + " and earned " + randomNum + " gold. (" + date + ")";
			activity.add(activityEntry);
		} else {
			String activityEntry = "You entered " + location + " and lost " + Math.abs(randomNum) + " gold. (" + date + ")";
			activity.add(activityEntry);
		}
		
		session.setAttribute("activity", activity);
		session.setAttribute("gold", gold);
		
	}
	
}

//@RestController
//@RequestMapping("/hello")
//public class HomeController {
//  @RequestMapping("")
//  public String hello() { // 3
//          return "Hello World!?!?!?!?!?!??!";
//  }
//  
//  @RequestMapping("/world") 
//  public String world() {
//  	 return "Class level annotations are cool too";
//  }
//  
//  @RequestMapping(value="/login", method=RequestMethod.POST)
//	  public String login(@RequestParam(value="username") String username, @RequestParam(value="password") String password) {
//	  {
//		return "redirect:/dashboard";
//  }
//  
//  @RequestMapping("/goodbye")
//  public String greetingGoodbye(){
//    return "Goodbye world!";
//  }
//  
//  @RequestMapping("/search")
//  public String index(@RequestParam(value="q", required=false) String searchQuery) {
//      if (searchQuery==null) {
//      	return "You searched for nothing";
//      } else {
//      	return "You searched for " + searchQuery;
//      }
//  }
//  
//  @RequestMapping("/pathvariable/{track}/{module}/{lesson}")
//  public String showStuff(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson) {
//  	return "Track: " + track + " Module: " + module + "Lesson: " + lesson;
//  }

//		@RequestMapping("/createError")
//		public String flashMessages(RedirectAttributes redirectAttributes) {
//			redirectAttributes.addFlashAttribute("error", "A test error!");
//			return "redirect:/";
//		}
//}

//@Controller
//public class HomeController {
//	@RequestMapping("/")
//	public String home(Model model) {
//		model.addAttribute("dojoName", "Burbank");
//		return "index.jsp";
//	}
//}

//public String index(HttpSession session){
//  session.setAttribute("count", 0);
//  Integer count = (Integer) session.getAttribute("count");
//}