//this is a script file and no need to write script tags ,below i have declared and assigned age,name etc using array of objects
var myArray =[{Name:"Avinash", Age:25, Salary: 20000, Address:{City: "Hyderabad", State: "AndraPradesh", Pincode: 500048}},{Name:"Arun", Age:25, Salary: 20000, Address:{City: "Hyderabad", State: "AndraPradesh", Pincode: 500048}},{Name:"Suraj", Age:25, Salary: 20000, Address:{City: "Hyderabad", State: "AndraPradesh", Pincode: 500048}},{Name:"Ramesh", Age:25, Salary: 20000, Address:{City: "Hyderabad", State: "AndraPradesh", Pincode: 500048}}];
//below code prints value in the console window
console.log("My Name is : "+myArray[0].Name ,",", "My Age is : "+myArray[0].Age ,",", "My Salary is : "+myArray[0].Salary,"&","live in : "+myArray[0].Address.City,"of state "+myArray[0].Address.State
	,"&","Pincode is "+myArray[0].Address.Pincode);