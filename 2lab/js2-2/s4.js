class User {
    #age
    constructor(name, age, tel) {
        this.name = name
        this.#age = this.checkingAge(age)
        this._tel = this.checking(tel)
    }

    get tel() {
        return this._tel
    }
    
    set tel(tel) {
        this._tel = this.checking(tel)
    }

    get age() {
        return this.#age
    }
    
    set age(age) {
        this.#age = this.checkingAge(age)
    }

    checkingAge(age){
        if (age > 1 && age < 100){
            return age
        } else {
            console.log("error")
            return null
        }
    }

    checking (tel) {
        if (tel[0] === "+" && tel[1] === "7" && tel.length === 12) {
            return tel
        } else {
            console.log("error")
            return null
        }
    }

    hello() {
        console.log("Hi! My name is " + this.name + ". And I am " + this.age + " years old.")
    }
}

let user1 = new User("Andrey", 21, "+79378011192")
user1.hello()
