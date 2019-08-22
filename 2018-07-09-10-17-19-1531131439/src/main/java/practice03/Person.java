package practice03;

public class Person {
    private  String name;
    private  int age;

    public Person(){
        this.name = "Tom";
        this.age = 21;
    }


    public void Introduce(String name, int age){
        System.out.println("My name is %s. I am %d years old.", this.name, this.age);
    }
}
