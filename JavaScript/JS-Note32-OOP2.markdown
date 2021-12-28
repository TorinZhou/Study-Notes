# OOP2

## ES6 Classes

## Setters & Getters

> They are functions to manipulate data, But from outside<br>
> they look like properties.

```javascript
const account = {
  owner: "torin",
  movements: [200, 300, 400],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest); //400
account.latest = 999; // [200, 300, 400 999]
// its OK to have the same name
```

```javascript
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }
}
const torin1 = new PersonCl("Torin", 1990);
console.log(torin1);
```

> What if I wanna set a already exist property ?

> Use setter to implement validation.

```javascript
class Account {
  constructor(password) {
    if (password.length > 8) {
      this.password = password;
    }
  }
}
const account1 = new Account("123456789");
console.log(account1);
account1.password = "123";
console.log(account1);
```

> now That's bad. My lenght check only happens at construting phase.

```javascript
class AccountFix {
  constructor(password) {
    this.password = password;
  }
  set password(pass) {
    if (pass.length > 6) this._password = pass;
    else console.log("too short");
  }
  get password() {
    return this._password;
  }
  // faked this.password property.
}

const account2 = new AccountFix("123456789");
console.log(account2.password); // 123456789
account2.password = "123";
console.log(account2.password); // 123456789
const account3 = new AccountFix("123");
console.log(account3); // OBJ with no property
```
