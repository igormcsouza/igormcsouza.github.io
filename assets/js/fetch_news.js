fetch('https://news-api-8597.fly.dev/fetch', {
	method: 'POST',
	body: JSON.stringify({topic: "Machine Learning"}),
	headers: {'Content-Type': 'application/json'}
}).then(function (response) {
	// The API call was successful!
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
	// This is the JSON from our response
    newsFromApi = document.getElementById("news-from-api")
    loading = document.getElementById("news-from-api-loading")

    newsFromApi.removeChild(loading)

    for (i in data['headlines']) {
        let htmlstring = `
        <div class="card-body">
            <h5 class="card-title">${data['headlines'][i][0]}</h5>
            <p class="card-text">
                ${data['headlines'][i][2]}
            </p>
            <a href="https://${data['headlines'][i][1]}" class="btn btn-primary">
                More
            </a>
        </div>
        `
        let div = document.createElement('div')
        div.innerHTML = htmlstring.trim()
        div.className = "card col-lg-3 col-md-4 col-sm-6"

        newsFromApi.appendChild(div)
        if (i == 11) break
    }
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
