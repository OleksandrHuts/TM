const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    showTime: function (hours, minutes, seconds) {
        console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`)
    }


    changeSeconds: function(hours) {
    const allSecondc = this.hours * 3600 + this.minutes * 60 + this.seconds;
}
    chahgeMinutes: function(minutes) {
        const allMinutes = this.hours * 60 + this.minutes + this.seconds / 60;
    }
}


