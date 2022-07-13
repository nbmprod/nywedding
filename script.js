const daysEl    = document.getElementById('days')
const hoursEl   = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')


function countdownDate(){
    const currentDate = new Date()
    const weddingDate = new Date(2022, 6, 9, 16, 30);   

    const accurateDays = ((currentDate - weddingDate) / (1000 * 60 * 60 * 24));
    const accurateHours = ((accurateDays - Math.floor(accurateDays)) * 24);
    const accurateMinutes = ((accurateHours - Math.floor(accurateHours)) * 60);
    const accurateSeconds = ((accurateMinutes - Math.floor(accurateMinutes)) * 60);
    
    const days = Math.floor(accurateDays);
    const hours = Math.floor(accurateHours);
    const minutes = Math.floor(accurateMinutes);
    const seconds = Math.floor(accurateSeconds);
    
    daysEl.innerHTML = days;   
    hoursEl.innerHTML =  hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    
        
}
countdownDate();
setInterval(countdownDate, 1000);