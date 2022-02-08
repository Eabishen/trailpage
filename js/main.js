const texts = [
    "Get what you want in no time!          ",
    "See what we are best at!          ",
    "We got you Covered!          ",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 150);
})();

// Counter

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        // Month/day
        dayMonth = "03/03/",
        eventDay = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > eventDay) {
        eventDay = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(eventDay).getTime(),
        x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById("days").innerText = Math.floor(
                distance / day
            )),
                (document.getElementById("hours").innerText = Math.floor(
                    (distance % day) / hour
                )),
                (document.getElementById("minutes").innerText = Math.floor(
                    (distance % hour) / minute
                )),
                (document.getElementById("seconds").innerText = Math.floor(
                    (distance % minute) / second
                ));

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "We are Live!";
                document.getElementById("countdown").style.display = "none";
                clearInterval(x);
            }
            //seconds
        }, 0);
})();
