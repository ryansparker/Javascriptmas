const countdownDisplay = document.getElementById('countdown-display')

function renderCountdown(){
    const christmas = 25

    const date = new Date();
    const day = date.getDate();
    const remaining = christmas - day; 
    console.log(remaining);

    countdownDisplay.append(remaining);
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}


renderCountdown();
