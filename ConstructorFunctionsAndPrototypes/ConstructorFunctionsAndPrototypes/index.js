// function Car (make, model, year){
//     this.make = make;
//     this.model = model;
//     this. year = year;

//     //Traditional Approach
//     // this.printVehicleDetails = function(){
//     //     console.log("Make: " + this.make);
//     //     console.log("Model: " + this.model);
//     //     console.log("Year: " + this.year);
//     //     console.log(".......................");
//     // }
// }

// car.prototype.printVehicleDetails = function(){
//     console.log("Make: " + this.make);
//         console.log("Model: " + this.model);
//         console.log("Year: " + this.year);
//         console.log(".......................");

// }

// car.prototype.isNew = true;

// var hondaCivic = new car("Honda", "Civic", 2016);
// hondaCivic.isNew = false;
// hondaCivic.printVehicleDetails();

// var hondaAccord = new car("Honda", "Accord", 2020);
// hondaAccord.printVehicleDetails();

 let employees = []
 function Employees (name,jobTitle,salary,status = "Full time"){
     this.name = name;
     this.jobTitle = jobTitle;
     this.salary = salary;
     this.status = status;


     
employees.push(this);
 }


 var Bob = new Employees("Bob", "V School Instructor", "$3000/hour", "Part time");
 console.log(employees)
 console.log("................................")

 var Serenity = new Employees("Serenity", "V School Instructor", "$3000/hour", "Contract");
 console.log(employees)
 console.log(".....................................")

 var Bandit = new Employees("Bandit", "V School Instructor", "$3000/hour");
 console.log(employees)
 console.log(".................................")



