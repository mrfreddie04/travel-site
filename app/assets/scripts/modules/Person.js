//constructor function
export function Man(fullName, favoriteColor)
{
    this.name = fullName;
    this.favoriteColor = favoriteColor;
    this.greet = function()
    {
        console.log(`Hello, my name is ${this.name} and my favorite color is ${this.favoriteColor}.`);
    }
}

//named export
export class Person{
    constructor(fullName, favoriteColor) {
        this.name = fullName;
        this.favoriteColor = favoriteColor;        
    } 

    greet()
    {
        console.log(`Hello, my name is ${this.name} and my favorite color is ${this.favoriteColor}.`);
    }    
}

export class Adult extends Person{
    payTaxes()
    {
        console.log(`${this.name} pays Taxes.`);
    }
}

//module.exports = Person;
//export default Person;  //default export