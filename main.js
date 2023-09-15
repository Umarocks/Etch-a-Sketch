addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("slider");
  var sliderValue = document.getElementById("sliderValue");

  function updateSliderValue() {
    sliderValue.textContent = slider.value + "x" + slider.value;
  }

  slider.addEventListener("input", function () {
    updateSliderValue();
    var sliderInputValue = slider.value;
    console.log("Slider value: " + sliderInputValue);
    updateSliderValue();
  });


  
});
