const temperatureInput = document.getElementById("temperature");
const convertButton = document.getElementById("convertButton");
const result = document.getElementById("result");
const toggleButton = document.getElementById("toggleButton");
let isCelsius = true;

convertButton.addEventListener("click", () => {
    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number.";
    } else {
        if (isCelsius) {
            const fahrenheit = (temperature * 9/5) + 32;
            result.textContent = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        } else {
            const celsius = (temperature - 32) * 5/9;
            result.textContent = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
        }
    }
});

toggleButton.addEventListener("click", () => {
    isCelsius = !isCelsius;
    temperatureInput.placeholder = isCelsius ? "Enter temperature in Celsius" : "Enter temperature in Fahrenheit";
    result.textContent = "";
});
