const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
	// console.log('hello');
	getData(URL)
		.then((response) => displayData(response))
		.catch((err) => console.log(err));
});

function getData(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		xhr.onreadystatechange = function () {
			// if it's not done, just return
			if (xhr.readyState !== 4) {
				return;
			}
			// if the value is 4/DONE
			if (xhr.status === 200) {
				resolve(xhr.responseText);
			} else {
				reject({
					status: xhr.status,
					text: xhr.statusText,
				});
			}
		};
	});
}

function displayData(data) {
	img.classList.add('shake-img');
	// get value from data
	const { value: joke } = JSON.parse(data);
	// console.log(joke);
	content.textContent = joke;
	const random = Math.random() * 1000;
	setTimeout(() => {
		img.classList.remove('shake-img');
	}, random);
}
