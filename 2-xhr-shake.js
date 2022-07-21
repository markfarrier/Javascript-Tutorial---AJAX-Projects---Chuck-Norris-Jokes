const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
	// console.log('hello');
	getData(URL);
});

function getData(url) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();
	xhr.onreadystatechange = function () {
		// if it's not done, just return
		if (xhr.readyState !== 4) return;
		// if the value is 4
		if (xhr.status === 200) {
			img.classList.add('shake-img');
			// console.log(xhr.responseText);
			// const response = JSON.parse(xhr.responseText);
			// console.log(response);
			const { value: joke } = JSON.parse(xhr.responseText);
			content.textContent = joke;
			const random = Math.random() * 1000;
			setTimeout(() => {
				img.classList.remove('shake-img');
			}, random);
		} else {
			console.log({
				status: xhr.status,
				text: xhr.statusText,
			});
		}
	};
}
