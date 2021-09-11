// Darkmode

let darkModeOn = false;

document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        darkModeOn = true;
    } else {
        if (document.body.classList.contains("dark-mode")) {
            darkModeOn = true;
        } else {
            darkModeOn = false;
        }
    }
    
    if (darkModeOn) {
        if (!document.body.classList.contains("dark-mode")) {
            document.body.classList.add("dark-mode");
        }
    } else {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
        }
    }
})

// Add my age according to the current date

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

if (document.getElementById('my-age')) {
    document.getElementById('my-age').innerHTML = calculate_age(
        new Date(1994, 9, 9)
    )
}
    
// Progress Bar

let processScroll = () => {
    let docElem = document.documentElement,
    docBody = document.body,
    scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
    scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
    scrollPercent = (scrollTop / scrollBottom) * 100 + '%';
    
    document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent);
}

document.addEventListener("scroll", processScroll);