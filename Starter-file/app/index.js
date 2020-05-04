


// Create a function that will generate new question objects
function newQuestion(params) {
    var temp = {
        question:  params[0],
        choices: params[1],
        correctAnswer: params[2]
    };
    return temp;
}
// Create the array allQuestions and generate all of the new questions
var allQuestions = [
    ["<h1>Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?</h1>", ["Oui", "Non"], 1],
    ["<h1>Quelle est votre température corporelle ?</h1>", [""], 3],
    ["<h1>Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</h1>", ["Oui", "Non"], 0],
    ["<h1>Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?</h1>", ["Oui", "Non"], 2],
    ["<h1>Ces derniers jours, avez-vous un mal de gorge ? </h1>", ["Oui", "Non"], 0],
    ["<h1>Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.</h1>", ["Oui", "Non"], 1],
    ["<h1>Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?</h1>", ["Oui", "Non"], 3],
    ["<h1>Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?</h1>", ["Oui", "Non"], 1],
    ["<h1>Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?</h1>", ["Oui", "Non"], 1],
	["<h1>Actuellement, comment vous vous sentez ?</h1>", [""], 1]
	["<h1>Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</h1>", ["Oui", "Non"], 1],
    ["<h1>Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</h1>", [""], 3],
    ["<h1>Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</h1>", ["Oui", "Non"], 0],
    ["<h1>Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?</h1>", ["Oui", "Non"], 2],
    ["<h1>Êtes-vous diabétique ? </h1>", ["Oui", "Non"], 0],
    ["<h1>Avez-vous ou avez-vous eu un cancer ?</h1>", ["Oui", "Non"], 1],
    ["<h1>Avez-vous une maladie respiratoire, Ou êtes-vous suivi par un pneumologue ?</h1>", ["Oui", "Non"], 3],
    ["<h1>Avez-vous une insuffisance rénale chronique dialysée ?</h1>", ["Oui", "Non"], 1],
    ["<h1>Avez-vous une maladie chronique du foie ?</h1>", ["Oui", "Non"], 1],
	["<h1>Êtes-vous enceinte ?</h1>", ["Oui", "Non","Homme"], 1]
	["<h1>Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</h1>", ["Oui", "Non"], 1],
	["<h1>Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</h1>", ["Oui", "Non"], 1],
   ].map(newQuestion);
var total = 0, number = 0, totalQuestions = allQuestions.length, answers = [];

$(document).ready(function() {

    function newQuestionAnswers() {
        $("#content").fadeOut(500, function() {
            $("#answers").empty();
            if (number < totalQuestions)
                $("#questCount").text( (number + 1) + " / 22");
            var query = allQuestions[number];
            $("#question").html(query.question);

     
            for(var i = 0; i < query.choices.length; i++)
                $("#answers").append("<input type='radio' name='answers' id='radio" + i + "' value='answer" + i
                    + "'><label for='test" + i + "'>" + query.choices[i] + "</label><br>");
            if(answers.length > number)
                $("#radio" + answers[number]).prop("checked", true);
            if (number > 0)
                $("#back").prop("disabled", false);
        });
        $("#content").fadeIn(500);
    }

    function checkAnswer() {
    
        for(var i = 0; i < $("input").length; i++) {
            if ($("#radio" + i).is(":checked")) {
                answers[number] = i;
                break;
            }
            else if ( i === $("input").length -1 && !$("#radio" +i).is(":checked")) {
                $("#next").after("");
                return false;
            }
        }

        var query = allQuestions[number];
        if($("#radio" + query.correctAnswer).is(":checked"))
            updateScore(10);
        number += 1;
        return true;
    }


    function updateScore(change) {
        total += change;
       
    }

    $("#back").hide();
    $("#next").hide();
    $("#bar10").hide();
    
    
    
    $("#nextBtn").on('click', function() {
        $("#nextBtn").hide();
         $("#next").show(1000);
        $("#bar").width('5%');
        newQuestionAnswers();
       
    });

   
    
    $("#next").on('click', function() {
        $("#back").show(100);
        
        if(checkAnswer()) {
            if (number < totalQuestions)
                newQuestionAnswers();
  
        }
        
 
       
        if (number > 0)
            $("#back").prop("disabled", true);
            $("#bar").width('100%');
        
        if (number > 1)
        $("#bar").width('10%');
        if (number > 2)
        $("#bar").width('20%');
        if (number > 3)
        $("#bar").width('30%');
        if (number > 4)
        $("#bar").width('40%');
        if (number > 5)
        $("#bar").width('50%');
        if (number > 6)
        $("#bar").width('60%');
        if (number > 7)
        $("#bar").width('20%');
        if (number > 8)
        $("#bar").width('40%');
        if (number > 9)
		$("#bar").width('20%');
		$("#bar").width('30%');
        if (number > 10)
        $("#bar").width('10%');
        if (number > 11)
        $("#bar").width('70%');
        if (number > 12)
        $("#bar").width('10%');
        if (number > 13)
        $("#bar").width('20%');
        if (number > 14)
        $("#bar").width('10%');
        if (number > 15)
        $("#bar").width('10%');
        if (number > 16)
        $("#bar").width('10%');
		if (number > 17)
        $("#bar").width('70%');
        if (number > 18)
        $("#bar").width('30%');
        if (number > 19)
        $("#bar").width('80%');
        if (number > 20)
        $("#bar").width('100%');
        
   
    });
    
    
    
        

   
});










