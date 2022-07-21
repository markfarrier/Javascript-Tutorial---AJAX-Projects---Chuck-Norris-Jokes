const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
	// fetch is promise-based by default.  Will return a promise
	// Response's json function does something similar to JSON.parse.  Will return a promise
	// response will be the response of the promise returned by the json function
	fetch(URL)
		.then((data) => data.json())
		.then((response) => displayData(response))
		.catch((err) => console.log(err));
});

// using fetch means you no longer need the below getData
// browser provides the below functionality
// won't delete and will just comment out for posterity

// function getData(url) {
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest();
// 		xhr.open('GET', url);
// 		xhr.send();
// 		xhr.onreadystatechange = function () {
// 			// if it's not done, just return
// 			if (xhr.readyState !== 4) {
// 				return;
// 			}
// 			// if the value is 4/DONE
// 			if (xhr.status === 200) {
// 				resolve(xhr.responseText);
// 			} else {
// 				reject({
// 					status: xhr.status,
// 					text: xhr.statusText,
// 				});
// 			}
// 		};
// 	});
// }

// get value from data - this time destructuring in the parameter
function displayData({ value: joke }) {
	img.classList.add('shake-img');
	// no longer need to JSON.parse when using fetch, as the data is already parsed
	content.textContent = joke;
	const random = Math.random() * 1000;
	setTimeout(() => {
		img.classList.remove('shake-img');
	}, random);
}
