var questions = [{"id":1,
                "answer":["Like a duck to water","another","another one"],
                "right":"Like a duck to water",
                "image": "assets/images/arm-and-leg.png"}];


function displayQuestion(jsonPreguntas){
    var datos = jsonPreguntas[0]; 
	document.getElementById('question1').innerText=datos['answer'][0];
	document.getElementById('question2').innerText=datos['answer'][1];
	document.getElementById('question3').innerText=datos['answer'][2];
    document.getElementById('IMG').src=datos['image'];
	respuestaCorrecta=datos['Correcta'];
}
 displayQuestion(questions);
  