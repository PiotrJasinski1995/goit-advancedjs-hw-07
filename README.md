# Task 1

A Student class that contains three properties: name, age, and grade. Instead of declaring these properties in the class body, then in the constructor, and finally assigning values ​​to them, write a shorthand initialization.

```ts
class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
```

# Task 2

Your task will be to create two classes – Employee and Manager.

The Employee class should include:

a name property, which will be accessible to everyone.

a department property, which will be accessible only within the Employee class.

a salary property, which will be accessible only within the Employee class and its subclasses.

The Manager class should be a subclass of the Employee class.

You need to implement a constructor in the Manager class that will call the superclass constructor and increment salary by 10000.

```ts
class Employee {
  // Fill in the access modifiers
  name: string;
  department: string;
  salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Implement the constructor and increase salary by 10000
}
```

# Task 3

You are creating a game where there are characters with different roles. You are currently working on a Wizard class that should implement two interfaces - ICharacter and ISpellCaster.

Define the ICharacter and ISpellCaster interfaces so that they meet the requirements of the Wizard class. The ICharacter interface should include properties name and level, as well as methods introduce and levelUp. The ISpellCaster interface should include a method castSpell.

```ts
// implementation of the Wizard class
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ", " + this.name);
  }

  castSpell(): void {
    console.log("Casting a spell, behold my power!");
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// class testing
const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
```

# Task 4 \*

In this task, you have to implement a real-life scenario where a person, a key, and a house interact with each other.

Key: Create a Key class. It should have one private signature property that is randomly generated when an object of this class is created (for example, Math.random()). This class should also have a getSignature method that returns the signature property value.

Person: Create a Person class. The constructor of this class takes an object of the Key class and stores them in the private key property. The Person class should have a getKey method that returns the stored key.

House: Create an abstract House class. This class has two properties: door, which can be open (true) or closed (false), and key, which stores an object of the Key class. This class should also have a comeIn method that adds an object of the Person class to the tenants array if the door is open. Your abstract House class should also have an abstract OpenDoor method that accepts an object of the Key class.

MyHouse: Create a class MyHouse that inherits from the abstract class House. Implement the openDoor method in this class. If the key passed to this method matches the key stored as key, the door opens.

After implementing all the classes, create objects for each class and try to recreate the scenario in which a person comes home.

For example, like this:

```ts
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```
