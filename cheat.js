//Debugging (alerts, comments, the console)
alert("Hey, Whorl"); 
console.log("hey, hey, toikey");

function changeMe(){
	document.getElementById("changer").innerHTML = "New Text, yo";
	console.log("What's happens????");

	// .innerHTML changes whats inside the selected text, in our case supah text
}

//Variables
//1 - Create a script with two variables assigned to two numbers. 
//Add them together and output the result to the console. 
//Now do the same with two strings.

var one ="Aniqa";
var two ="Wahid";
var tres = 3;
var quad = 4;

console.log(one+" " +two);
console.log(tres+quad);

//Arrays
//Create a multidimensional array related to a subject that interests you. 
//Output two of the items in sub-arrays to the console.

var interests = [["python", "romcom"], ["muchfood", "food"]];
console.log(interests[0][1] + " " + interests [1][1]);

var meI = {Name: "Aniqa Wahid", made: "Oct. 25", want: "ramen", interests: ["python", "romcom", "muchfood", "food"]};
console.log(meI.want);
console.log(meI.want, meI.made);



//Logic
//Write a script that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. 
//If it is not, using the console, let the user know that what the variable was and that it was greater than 10.

var vart= 3;
if(vart < 10){
	console.log("This numbah is less than ten, my friend");
} else{
	console.log(vart + "This is greater than ten by much magnitudes")
}

//Write a similar program to check if a string stored in a variable is the same as another string.
var vur = "Wahid";

if (vur == "Wahid"){
	console.log("They are quite equal");
} else{
	console.log("Not very equal I must say");
}

//Functions
//Declare a function that takes a name as an argument and tells the user what name they've entered.
function alertName (someName){
	return alert (someName);
}

//Declare a function that takes no arguments but prints something to the console.
function chance(){
	console.log("So here's this console");
}

function door() {
	var door = prompt("Which door will you choose? 1, 2, 3 ");

	if(parseInt(door) > 3){
		alert("There are only 3 doors here, dude")
	} 

	if (door === "1"){
		console.log("You just won a cyndaquil. You're set for life.")
	} else if (door === "2"){
		console.log("A ticket for an all-you-can-eat buffet awaits you")
	} else {
		console.log("You may have just unlocked the path to Narnia?! Congrats.")

	}
}
