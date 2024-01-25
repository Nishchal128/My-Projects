function convertToCelsius() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit";
}

function convertToFahrenheit() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").innerHTML = fahrenheit + " Fahrenheit is " + celsius.toFixed(2) + " Celsius";
}