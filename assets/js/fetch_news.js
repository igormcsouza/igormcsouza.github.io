fetch('http://localhost:8001/fetch', {
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
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});