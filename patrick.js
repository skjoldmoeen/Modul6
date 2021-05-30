function validation (){
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");
  let text;

  error_message.style.padding = "10px";

  if(name.length <2){
    text = "Indsæt navn";
    error_message.innerHTML = text;
    return false;
  }

  if(number.length <5){
    text = "Indsæt telefonnummer";
    error_message.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length <5){
    text = "Indsæt e-mail";
    error_message.innerHTML = text;
    return false;
  }

  if(message.length <=50){
    text = "Indsæt besked på mindst 50 tegn";
    error_message.innerHTML = text;
    return false;
  }

  alert("Tak for din besked - vi vender tilbage hurtigst muligt!")
  return true;
  }
