// Copyright Pranav Ramesh

console.log("(c) Jola\nTool by Pranav Ramesh");

function send() {

	var url = document.getElementById("URL").value;

	if (!url) {
		return window.alert("Please provide the URL");
	} else 
{
		var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange=function() {
		    if (this.readyState == 4 && this.status == 200) {
		      document.getElementById("result").innerHTML = this.responseText;
		    }
		  };
		  xhttp.open("GET", url, true);
		  xhttp.send();
		}
	}

