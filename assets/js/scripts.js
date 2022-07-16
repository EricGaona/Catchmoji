var questions = [
                {"id":1,
                "answer":["Like a duck to water","another","another one"],
                "right":"Like a duck to water",
                "image": "assets/images/arm-and-leg.png"},
                {"id":2,
                "answer":["Like a duck to water_2","another_2","another one_2"],
                "right":"Like a duck to water_2",
                "image": "assets/images/burn-bridges.png"},
                {"id":3,
                "answer":["Like a duck to water_3","another_3","another one_3"],
                "right":"Like a duck to water_3",
                "image": "assets/images/fish-fry.png"},
            ];


function displayQuestion(jsonPreguntas){
    var datos = jsonPreguntas[0]; 
	document.getElementById('question1').innerText=datos['answer'][0];
	document.getElementById('question2').innerText=datos['answer'][1];
	document.getElementById('question3').innerText=datos['answer'][2];
    document.getElementById('IMG').src=datos['image'];
	respuestaCorrecta=datos['Correcta'];
}
 displayQuestion(questions);
  