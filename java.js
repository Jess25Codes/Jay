const Time = document.querySelector('#currentTimeUTC p');
const day = document.querySelector('#currentDay p');
// const now = new Date();
// const days = console.log(days);
// day.innerHTML += days;
// Time.innerHTML += tick;
// day.textContent = `${getDay}`;
// console.log(getDay);
const now = new Date();
const date = now.toDateString();
const tick = () => {
	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();
	console.log(h, m, s);
	// const html = `hours:${h} minutes:${m} seconds:${s}`;
	// clock.innerHTML = html;
	Time.textContent = `${h}:${m}:${s}`;
};

setInterval(tick, 1000);

day.textContent = date;
