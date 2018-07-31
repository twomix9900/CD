import java.util.*;

public class Shared {
  public static void main(String[] args) {
    HashMap<String, String> trackList = new HashMap<String, String>();
    trackList.put("backstreet boys", "backstreets back");
    trackList.put("rick astley", "never gonna give you up");
    trackList.put("scatman", "dududududuuddududu");
    trackList.put("ace of base", "i saw the sun");

    String song = trackList.get("backstreet boys");
    System.out.println(song);
    Set<String> keys = trackList.keySet();
    for (String key : keys) {
      System.out.println(key + ": " + trackList.get(key));
    }
  }
}