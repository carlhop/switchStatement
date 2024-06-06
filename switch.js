//newFunk is called when the submit button is clicked in the HTML document
function newFunk(){
let work;
let dailyWorkout = prompt("What is today?", "Monday");
switch (dailyWorkout){
  case "Monday":
  work= "Arms, Abs, and Cardio.";
  break;

  case "Tuesday":
  work= "legs, Abs, and Cardio.";
  break;

  case "Wednesday":
  work= "back, Abs, and Cardio.";
  break;

  case "Thursday":
  work= "chest, Abs, and Cardio.";
  break;

  case "Friday":
  work= "full body, Abs, and Cardio.";
  break;

  case "Saturday":
  work= "Rest";
  break;

  case "Sunday":
  work= "Rest";
  break;

  default:
  work= "Error Try again";
  break;
}
document.getElementById("workout").innerHTML = work;
}
