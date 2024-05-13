window.onload = function() {
    updateTime();
    updateDate();
    getLocation();
};

function updateTime() {
    var timeElement = document.getElementById("time");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
    timeElement.innerText = "Time: " + timeString;
    setTimeout(updateTime, 1000); // Update time every second
}

function updateDate() {
    var dateElement = document.getElementById("date");
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = currentDate.toLocaleDateString('en-US', options);
    dateElement.innerText = "Date: " + dateString;
}

function getLocation() {
    var locationElement = document.getElementById("location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            locationElement.innerText = "Location: " + latitude + ", " + longitude;
        });
    } else {
        locationElement.innerText = "Geolocation is not supported by this browser.";
    }
}
