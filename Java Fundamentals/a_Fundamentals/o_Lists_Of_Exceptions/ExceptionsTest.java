import java.util.*;
import java.lang.*;

public class ExceptionsTest {
  public static void main (String[] args) {
    // Exceptions e = new Exceptions();
    ArrayList<Object> myList = new ArrayList<Object>();
    myList.add("13");
    myList.add("hello world");
    myList.add(48);
    myList.add("Goodbye World");
    try {
      for (int i = 0; i < myList.size(); i++) {
        System.out.println(i);
        Integer castedValue = (Integer) myList.get(i);
      }
    } catch (ClassCastException e) {
      System.out.println("Ruh Roh");
      System.out.println("e = " + e);
    }

  }
}