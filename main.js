//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const display_foods = (personObj) => {
    console.log('Favorite Dishes:\n');
    // iterate through the object entries
    Object.entries(personObj).forEach(([key, value]) => {
        //evaluate if value is an array
        if (Array.isArray(value)) {
            // Handle array values, including nested objects
            value.forEach(item => {
                if (typeof item == 'object') {
                    // If the item is an object, log its keys and values
                    Object.entries(item).forEach(([subKey, subValue]) => {
                        console.log(`${subKey}: ${subValue}`);
                    });
                } else {
                    // If the item is not an object, log it directly
                    console.log(item);
                }
            });
        } else {
            // Directly log non-array values
            console.log(value);
        }
    });
};

display_foods(person3);





//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name =  name;
    this.age = age
};

Person.prototype.printInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

Person.prototype.incrementAge = function() {
    this.age +=1
    return this.age;
};

let person1 = new Person('John',41);
let person2 = new Person('Diane',44);

person1.printInfo();
person2.printInfo();

person1.incrementAge();
person1.incrementAge();
person1.incrementAge();

person1.printInfo()



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStringLength = (string) => {
    return new Promise ( (resolve, reject) => {
        if (string.length > 10) {
            resolve = console.log("Big word")
        } else if (string.length < 10) {
            reject = console.log("Small Number")
        } else {
            resolve = console.log('the string is 10 characters long')
        }
    });
}
checkStringLength('Diane is the best')
