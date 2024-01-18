function calculate() {
  var sideLength = parseFloat(document.getElementById('sideLength').value);

  if (isNaN(sideLength)) {
      alert("Please enter a valid number for the side length.");
      return;
  }

  var area = sideLength * sideLength;
  var perimeter = 4 * sideLength;

  displayResults(area, perimeter);
  displayCalculationSteps(sideLength);
}

function displayResults(area, perimeter) {
  document.getElementById('areaResult').textContent = "Luas: " + area;
  document.getElementById('perimeterResult').textContent = "Keliling: " + perimeter;
}

function displayCalculationSteps(sideLength) {
  var stepsList = document.getElementById('stepsList');
  stepsList.innerHTML = ""; // Clear previous steps

  var steps = [
      "Step 1: Calculate the area (Luas) using the formula Luas = sisi * sisi",
      "Area = " + sideLength + " * " + sideLength + " = " + (sideLength * sideLength),
      "Step 2: Calculate the perimeter (Keliling) using the formula Keliling = 4 * sisi",
      "Perimeter = 4 * " + sideLength + " = " + (4 * sideLength)
  ];

  steps.forEach(function (step) {
      var li = document.createElement('li');
      li.innerHTML = step.replace(/[^\d\.\+\-\*\/\=]/g, ''); // Keep only numeric characters and operators
      stepsList.appendChild(li);
  });
}
