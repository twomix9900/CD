// ...
public class Hello extends HttpServlet {
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      HttpSession session = request.getSession();
      String name = request.getParameter("name");
      session.setAttribute("name", name)
      // ...


      // ...
public class Goodbye extends HttpServlet {
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      HttpSession session = request.getSession();
      String name = (String) session.getAttribute("name");
      // ...
