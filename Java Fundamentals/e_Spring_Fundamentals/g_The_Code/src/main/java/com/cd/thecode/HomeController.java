package com.cd.thecode;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


@Controller
public class HomeController {
	@RequestMapping(value="", method=RequestMethod.POST)
	public String home(Model model, @RequestParam(value="code") String code, RedirectAttributes redirectAttributes) {
		if (code.equals("bushido")) {
			System.out.println("bushido " + code);
			return "code.jsp";
		} else {
			System.out.println("not bushido " + code);
			redirectAttributes.addFlashAttribute("error", "You must train harder!");
			return "redirect:/";
		}
	}
	
	
	@RequestMapping(value="")
	public String home(Model model) {
		return "index.jsp";
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