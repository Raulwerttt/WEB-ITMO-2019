$(document).ready(function(){
	$( "#button" ).click(function() {
		
		$('#result').load('https://inxaoc.github.io/example/ajax-1.html');

	

});	
	$( "#button2" ).click(function() {
		
		

		$('.result2').load('https://inxaoc.github.io/example/ajax.json');



});	

let butt2 = document.createElement("button");
	butt2.setAttribute("id", "ajax2");
	butt2.innerHTML="CLICK";
	document.getElementsByTagName('body')[0].appendChild(butt2);

	$("button#ajax2").click(function(){
		let temp = document.createElement("div");
		temp.setAttribute("id", "temp");
		document.getElementsByTagName('body')[0].appendChild(temp);
		$(temp).load("https://inxaoc.github.io/example/ajax.json",
			"authorization", onComplete);
    });
});

$(document).ready(function(){
	$("form *").prop("disabled", true);
});

function onComplete(){
	var json = $(temp).html();
	$(temp).html("");
	var text = "";
	for (var i = 0; i < json.length; i++) {
		if (json[i] == '{' || json[i] == '[') {
			text += "<ul><li>";
		} else if (json[i] == '}' || json[i] == ']') {
			text += "</ul></ul>";
		} else if (json[i] == ',') {
			text += "</li><li>";
		} else if (json[i] == '"') {
			if (json[i-1] == '{') {
				text += "<li>";
			} else if (json[i+1] == '}') {
				text += "</li>";
			}
		} else text +=json[i];

	}
	$(temp).append(text)
}


