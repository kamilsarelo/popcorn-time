// use F12 or CMD+0 to open JS console in Popcorn-Time

// start filter
var yearMin = 2018;
var ratingMin = 6;
var timer = setInterval(function() {
	var nodeList = document.querySelectorAll("#content > div > div.list-region > ul > div.items > li");
	nodeList.forEach(function(node) {
		if (node != null) { // equivalent to: typeof(node) !== "undefined" && node !== null
			var year = node.querySelector("p.year");
			var rating = node.querySelector("div.rating-value");
			if (year != null && year.innerText < yearMin) {
				if (node.parentNode != null) {
					node.parentNode.removeChild(node);
				}
			} else if (rating != null && rating.innerText[0] < ratingMin) {
				if (node.parentNode != null) {
					node.parentNode.removeChild(node);
				}
			}
		}
	});
}, 1000);

// stop filter
clearInterval(timer);
