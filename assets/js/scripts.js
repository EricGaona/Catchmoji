var questions = [
                {"id":1,
                "answer":["Like a duck to water","Duck victory wave","Drake surfs for peace", "Wavy duck fingers" ],
                "right":"Like a duck to water",
                "image": "assets/images/duck-to-water.png"},
                {"id":2,
                "answer":["It's not rocket science","Cross rocket lady","Houston, we have a problem", "No rockets for you"],
                "right":"It's not rocket science",
                "image": "assets/images/not-rocket-science.png"},
                {"id":3,
                "answer":["Flying to the party","Time flies when you're having fun","Your party's departure time", "Time for the party flight"],
                "right":"Time flies when you're having fun",
                "image": "assets/images/time-flies.png"},
                {"id":4,
                "answer":["Bite me four-eyes!","I see teething problems","An eye for an eye, a tooth for a tooth", "Give your back teeth for another look"],
                "right":"An eye for an eye, a tooth for a tooth",
                "image": "assets/images/eye-for-eye.png"},
                {"id":5,
                "answer":["Strong arm the deal, then hop it!","Get some extra help for cash","Keeping in shape isn't cheap!", "Costs an arm and a leg"],
                "right":"Costs an arm and a leg",
                "image": "assets/images/arm-and-leg.png"},
                {"id":6,
                "answer":["Age over youth? Don't count on it","What came first? The chicken or the egg?","Don't count your chickens before they hatch", "Running around like a headless chicken"],
                "right":"Don't count your chickens before they hatch",
                "image": "assets/images/count-chickens.png"},
                {"id":7,
                "answer":["It's raining cats and dogs","The animals went on two by two","Noah's Ark and the great flood", "A shower of pets"],
                "right":"It's raining cats and dogs",
                "image": "assets/images/cats-dogs.png"},
                {"id":8,
                "answer":["A flaming tale of two bridges","A double hot crossing","Don't burn your bridges", "Hot cross buns"],
                "right":"Don't burn your bridges",
                "image": "assets/images/burn-bridges.png"},
                {"id":9,
                "answer":["No broken eggs in the basket","Don't put all your eggs in one basket","Scrambled basket case", "Eggsplain this one again?"],
                "right":"Don't put all your eggs in one basket",
                "image": "assets/images/eggs-basket.png"},
                {"id":10,
                "answer":["You can have a fishy on your little dishy","Two in the pan","Salmon leap", "Bigger fish to fry"],
                "right":"Bigger fish to fry",
                "image": "assets/images/fish-fry.png"}
                ];


function displayQuestion(jsonPreguntas){
    var datos = jsonPreguntas[0]; 
	document.getElementById('answer1').innerText=datos['answer'][0];
	document.getElementById('answer2').innerText=datos['answer'][1];
	document.getElementById('answer3').innerText=datos['answer'][2];
    document.getElementById('IMG').src=datos['image'];
	respuestaCorrecta=datos['Correcta'];
}
 displayQuestion(questions);
  