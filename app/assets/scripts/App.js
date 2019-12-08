import "../styles/styles.css";

if(module.hot){
    //accept hot module replacements (i.e. updates on the fly)
    module.hot.accept();
}

/*
//const Person = require("./modules/Person.js");
//import Person from "./modules/Person.js"; //import default export
import {Person,Adult} from "./modules/Person.js"; //import named export

let john = new Person("John Doe","orange");
let jane = new Adult("Jane Smith", "brown");

john.greet();
jane.greet();
jane.payTaxes();
*/

import MobileMenu from "./modules/MobileMenu.js";

let mobileMenu = new MobileMenu();