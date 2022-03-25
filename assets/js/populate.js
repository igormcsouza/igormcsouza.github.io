import data from '/assets/js/data.json' assert { type: "json" };

document.getElementById('personal.bio').innerText = data.personal.bio
document.getElementById('work.linkedin').href = data.work.linkedin
document.getElementById('work.workplace').innerText = data.work.workplace
