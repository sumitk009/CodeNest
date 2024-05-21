
    function updateClock() {
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000; // IST ka offset milliseconds mein
        const istTime = new Date(now.getTime() + istOffset);

        const hourHand = document.getElementById('hour');
        const minuteHand = document.getElementById('minute');
        const secondHand = document.getElementById('second');

        const hours = istTime.getHours() % 12;
        const minutes = istTime.getMinutes();
        const seconds = istTime.getSeconds();

        const hourDegrees = (hours * 30) + (0.5 * minutes);
        const minuteDegrees = (minutes * 6) + (0.1 * seconds);
        const secondDegrees = seconds * 6;

        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    }

    setInterval(updateClock, 1000);
