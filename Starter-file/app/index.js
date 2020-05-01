var currentTab = 0;

showTab(currentTab);

function showTab(n) {
	
	
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").style.display = "none";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
  } 
	else {
    document.getElementById("nextBtn").style.display = "Démarrer le test";
  }
  fixStepIndicator(n)
  fixStepInd(n)
}

function next(n) {
  var x = document.getElementsByClassName("tab");
  
  x[currentTab].style.display = "none";
     
  currentTab = currentTab + n;
  
  if (currentTab >= x.length) {
    
    return false;
  }
  
  showTab(currentTab);
}

function fixStepIndicator(n) {
  
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  
  x[n].className += " active";
}

function fixStepInd(n) {
  
  var i, x = document.getElementsByClassName("title");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" ac", "");
  }
  
  x[n].className += " ac";
}

// let step = 'step1';

// const step1 = document.getElementById('step1');
// const step2 = document.getElementById('step2');
// const step3 = document.getElementById('step3');
// const step4 = document.getElementById('step4');

// function suivant() {
//   if (step === 'step1') {
//     step = 'step2';
//     step1.classList.remove("is-active");
//     step1.classList.add("is-complete");
//     step2.classList.add("is-active");

//   } else if (step === 'step2') {
//     step = 'step3';
//     step2.classList.remove("is-active");
//     step2.classList.add("is-complete");
//     step3.classList.add("is-active");

//   } else if (step === 'step3') {
//     step = 'step4d';
//     step3.classList.remove("is-active");
//     step3.classList.add("is-complete");
//     step4.classList.add("is-active");

//   } else if (step === 'step4d') {
//     step = 'complete';
//     step4.classList.remove("is-active");
//     step4.classList.add("is-complete");

//   } else if (step === 'complete') {
//     step = 'step1';
//     step4.classList.remove("is-complete");
//     step3.classList.remove("is-complete");
//     step2.classList.remove("is-complete");
//     step1.classList.remove("is-complete");
//     step1.classList.add("is-active");
//   }
// }