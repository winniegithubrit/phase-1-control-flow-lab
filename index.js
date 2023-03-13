function scuberGreetingForFeet(feet){
  // Write your code here!
  let message;
  if (feet <= 400) {
    message = "This one is on me!";
  
  }else if (feet > 2000 && feet <= 2500){
    message = "I will gladly take your thirty bucks.";
  }else {
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(destinationCity){
  // Write your code here!
  return destinationCity === "NYC" ? "Ok, sounds good." : "No go.";
}
function switchOnCharmFromTip(tip) {
  let message;

  if (tip === 'generous') {
    message = 'Thank you so much.';
  } else if (tip === 'not as generous') {
    message = 'Thank you.';
  } else {
    message = 'Bye.';
  }

  return message;
}