public class FizzBuzzTest {
  public static void main (String[] args) {
    FizzBuzz fb = new FizzBuzz();
    String q1 = fb.fizzBuzz(3);
    String q2 = fb.fizzBuzz(5);
    String q3 = fb.fizzBuzz(15);
    String q4 = fb.fizzBuzz(2);
    System.out.print(q1);
    System.out.print(q2);
    System.out.print(q3);
    System.out.print(q4);
  }
}