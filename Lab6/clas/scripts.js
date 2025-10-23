

function PersonF(fn, al) {
    var fullname = fn;  	// private
    var alias = al;			// private
    function getAllNames() { //private
        return (fullname + " " + alias);
    };
    this.getFullname = function () { return fullname; }; //public
    this.sayHello = function () { //public
        console.log(getAllNames.apply(this));
    };
}


class PersonC {
    #fullname; 	// private
    #alias;		// private

    constructor(fn, al) {
        this.#fullname = fn;
        this.#alias = al;
    }

    #getAllNames() { // private
        return (this.#fullname + " " + this.#alias);
    }

    getFullname() { return this.#fullname; }; //public

    sayHello() { //public
        console.log(this.#getAllNames());
    }
}

let p1 = new PersonF("Hoàng Tùng", "Bolero");
p1.sayHello(); //Hoàng Tùng Bolero

let p2 = new PersonC("Trần Bình", "Ballad");
p2.sayHello(); // Trần Bình Ballad


console.log(typeof (PersonF)); // function
console.log(typeof (PersonC)); // function



function StaffF(fn, al, sa) {
    PersonF.call(this, fn, al); // kế thừa
    var salary = sa;
    var parentHello = this.sayHello;
    this.sayHello = function () {  // overriding
        parentHello.apply(this);
        console.log(" with salary " + salary);
    };
    this.sayGoodbye = function () {
        console.log(this.getFullname() + " good bye everyone!");
    };
}
staff = new StaffF("Hoàng Ngân", "Diamon", 1000);
staff.sayHello(); // Hoàng Ngân Diamon with salary 1000
staff.sayGoodbye(); // Hoàng Ngân good bye everyone!



class StaffC extends PersonC { // kế thừa
    #salary;

    constructor(fn, al, sa) {
        super(fn, al);
        this.#salary = sa;
    }

    sayHello() {  // overriding
        super.sayHello();
        console.log(" with salary " + this.#salary);
    };

    sayGoodbye() {
        console.log(this.getFullname() + " good bye everyone!");
    };
}

staff = new StaffC("Trần Bình", "Ballad", 1000);
staff.sayHello(); // Hoàng Ngân Diamon with salary 1000
staff.sayGoodbye(); // Hoàng Ngân good bye everyone!



class StaffD extends PersonF { // kế thừa từ function
    #salary;
    PersonF
    constructor(fn, al, sa) {
        super(fn, al);
        this.#salary = sa;
    }

    sayHello() {  // overriding
        super.sayHello();
        console.log(" with salary " + this.#salary);
    };

    sayGoodbye() {
        console.log(this.getFullname() + " good bye everyone!");
    };
}

staff = new StaffD("Trần Bình", "Ballad", 1000);
staff.sayHello(); // Hoàng Ngân Diamon with salary 1000
staff.sayGoodbye(); // Hoàng Ngân good bye everyone!


console.log(typeof (StaffF)); // function
console.log(typeof (StaffC)); // function
console.log(typeof (StaffD)); // function