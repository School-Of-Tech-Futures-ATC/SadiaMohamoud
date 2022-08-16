//OOP

function reset game() {
    resetBoard();
    resetScore();
    resetTurunCounter();
    resetGameover();
    resetPlayer();
}
class Board {
    rows;
    columns;
}

class Player {
    name;
    high_score;
    current_score;
    constructor(name, current_score, high_score)
        this.name = name;
        this.current_score = current_score;
        this.high_score = this.high_score

}
getPlayerDetails(){
    console.log(this.name, this.current_score, this.high_score)
}

class Game {
    currentPlayer;
    nextPlayer;
}

const gav = new Player("Gav", 0, 0);
const bob = new player("Bob", 0, 0);
gav.getPlayerDetails();

//Base class or parent class
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } 
    getDetails() {
        console.log(this.name, this.age)
    }
}

//sub class, child class
class Student extends Person {
    //nothing here
    student_id;
}

class Lecturer extends Person {
    //nothing here
    role;
}

const jane = new student("Jane", 20);
jane.getDetails
const gav = new Lecturer("Gav", 30);
gav.getDetails
