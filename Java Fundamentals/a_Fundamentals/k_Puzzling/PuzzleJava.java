import java.util.*;

public class PuzzleJava {
  // public <T> q1(T[] array) {
  //   int sum = 0;
  //   for (T i : array) {
  //     sum += i;
  //   }

  // }

  public ArrayList<Integer> q1() {
    int sum = 0;
    ArrayList<Integer> result = new ArrayList<Integer>();
    int[] array = { 3,5,1,2,7,9,8,13,25,32 };
    for (int i = 0; i < array.length; i++) {
      sum += array[i];
      if (array[i] > 10) {
        result.add(array[i]);
      }
    }
    System.out.println(sum);
    return result;
  }

  public ArrayList<String> q2() {
    ArrayList<String> array = new ArrayList<String>();
    ArrayList<String> result = new ArrayList<String>();
    array.add("Nancy");
    array.add("Jinichi");
    array.add("Fujibayashi");
    array.add("Momochi");
    array.add("Ishikawa");
    Collections.shuffle(array);
    for (String i : array) {
      System.out.println(i);
      if (i.length() > 5) {
        result.add(i);
      }
    }
    return result;
  }

  public void q3 () {
    ArrayList<Character> array = new ArrayList<Character>();
    array.add('a');
    array.add('b');
    array.add('c');
    array.add('d');
    array.add('e');
    array.add('f');
    array.add('g');
    array.add('h');
    array.add('i');
    array.add('j');
    array.add('k');
    array.add('l');
    array.add('m');
    array.add('n');
    array.add('o');
    array.add('p');
    array.add('q');
    array.add('r');
    array.add('s');
    array.add('t');
    array.add('u');
    array.add('v');
    array.add('w');
    array.add('x');
    array.add('y');
    array.add('z');
    Collections.shuffle(array);
    System.out.println(array.get(array.size() - 1));
    System.out.println(array.get(0));
    if (array.get(0) == 'a' || array.get(0) == 'e' || array.get(0) == 'i' || array.get(0) == 'o' || array.get(0) == 'u') {
      System.out.println("It's a vowel!");
    }
  }

  public ArrayList<Integer> q4() {
    Random r = new Random();
    ArrayList<Integer> result = new ArrayList<Integer>();
    for (int i = 0; i < 10; i++) {
      result.add(r.nextInt(46) + 55);
    }
    return result;
  }

  public ArrayList<Integer> q5() {
    Random r = new Random();
    ArrayList<Integer> result = new ArrayList<Integer>();
    for (int i = 0; i < 10; i++) {
      result.add(r.nextInt(46) + 55);
    }
    Collections.sort(result);
    System.out.println(result);
    System.out.println(result.get(0));
    System.out.println(result.get(9));
    return result;
  }

  public String q6() {
    Random r = new Random();
    String letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int number = r.nextInt(52);
    String a = Character.toString(letters.charAt(number));
    number = r.nextInt(52);
    String b = Character.toString(letters.charAt(number));
    number = r.nextInt(52);
    String c = Character.toString(letters.charAt(number));
    number = r.nextInt(52);
    String d = Character.toString(letters.charAt(number));
    number = r.nextInt(52);
    String e = Character.toString(letters.charAt(number));
    String result = "" + a + b + c + d + e;
    return result;
  }

  public ArrayList<String> q7() {
    Random r = new Random();
    ArrayList<String> result = new ArrayList<String>();
    String word;  
    int number = r.nextInt(52);
    String letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (int j = 0; j < 10; j++) {
      word = null;
      for (int i = 0; i < 5; i++) {
        number = r.nextInt(52);
        String a = Character.toString(letters.charAt(number));
        number = r.nextInt(52);
        String b = Character.toString(letters.charAt(number));
        number = r.nextInt(52);
        String c = Character.toString(letters.charAt(number));
        number = r.nextInt(52);
        String d = Character.toString(letters.charAt(number));
        number = r.nextInt(52);
        String e = Character.toString(letters.charAt(number));
        word = "" + a + b + c + d + e;
      }
      result.add(word);
    }
    return result;
  }
}