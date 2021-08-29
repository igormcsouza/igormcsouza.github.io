// Add my age according to the current date

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.getElementById('my-age').innerHTML = calculate_age(
    new Date(1994, 9, 9))