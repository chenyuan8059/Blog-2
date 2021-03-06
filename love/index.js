function update (index) {
    spanel.innerHTML = render(index)
}

function chose() {
	var key = this.dataset.key;
	answer[index] = key;
	var text = this.innerHTML;
	addDialog('love', text);
	setTimeout(function () {
		addDialog('self', getMyword(index))
		index++;
        update(index)
	}, 2000);
	
}

function addDialog(obj,text) { 
	var div = '';
	if (obj === 'love') {
		for (var i = 0; i < text.length; i++) {
			div += "<div class='love-block'><img src='love.jpg'><p class='common-word'>" + text[i] + "</p></div>"
		}
		dialog.innerHTML = dialog.innerHTML + div;
	} else {
        for (var i = 0; i < text.length; i++) {
			div += "<div class='love-block'><img src='love.jpg'><p class='common-word'>" + text[i] + "</p></div>"
		}
		dialog.innerHTML = dialog.innerHTML + div;
	}
}

function getMyword (index) {
	if (myword[index][answer[index]]) {}
	return myword[index][answer[index]]
}

function render (index) {
	var ul = '';
	for (var i = 0; i < data[index].length; i++) {
		ul += "<li onclick='chose.bind(this)()' class='said' data-key=" + data[index][i].key + ">" + data[index][i].content + "</li>";  	
	}
	return ul;
}

update(index)