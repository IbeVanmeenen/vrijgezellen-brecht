/* ==========================================================================
   Clock
   ========================================================================== */

brecht.clock = function(undefined) {

    var exports = this.clock;

    var daysEl, hoursEl, minEl, secEl;

    var deadline1, deadline2, deadline3, deadline4, deadline5,
        deadline1End, deadline2End, deadline3End, deadline4End, deadline5End, deadlineBeftjelor;

    var timeinterval;


    // Get Time
    var getTimeRemaining = function(endtime) {
        var t = endtime - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };


    // Update clock
    var updateClock = function(endtime) {
        var t = getTimeRemaining(endtime),
            hours = ('0' + t.hours).slice(-2),
            min = ('0' + t.minutes).slice(-2),
            sec = ('0' + t.seconds).slice(-2);

        daysEl.innerHTML = t.days;
        daysEl.dataset.txt = t.days;
        hoursEl.innerHTML = hours;
        hoursEl.dataset.txt = hours;
        minEl.innerHTML = min;
        minEl.dataset.txt = min;
        secEl.innerHTML = sec;
        secEl.dataset.txt = sec;

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    };


    // Init Clock
    var initializeClock = function(endtime) {
        document.getElementById('clock').classList.add('clock--show');

        updateClock(endtime);
        var timeinterval = setInterval(function() {
            updateClock(endtime);
        }, 1000);
    };


    // Check
    var check = function() {
        var initialDate = Date.parse(new Date());

        if (deadline1 > initialDate) {
            initializeClock(deadline1);
        } else if (deadline1End > initialDate) {
            document.getElementById('clock').classList.remove('clock--show');
            document.getElementById('assignment-1').classList.add('assignment--show');
        } else if (deadline2 > initialDate) {
            initializeClock(deadline2);
        } else if (deadline2End > initialDate) {
            document.getElementById('clock').classList.remove('clock--show');
            document.getElementById('assignment-2').classList.add('assignment--show');
        } else if (deadline3 > initialDate) {
            initializeClock(deadline3);
        } else if (deadline3End > initialDate) {
            document.getElementById('clock').classList.remove('clock--show');
            document.getElementById('assignment-3').classList.add('assignment--show');
        } else if (deadline4 > initialDate) {
            initializeClock(deadline4);
        } else if (deadline4End > initialDate) {
            document.getElementById('clock').classList.remove('clock--show');
            document.getElementById('assignment-4').classList.add('assignment--show');
        } else if (deadline5 > initialDate) {
            initializeClock(deadline5);
        } else if (deadline5End > initialDate) {
            document.getElementById('clock').classList.remove('clock--show');
            document.getElementById('assignment-5').classList.add('assignment--show');
        } else {
            initializeClock(deadlineBeftjelor);
        }
    };


    // Init
    var init = function() {
        daysEl = document.getElementById('clock-days');
        hoursEl = document.getElementById('clock-hours');
        minEl = document.getElementById('clock-min');
        secEl = document.getElementById('clock-sec');

        deadline1 = Date.parse('April 4 2016 21:00:00 GMT+02:00');
        deadline1End = deadline1 + (20 * 60000);
        deadline2 = Date.parse('April 8 2016 03:10:10 GMT+02:00');
        deadline2End = deadline2 + (20 * 60000);
        deadline3 = Date.parse('April 20 2016 14:20:20 GMT+02:00');
        deadline3End = deadline3 + (20 * 60000);
        deadline4 = Date.parse('May 2 2016 06:30:30 GMT+02:00');
        deadline4End = deadline4 + (20 * 60000);
        deadline5 = Date.parse('May 20 2016 18:30:30 GMT+02:00');
        deadline5End = deadline5 + (20 * 60000);
        deadlineBeftjelor = Date.parse('June 4 2016 05:00:00 GMT+02:00');

        check();

        var recheckInterval = setInterval(function() {
            check();
        }, 1000);
    }();
};
