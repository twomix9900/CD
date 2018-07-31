public class PythagoreanTest {
  public static void main (String[] args) {
    Pythagorean py = new Pythagorean();
    double hyp = py.calculateHypotenuse(3, 4);
    System.out.println(hyp);
  }
}