public class Fizzbuzz {
  public static String generate(int userInput ) {
    String myvar = "";
    for(int i=1; i <= userInput; i++) {
       if (i %3==0 && i %5==0) {
        myvar+="FizzBuzz, ";
      } else if(i %3==0) {
        myvar+="Fizz, ";
      } else if (i %5==0) {
        myvar+="Buzz, ";
      }
      else {
        myvar += i + ", ";
      }
    }

    return myvar.substring(0, myvar.length() - 2);

    }
}
