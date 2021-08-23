import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class FizzbuzzTest {
  @Test
  public void testGenerateListsNumbersUpTo2() {
    Fizzbuzz subject = new Fizzbuzz();
    System.out.println( subject);
    String result = subject.generate(2);
    System.out.printf( result);
    assertEquals( "1, 2", result);
  }
  @Test
  public void testGenerateListsNumbersUpToThree() {
    Fizzbuzz subject = new Fizzbuzz();
    System.out.println( subject);
    String result = subject.generate(3);
    System.out.printf( result);
    assertEquals("1, 2, Fizz", result);
  }
  @Test
  public void testGenerateListsNumbersUpToFifteen() {
    Fizzbuzz subject = new Fizzbuzz();
    System.out.println( subject);
    String result = subject.generate(15);
    System.out.printf( result);
    assertEquals( "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz", result);
  }
}
