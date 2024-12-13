const time = {
    days: 0,
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
        //this.seconds = allTimeInSeconds;
        this.convertFromSecondsToTime(allTimeInSeconds);
    },
    convertFromSecondsToTime: function(allTimeInSeconds) {
        let localTime = allTimeInSeconds; // 180000
        //якщо секунд більше ніж 86400 - новий день
        if(localTime >= this.secondsInDay) {
            this.days = Math.trunc(localTime / this.secondsInDay); //2
            localTime = localTime - (this.days * this.secondsInDay) // 4600
        }
        //якщо секунд більше ніж 3600 і менше ніж 86400 - нова година
        if(localTime >= 3600) {
            this.hours = Math.trunc(localTime / 3600);          
            localTime = localTime - (this.hours * 3600);
        }
        //якщо секунд більше 60 і менше 3600 - нова хвилина
        if(localTime >= 60) {
            this.minutes = Math.trunc(localTime / 60);            
            localTime = localTime - (this.minutes * 60);
        }
        //інакше просто додати секунди
        this.seconds = localTime;
    }
}


