// Copyright getjola

function $(id) {
	return document.getElementById(id); //less typing
}

function send() {

	var url = document.getElementById('URL').value;
	var result = document.getElementById('result');
	var status = document.getElementById('status');

	if(!url) {
		return window.alert("Please provide a URL");
	}else {
		var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange=function() {
              if(xhttp.status == 200){
                  status.innerHTML = '<span style="color:green">'+xhttp.status+'</span>';
              }else{
                  status.innerHTML = '<span style="color:darkred">'+xhttp.status+'</span>';
              }
		      result.innerHTML = xhttp.responseText;
		  };
		  xhttp.open("GET", url, true);
		  xhttp.send();
        
    }
}