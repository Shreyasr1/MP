function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateSensorData() {
    const temperature = getRandomInt(18, 35);
    const humidity = getRandomInt(40, 90);

    document.getElementById('temperature').textContent = temperature;
    document.getElementById('humidity').textContent = humidity;

    let adviceText = "";
    if (temperature > 30) {
        adviceText = "Temperature is high. Consider turning on the fans or ventilation.";
    } else if (temperature < 20) {
        adviceText = "Temperature is low. Ensure heating systems are active.";
    } else {
        adviceText = "Temperature is optimal.";
    }

    if (humidity > 80) {
        adviceText += " Humidity is too high. Consider reducing sprinkler activity.";
    } else if (humidity < 50) {
        adviceText += " Humidity is low. Activate sprinklers to increase humidity.";
    } else {
        adviceText += " Humidity is optimal.";
    }

    document.getElementById('advice').textContent = adviceText;
}

setInterval(updateSensorData, 5000);
updateSensorData();
