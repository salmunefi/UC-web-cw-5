function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = " وزنك " + bmi  + "لديك نقص في الوزن";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = " وزنك " + bmi +  "وزنك صحي";
       
	} else if (bmi >= 25 ) {
		measure = "وزنك" + bmi + "لديك زيادة في الوزن";

    }

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}

