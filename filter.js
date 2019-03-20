// use F12 or CMD+0 to open JS console in Popcorn-Time

//----

if (timer) {
	clearInterval(timer);
}

//----

var yearMin = 0;
var ratingMin = 0;
//setTimeout(function() {
var timer = setInterval(function() {
	var nodeList = document.querySelectorAll("#content > div > div.list-region > ul > div.items > li");
	nodeList.forEach(function(node) {
		if (node != null) { // equivalent to: typeof(node) !== "undefined" && node !== null
			var year = node.querySelector("p.year");
			var rating = node.querySelector("div.rating-value");
			if (year && parseInt(year.innerText.trim()) >= yearMin
				&& rating && parseInt(rating.innerText[0]) >= ratingMin
			) {
				node.style.display = 'block';
				return;
			}
			node.style.display = 'none';
		}
	});
}, 1000);

//----

if (div && div.parentNode) {
	div.parentNode.removeChild(div);
}

//----

var div = document.createElement('div');
div.style = 'z-index: 999; position: absolute; left: 700px; top: 35px; padding: 5px; background-color: yellow; font-family: sans-serif; font-size: 12px; font-weight: bold;';
document.body.appendChild(div);

//----

div.innerHTML = 'min year <select id="com_kamilsarelo_select_year"></select> and min rating <select id="com_kamilsarelo_select_rating"></select>';

//----

var selectYear = document.getElementById('com_kamilsarelo_select_year');
{
	var optionYear = document.createElement('option');
	optionYear.value = 0;
	optionYear.text = 'all';
	selectYear.appendChild(optionYear);
}
for (var year = new Date().getFullYear(); year >= 1950; year--) {
	var optionYear = document.createElement('option');
	optionYear.value = year;
	optionYear.text = year;
	selectYear.appendChild(optionYear);
}

//----

var selectRating = document.getElementById('com_kamilsarelo_select_rating');
for (var rating = 0; rating <= 9; rating++) {
	var optionRating = document.createElement('option');
	optionRating.value = rating;
	optionRating.text = rating;
	selectRating.appendChild(optionRating);
}

//----

selectYear.onchange = function(){
	yearMin = this.value;
};
selectRating.onchange = function(){
	ratingMin = this.value;
};
