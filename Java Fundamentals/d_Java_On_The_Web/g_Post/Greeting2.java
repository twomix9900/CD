// ...
public class Greeting extends HttpServlet {    
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      // do something with the POST request
      
      // redirect
      response.sendRedirect("/Home/Greeting");
  }
}    
