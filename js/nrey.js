let getlistURL = "https://raw.githubusercontent.com/Nytuo/rey.txt.txt/main/urls.json";
fetch(getlistURL).then((response) => {
	return response.json();
}).then((data) => {
	let urls = data.urls;
	console.log(data);
	document.querySelectorAll('p, a, h3, h1, h2, span').forEach((element) => {
		var number = Math.floor(Math.random() * urls.length);
		element.innerHTML = element.innerHTML.replaceAll(/[Rr][eaéEAÉ]([IYRiyr]*)/g, "<img style='width:1rem' src='" + urls[number] + "'>");

	});
});

