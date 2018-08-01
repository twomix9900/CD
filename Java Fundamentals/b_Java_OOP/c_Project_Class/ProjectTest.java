public class ProjectTest {
  public static void main (String[] args) {
    Project p1 = new Project();
    Project p2 = new Project("myProject");
    Project p3 = new Project("myProject", "a riveting project");

    p1.setName("p1");
    p2.setName("p2");
    p3.setName("p3");
    p1.setDescription("p1 description");
    p2.setDescription("p2 description");
    p3.setDescription("p3 description");
    System.out.println(p1.elevatorPitch());
    System.out.println(p2.elevatorPitch());
    System.out.println(p3.elevatorPitch());
  }
}