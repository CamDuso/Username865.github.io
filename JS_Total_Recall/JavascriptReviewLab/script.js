
// SECTION 1

// A. Q+A
    // 1. How do we assign a value to a variable
        // with either Var, Let or Const ex. let sockDrawer = 5

    // 2. How do we change the value of a variable?
        // as long as the variable isn't a const variable, it can be edited further down in the code by typing
            // sockDrawer = 7

    // 3. How do we assign an existing variable to a new variable
        // by assigning it like this. let variableOne = 5
                                //    let newVariable = variableOne
    
    // 4. Declare is the act of declaring a variable, and giving it value (like above). 

    // 5. Pseudocoding is a process you take to get an idea of what steps you will take to create a project in code. Its more a framework you give yourself at the start of a project to understand the purpose of what you're about to do, and what functions this product will perform.

    // 6. While I dont have the exact answer, I would have to assume more time is spent THINKING about how youre going to solve it, and then a shorter period of time spent actually solving it. maybe 70-30?

// B. Strings

    // 1. 
    // let firstVariable = 'Hello World'
    // 3. 
    // firstVariable = 5;
    // 4. 
    // let secondVariable = firstVariable
    // 5. 
    // secondVariable = 'Hello World'
    // 6.
    // // firstVariable will be equal to 5.
    // 7.
    // let myName = 'Cam Duso'
    // console.log('Hello, my name is ' + myName)

// C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');

// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false);
// console.log(e === 'Kevin');

// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)

// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== '48');

// D. The Farm
    // let animal = 'Chicken'

    // if (animal === 'Cow'){
    //     console.log ('mooooooo');
    // }
    // else {
    //     console.log ('Hey! youre not a cow.')
    // }

// E. Drivers Ed
    // let age = 28

    // if (age >=16){
    //     console.log ('Here are the Keys')
    // }
    // else{
    //     console.log ("Sorry, youre too young.")
    // }


// SECTION 2

// A. The Basics

    // for(let i = 0; i <= 10; i++) {
    //     console.log (i)
    // }

    // for(let i = 10; i <= 400; i++){
    //     console.log (i)
    // }

    // for (let i=12; i <=4000; i++){
    //     if(i%3===0)
    //         console.log(i)
    // }

// B. Get Even

    // for(let i = 0; i <=100; i++){
    //     if(i%2===0)
    //         console.log(i + '<--is an even number')
        
    //     else{
    //         console.log(i)
    //     } 
    // }

// C. Give me Five

    // for(let i = 0; i <=100; i++){
    //     if(i%5===0 && i%3===0)
    //     console.log('I found a '+ i + '. High Five!' + ' I found a ' + i + '. Three is a crowd')
        
    //     else if(i%3===0)
    //     console.log ('I found a ' + i + '. Three is a crowd')

    //     else if (i%5===0)
    //     console.log('I found a '+ i + '. High Five!')
        
    //     else{
    //         console.log (i)
    //     }
    // }

// D. Savings Account

    // let Sum = 1+2+3+4+5+6+7+8+9+10;
    // let bankAccount = (Sum);
    // console.log(bankAccount)

    // let bankAccount = 0;
    // for (let i = 0; i <=100; i++){
    //     bankAccount += i*2;
    // }
    // console.log(bankAccount)

// SECTION 3

    // A. Talk About It
    //  1.They are called values
    //  2. They do not guarantee they will be in order
    //  3. an Array could model a list of students in a class

    // B. Easy Does it
    // quotes = ['quoteOne', 'quoteTwo', 'quoteThree']

    // C. Accessing Elements
    // const randomThings = [1, 10, "Hello", true];
    //      console.log(randomThings [0])
    //      randomThings[2] = "World"
    //      console.log(randomThings)

    // D. Change Values
    // const ourClass = ["Salty", "Zoom", "Sardine", 'Slack', 'Github']
    // console.log(ourClass)
    // console.log (ourClass[2])
    // ourClass[4] = 'Octocat'
    // ourClass.push("Cloud City")
    // console.log (ourClass)

    // E. Mix it Up
    // const myArray = [5, 10, 500, 20]
    // myArray.push ('Aegon', 'Murphy')
    // myArray.shift
    // myArray.unshift ('Bob Marley')
    // myArray.pop ('Murphy')
    // Array.prototype.reverse()
    // console.log(myArray)

    //F. Biggie Smalls
    // let number = 17

    // if (number < 100){
    //     console.log ("Little Number")
    // }
    // else{
    //     console.log ("Big Number")
    // }

    //G. Monkey in the Middle
    // let number = 17

    // if (number < 5){
    //     console.log ("Little Number")
    // }
    // else if (number > 10){
    //     console.log ("Big Number")
    // }
    // else{
    //     console.log ("Monkey")
    // }

    //F.
    // const kristynsCloset = ["left shoe", "cowboy boots", "right sock", "GA hoodie", "green pants", "yellow knit hat", "marshmallow peeps"];
      
    //   // Thom's closet is more complicated. Check out this nested data structure!!
      
    //   const thomsCloset = [
    //     [ "grey button-up", "dark grey button-up", "light blue button-up", "blue button-up",],
    //     [ "grey jeans", "jeans", "PJs"],
    //     [ "wool mittens", "wool scarf", "raybans"]
    // ];
    // console.log ('Kristyn is rocking that ' + (kristynsCloset[2]) + ' today!')
    // kristynsCloset[6] = 'raybans'
    // kristynsCloset.push ('marshmallow peeps')
    // kristynsCloset[5] = 'stained knit hat'
    // console.log(kristynsCloset)
    // console.log (thomsCloset[0][0])
    // console.log (thomsCloset[1][1])
    // console.log (thomsCloset[2][2]) 
    // console.log('Thom is looking fierce in a ' + (thomsCloset[0][0]+ ', ' + (thomsCloset[1][1] + ', and ' + (thomsCloset[2][2]))))
    // thomsCloset [1][2] = 'Footie Pajamas'

