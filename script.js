var firstName = "Megan";
var lastName = "Madden";
var age = 31;
likesTravel = true;
var movieArray = ["Billy Madison", "Ready Player One"]

console.log(firstName);
console.log(lastName);
console.log(movieArray[0]);
console.log(movieArray[1]);

var williamGrades = [62, 97, 99, 85, 73, 97];
console.log(williamGrades[0]);
    console.log(williamGrades[5]);
    var total = 0;
    for(var i = 0; i < williamGrades.length; i++) {
        total += williamGrades[i];
    }
    var avg = total / williamGrades.length; 
console.log(avg)


var moviestarObject = {
    firstName: "Lady",
    lastName: "Gaga",
    age: 19,
    favoriteFood: "pizza"
}

console.log(moviestarObject.favoriteFood)

console.log(moviestarObject.firstName, moviestarObject.lastName)

console.log("Lady Gaga is" , moviestarObject.age, "and her favorite food is", moviestarObject.favoriteFood)

moviestarObject.hobbies =[ "shopping", "being crazy", "coding"]

console.log(moviestarObject.hobbies[0], moviestarObject.hobbies[1], moviestarObject.hobbies[2])

console.log(moviestarObject.hobbies.length)
