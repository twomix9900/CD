public class StringManipulationTest {
  public static void main(String[] args) {
    StringManipulation sm = new StringManipulation();
    System.out.println(sm.trimAndConcat("   Hello    ", "     World     "));
    System.out.println(sm.getIndexOrNull("Coding", 'o'));
    System.out.println(sm.getIndexOrNull("Hello World", 'o'));
    System.out.println(sm.getIndexOrNull("Hi", 'o'));
    System.out.println(sm.getIndexOrNull("Hello", "llo"));
    System.out.println(sm.getIndexOrNull("Hello", "world"));
    System.out.println(sm.concatSubstring("hello", 1, 2, "world"));
  }
}