// use F12 or CMD+0 to open JS console in Popcorn-Time

// start filter
var timer = setInterval(function() {
	var nodeList = document.querySelectorAll("#content > div > div.list-region > ul > div.items > li");
	nodeList.forEach(function(node) {
		if (node != null) { // equivalent to: typeof(node) !== "undefined" && node !== null
			var year = node.querySelector("p.year");
			var rating = node.querySelector("div.rating-value");
			if (year != null && year.innerText < 2018) {
				if (node.parentNode != null) {
					node.parentNode.removeChild(node);
				}
			} else if (rating != null && rating.innerText[0] < 6) {
				if (node.parentNode != null) {
					node.parentNode.removeChild(node);
				}
			}
		}
	});
}, 1000);

// stop filter
clearInterval(timer);