//FUNCTIONS
    // //A. printGreeting
    // function printGreeting(name){
    //     console.log('Hello there ' + name)
    // }
    // printGreeting ("Slimer")

    // // B. printCool
    // function printCool(name){
    //     console.log (name + ' is cool.')
    // }
    // printCool('Cam')

    // //C. calculateCube
    // function calculateCube(number){
    //     let variable = (number*number*number)
    //         console.log(variable)
    // }
    // calculateCube(5)

    // //D. isVowel
    // function isVowel(vowel){
    //     return vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' || false;
    // }
    // console.log(isVowel('v'))

    // //E. getTwoLengths
    // function getTwoLengths(strOne, strTwo){
    //     console.log(strOne.length, strTwo.length)
    // }
    // getTwoLengths('hank', 'hippopotamus')

    //F. getMultipleLengths
    // function getMultipleLengths(array){
    //     for(let i = 0; i < array.length; i++){
    //         console.log(array[i].length)
    //     }
    // }
    // getMultipleLengths(['Word', 'another', 'array', 'idiot'])

    // //G. maxOfThree
    // function maxOfThree(numOne, numTwo, numThree){
    //     if (numOne > numTwo && numOne > numThree){
    //         console.log(numOne)
    //     }
    //     else if (numTwo > numOne && numTwo > numThree){
    //         console.log(numTwo)
    //     }
    //     else if (numThree > numTwo && numThree > numOne){
    //         console.log (numThree)
    //     }
    // }
    // maxOfThree(20, 18, 19)

    //H. printLongestWord
    // function printLongestWord(array){
    //     let word = array[0]    
    //     for(let i = 0; i < array.length; i++){
    //         if(array[i].length > word.length){
    //             word = array[i]
    //         }       
    //     }
    //     console.log (word)
    // }
        
    // printLongestWord(["PeanutBatter", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd",])

// OBJECTS
    // A. Make a User Object
    const user = {
        name: 'cam',
        email: 'camduso8@gmail.com',
        age: 28,
        purchased: []
    }

    user.email = 'camduso9@gmail.com'
    user.age++

    user.purchased.push('Carbohydrates')
    user.purchased.push('Peace of Mind')
    user.purchased.push('Merino Jodhpurs')
    // console.log(user.purchased[2])

    user.friend = {
        name: 'Grace Hopper',
        age: 85,
        location: 'Mars',
        purchased: [],
    }
    
    // console.log (user)
    // console.log (user.friend.name)
    // console.log (user.friend.location)
    user.friend.age = 55
    user.friend.purchased.push('The One Ring', 'A Latte',)
    // console.log (user.friend.purchased[1])

    for(let i = 0; i < user.purchased.length; i++){
        // console.log(user.purchased)
    }
    
    for(let i = 0; i < user.friend.purchased.length; i++){
        // console.log(user.friend.purchased)
    }
    // function updateUser(){
    //     user.age++
    //     let capitalizedName = user.name[0].toUpperCase()
    //     let modName = user.name.substring(1)
    //     user.name = capitalizedName.concat (modName)
    // }
    // updateUser()

    function oldAndLoud(person){
        person.age++
        let capitalizedName = person.name[0].toUpperCase()
        let modName = person.name.substring(1)
        person.name = capitalizedName.concat (modName)
    }
    oldAndLoud(user)
    console.log(user)