class СountDown {
    constructor(nameTimer, nameMinutes, nameSeconds) {
        this.element = document.querySelector(nameTimer)
        this.minutes = document.querySelector(nameMinutes);
        this.seconds = document.querySelector(nameSeconds);
        this.minutes.innerHTML = "1";
        this.seconds.innerHTML = "25";
        this.timerId = 0;

        this.setTimer()
        this.upDateTimer();
    }
    upDateTimer() {
        this.timerId = setInterval(()=> {
            if (+this.seconds.innerHTML > 0) {
                this.seconds.innerHTML = +this.seconds.innerHTML - 1;
            } else if (+this.minutes.innerHTML > 0) {
                this.minutes.innerHTML = +this.minutes.innerHTML - 1;
                this.seconds.innerHTML = "59";
            } else {
                this.stop();
            }
            this.setTimer()
        }, 1000)
    }
    setTimer() {
        const min = this.minutes.innerHTML.toString().padStart(2, '0');
        const sec = this.seconds.innerHTML.toString().padStart(2, '0');
        this.element.textContent = `${min}:${sec}`;
    }
    stop () {
        if (+this.seconds.innerHTML === 0 && +this.minutes.innerHTML === 0) {
            clearInterval(this.timerId);
        }
    }
}

const countdown1 = new СountDown ('.js--time', '.js--minutes', '.js--seconds');

