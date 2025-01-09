function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

class Key {
  private signature: number = getRandomInt(1, 999999);

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  protected door: boolean = false;

  constructor(protected key: Key) {}

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      this.door = false;
      console.log(
        `Person with key: ${this.key.getSignature()} walks into the house.`
      );
      return;
    }
    console.log("Door is closed.");
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (this.key === key) {
      this.door = true;
      console.log(`The door was opened using key ${key.getSignature()}.`);
    } else {
      console.log("Wrong key!");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

const differentKey = new Key();
const differentPerson = new Person(differentKey);

house.openDoor(differentPerson.getKey());
house.comeIn(differentPerson);

export {};
