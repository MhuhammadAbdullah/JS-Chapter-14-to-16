// Assignment: 05
// Question: 01

// var studentNames = [];
// console.log(studentNames);

// Question: 02

// var studentData = {names: []};
  
// Question: 03

// var stringArray = ["Alice", "Bob", "Charlie"];
// console.log(stringArray);

// Question: 04

// var numberArray = [10, 20, 30, 40, 50];
// console.log(numberArray);

// Question: 05

// var booleanArray = [true, false, true, false];
// console.log(booleanArray);

// Question: 06

// Mixed array with different types of values
// var mixedArray = ["Alice", 30, true, null, { name: "Bob" }, [1, 2, 3]];
// console.log(mixedArray);

// Question: 07

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// var displayQualifications = 
//     "Available Education Qualifications in Pakistan:\n\n" +
//     "1) " + qualifications[0] + "\n" +
//     "2) " + qualifications[1] + "\n" +
//     "3) " + qualifications[2] + "\n" +
//     "4) " + qualifications[3] + "\n" +
//     "5) " + qualifications[4] + "\n" +
//     "6) " + qualifications[5] + "\n" +
//     "7) " + qualifications[6] + "\n" +
//     "8) " + qualifications[7];

// alert(displayQualifications);

// Question: 08

// var studentNames = ["Ali", "Sara", "Ahmed"];
// var studentScores = [420, 350, 470];

// var totalMarks = 500;

// var displayResults = 
//     "Student Scores and Percentages:\n\n" +
//     studentNames[0] + " scored " + studentScores[0] + " out of " + totalMarks + ". Percentage: " + (studentScores[0] / totalMarks * 100) + "%\n" +
//     studentNames[1] + " scored " + studentScores[1] + " out of " + totalMarks + ". Percentage: " + (studentScores[1] / totalMarks * 100) + "%\n" +
//     studentNames[2] + " scored " + studentScores[2] + " out of " + totalMarks + ". Percentage: " + (studentScores[2] / totalMarks * 100) + "%";

// alert(displayResults);

// Question: 09

// var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// alert("Initial Colors: " + colors.join(", "));

// // a. Ask the user to add a color to the beginning of the array
// var colorToAddAtBeginning = prompt("Which color would you like to add to the beginning?");
// colors.unshift(colorToAddAtBeginning); 
// alert("Updated Colors after adding to the beginning: " + colors.join(", "));

// // b. Ask the user to add a color to the end of the array
// var colorToAddAtEnd = prompt("Which color would you like to add to the end?");
// colors.push(colorToAddAtEnd); 
// alert("Updated Colors after adding to the end: " + colors.join(", "));

// // c. Add two more colors to the beginning of the array
// colors.unshift("Pink", "Orange");
// alert("Updated Colors after adding two more colors to the beginning: " + colors.join(", "));

// // d. Delete the first color in the array
// colors.shift(); 
// alert("Updated Colors after removing the first color: " + colors.join(", "));

// // e. Delete the last color in the array
// colors.pop();
// alert("Updated Colors after removing the last color: " + colors.join(", "));

// // f. Ask the user for the index and color name to add at that index
// var indexToAdd = prompt("At which index would you like to add a color? (0 for the first position)");
// var colorToAddAtIndex = prompt("Which color would you like to add?");
// colors.splice(indexToAdd, 0, colorToAddAtIndex);
// alert("Updated Colors after adding color at index " + indexToAdd + ": " + colors.join(", "));

// // g. Ask the user for the index and how many colors to delete
// var indexToDelete = prompt("At which index would you like to start deleting colors?");
// var numberOfColorsToDelete = prompt("How many colors would you like to delete?");
// colors.splice(indexToDelete, numberOfColorsToDelete);
// alert("Updated Colors after deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", "));

// Question: 10

// var studentScores = [320, 230, 480, 120];

// alert("Original Scores: " + studentScores.join(", "));

// studentScores.sort(function(a, b) {
//     return a - b;
// });

// alert("Sorted Scores in Ascending Order: " + studentScores.join(", "));

// Question: 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var selectedCities = cities.slice(1, 4);

// alert("All Cities: " + cities.join(", "));
// alert("Selected Cities: " + selectedCities.join(", "));

// Question: 12

// var arr = ["This ", " is ", " my ", " cat"];

// var singleString = arr.join(""); // Using an empty string as the separator

// alert("Combined String: " + singleString);



// Question: 13

// var fifoQueue = [];

// fifoQueue.push("First");
// fifoQueue.push("Second");
// fifoQueue.push("Third");
// fifoQueue.push("Fourth");

// alert("Values in FIFO order (First In First Out):");

// alert(fifoQueue.shift()); 
// alert(fifoQueue.shift());
// alert(fifoQueue.shift());
// alert(fifoQueue.shift());


// Question: 14

// var stack = [];

// stack.push("First");
// stack.push("Second");
// stack.push("Third");
// stack.push("Fourth");

// alert("Values in reverse order (Last In-First Out):");

// alert(stack.pop()); // Displays "Fourth"
// alert(stack.pop()); // Displays "Third"
// alert(stack.pop()); // Displays "Second"
// alert(stack.pop()); // Displays "First"

// Question: 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// var dropdownHtml = '<select name="phones">';

// for (var i = 0; i < manufacturers.length; i++) {
//     dropdownHtml += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
// }

// dropdownHtml += '</select>';

// document.write(dropdownHtml);
