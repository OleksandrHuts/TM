const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    secondsInDay: 86400,
    showTime: function (hours = this.hours, minutes = this.minutes, seconds = this.seconds) {
        console.log(`${hours} : ${minutes} : ${seconds}`)
    },
    getAllTimeInSeconds: function() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds
    },
    changeSeconds: function (seconds) {
        //весь наявний час переведений у секунди
        const allTimeInSeconds = this.getAllTimeInSeconds() + seconds;
        this.seconds = allTimeInSeconds;
    },
    convertFromSecondsToTime: function(allTimeInSeconds) {
        //якщо секунд більше ніж 86400 - новий день
        //якщо секунд більше ніж 3600 і менше ніж 86400 - нова година
        //якщо секунд більше 60 і менше 3600 - нова хвилина
        //інакше просто додати секунди
    }
}


