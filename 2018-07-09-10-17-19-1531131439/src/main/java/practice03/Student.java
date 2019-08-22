package practice03;


public class Student extends Person {

    private int klass;

    public Student(String name, int age, int klass) {
        super(name, age);
        this.klass = 2;
    }

    @Override
    public String introduce() {
        return String.format("I am a Student. I am at Class %d.", this.getKlass());
    }
}

