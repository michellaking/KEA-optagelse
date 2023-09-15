//Kode til et pop op vindue:
//alert("Hej og velkommen");

//Console.log popper op i "inspect-værktøjet":
//console.log("Siden virker, hvis du ser denne besked");

//Den forkerte måde at gøre det på:
//document.write("Velkommen til sandkassen");

//Kan jeg få fat i mit elemt med ID= output?

//console.log(output)
//Det er stadig ikke helt fint

//console.log(document.getElementById("output"));

const mitElement = document.getElementById("output");
console.log(mitElement);

mitElement.style.fontSize = "50px";

const navn = document.getElementById("bruger");
const farve = document.getElementById("farve");
const knap = document.getElementById("knap");

knap.onclick = function () {
  mitElement.innerText = "Hey  ";
  mitElement.innerText += navn.value;
  document.body.style.background = farve.value;
};
