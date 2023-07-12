var randomNumber = Math.round(Math.random()*100);
var submitButton = document.getElementById("submit");
var message = document.getElementById("message");
var msg
let lives= 6;
console.log(randomNumber);

submitButton.onclick = () => {
    var input = document.getElementById("input-number").value;
    lives--;

    console.log(lives-1);

    if(input == randomNumber)
    {
      
        msg = "perfact Match";
    }
    else if(input > randomNumber)
    {
        msg = "Oops! Your guess is too high!"

    }
    else if(input < randomNumber)
    {
        msg = "Oops! Your guess is too low!"

    }


      if (lives == 0 && input != randomNumber)
    {

      window.location.href = './return.html';

    }

    message.style.display = "inherit";
    message.innerHTML = msg;
}