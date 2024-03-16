class User {
    #age
    constructor(name, age) {
        this.name = name
        this.#age = this.checkingAge(age)
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

    hello() {
        console.log("Hi! My name is " + this.name + ". And I am " + this.age + " years old.")
    }
}



class Student extends  User{
    #knowledge = 0
    constructor(name, age){
        super(name, age)
    }


    get knowledge() {
        return this.#knowledge
    }

    learn(){
        this.#knowledge += 1
    }


    printKnowledge(){
        console.log("knowledge= " + this.knowledge)
    }

    hello() {
        console.log("Hi! My name is " + this.name + ". And I am " + this.age + " years old.And I am astudent!")
    }
}


let student = new Student("Andrey", 21, "+79378011192")
student.hello()



let l1 = student.knowledge
student.learn()
student.learn()
student.learn()

let l2 = student.knowledge
console.log("l1=" + l1 + "     l2=" + l2)
