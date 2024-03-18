
//hace que el span al moverlo modifique el valor de % entre 0 y 100
document.addEventListener("DOMContentLoaded", function(){

    const percentageSlider = document.getElementById("percentageSlider");

    const percentageValue = document.getElementById('percentageValue');

    percentageSlider.addEventListener("input", function(){
        percentageValue.textContent = `${percentageSlider.value} %`
    })
})

function calulatePercentage(){

    const percentageSlider = document.getElementById("percentageSlider").value;

    const baseNumber = document.getElementById('baseNumber').value;

    if(baseNumber === ""){
        alert('Please enter a base number');
        return
    } 

    const result = (parseFloat(baseNumber) * parseFloat(percentageSlider) /100).toFixed(2);

    document.getElementById('result').innerHTML = `Result: ${result}`;

}