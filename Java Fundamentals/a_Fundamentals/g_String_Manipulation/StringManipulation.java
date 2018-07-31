public class StringManipulation {
  public String trimAndConcat(String a, String b) {
    return a.trim().concat(b.trim());
  }

  public String getIndexOrNull(String a, char b) {
    if (a.indexOf(b) > 0) {
      int temp = a.indexOf(b);
      return Integer.toString(temp);
    } else {
      return "null";
    }
  }

  public String getIndexOrNull(String a, String b) {
    if (a.indexOf(b) > 0) {
      int temp = a.indexOf(b);
      return Integer.toString(temp);
    } else {
      return "null";
    }
  }

  public String concatSubstring(String a, int b, int c, String d) {
    return a.substring(b, c).concat(d);
  }
}