const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', async () => {
	try {
		// waiting for the fetch to settle and only then will you have access to data
		const data = await fetch(URL);
		const response = await data.json();
		// only runs once responses are received above
		displayData(response);
	} catch (error) {
		console.log(error);
	}
});

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
