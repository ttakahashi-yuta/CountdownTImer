const limitTime = 30 * 60 * 1000;

class CountdownTimer {
    constructor() { this.limit = 0 }

    setLimit() {
        this.limit = new Date().getTime() + limitTime;
        return this.limit;
    }
    countdown() {
        const now = new Date();
        const differ = this.limit - now.getTime();
        if (differ < 0) return null;
        const time = [
            ("0" + Math.floor(differ / 1000 / 60 / 60 % 24)).slice(-2),
            ("0" + Math.floor(differ / 1000 / 60 % 60)).slice(-2),
            ("0" + Math.floor(differ / 1000 % 60)).slice(-2)
        ]
        return time;
    }
}

var timer = new CountdownTimer();

function timerStart() {
    timer.setLimit();
    var id = setInterval(function () {
        var time = timer.countdown();
        if (!time) {
            clearInterval(id);
            return timerEnd();
        }
        document.getElementById("countdown").textContent = `${time[1]}:${time[2]}`;
    }, 1000);
}

function timerEnd() {
    console.log("end")
    //if end timer
}
