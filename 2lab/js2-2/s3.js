class User {
    
    constructor(name, age, tel) {
        this.name = name
        this.age = age
        this._tel = this.checking(tel)
    }

    get tel() {
        return this._tel
    }
    
    set tel(tel) {
        this._tel = this.checking(tel)
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
