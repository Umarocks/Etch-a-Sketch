addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("slider");
  var sliderValue = document.getElementById("sliderValue");


  function makedivs(value) {
    const gridDiv = document.querySelector(".grid");
    for (i = 0; i < value; i++) {
      for (j = 0; j < value; j++) {
        const pixelDivCreation = document.createElement("div");
        pixelDivCreation.classList.add("pixel");
        gridDiv.appendChild(pixelDivCreation);
      }
    }
    gridDiv.style.gridTemplateRows = "repeat(" + value + ", 1fr)";
    gridDiv.style.gridTemplateColumns = "repeat(" + value + ", 1fr)";
  }




  function deleteDivs() {
    var container = document.querySelector('.grid');
    var pixelDivsCreate = container.querySelectorAll(".grid .pixel");
    // Loop through the childDivs and remove each one
    pixelDivsCreate.forEach(function (div) {
      div.remove();
    });
  }
  

  function updateSliderValue() {
    sliderValue.textContent = slider.value + "x" + slider.value;
  }


  slider.addEventListener("input", function () {
    updateSliderValue();
    var sliderInputValue = slider.value;

    updateSliderValue();
  });


  const applyButton = document.querySelector(".apply");
  applyButton.addEventListener("click", function () {
    deleteDivs();
    makedivs(slider.value);
  });


  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", function () {
    deleteDivs();
    makedivs(slider.value)
  });


  var pixelDivs = document.querySelectorAll('.pixel');

  // Add a click event listener to the pixel divs
  pixelDivs.forEach(function(pixel) {
    pixel.addEventListener('click', function() {
      pixel.style.backgroundColor = "red";
      console.log('Pixel clicked');
    });
  });

  var grid = document.querySelector('.grid');

  grid.addEventListener('click', function(event) {
    if (event.target.classList.contains('pixel')) {  
         event.target.style.backgroundColor = '#457b9d';
    }
  });

});


//change reset function to make all divs white again
