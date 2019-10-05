function addToggleFunction() {
	var x = document.getElementById("addDiv");
	var inputName = document.getElementById("artistName");
	var inputAbout = document.getElementById("artistAbout");
	var inputUrl = document.getElementById("artistUrl");
	var inputBtn = document.getElementById("addArtistBtn");

	x.appendChild(inputName);
	x.appendChild(inputAbout);
	x.appendChild(inputUrl);
	x.appendChild(inputBtn);

	if(x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
		inputName.value = "";
		inputAbout.value = "";
		inputUrl.value = "";
	}

	console.log(x);
}

function addFunction() {
	myStorage = window.localStorage;
	var y = document.getElementById("addDiv");
	var inputName2 = document.getElementById("artistName");
	var inputAbout2 = document.getElementById("artistAbout");
	var inputUrl2 = document.getElementById("artistUrl");
	var inputBtn2 = document.getElementById("addArtistBtn");

	y.appendChild(inputName2);
	y.appendChild(inputAbout2);
	y.appendChild(inputUrl2);
	y.appendChild(inputBtn2);


	var table = document.getElementById("artists");
	var tbody = document.getElementById("tableBody");
	var tr = document.createElement("TR");
	tr.setAttribute("class", "artistTr");

	var uniqueId = new Date().getUTCMilliseconds();
	console.log(uniqueId);
	tr.setAttribute("id", uniqueId);
	console.log(tr.id);

	var td = document.createElement("TD");
	var div = document.createElement("DIV");
	div.setAttribute("id", "artistCard");
	var divInside = document.createElement("DIV");
	divInside.setAttribute("id", "artistCardDiv");
	var pName = document.createElement("P");
	pName.setAttribute("id", "artistN")
	var pDesc = document.createElement("P");
	pDesc.setAttribute("id", "artistD");
	var deleteBtn = document.createElement("BUTTON");
	deleteBtn.setAttribute("class", "btnClass");
	deleteBtn.textContent = "Delete";
	deleteBtn.setAttribute("onClick", `deleteFunction(${uniqueId});`);

	

	var artistUrl = document.getElementById("artistUrl").value;
	var artistName = document.getElementById("artistName").value;
	var artistAbout = document.getElementById("artistAbout").value;

	var image = new Image;
	image.setAttribute("id", "artistImg");
	image.src = artistUrl;

	//var trArtistUrl = document.getElementById("artistImg");
	//trArtistUrl.src = artistUrl;
	if(myStorage == null) {
		myStorage.setItem('name', artistName);
		myStorage.setItem('about', artistAbout);
	}
	/*myStorage.setItem('name', artistName);
	myStorage.setItem('about', artistAbout);*/
	var trArtistName = myStorage.getItem('name');
	var trArtistAbout = myStorage.getItem('about');
	console.log(trArtistName);
	console.log(trArtistAbout);
	/*var parsedName = JSON.parse(trArtistName);
	var parsedAbout = JSON.parse(trArtistAbout);*/

	/*console.log(parsedName);
	console.log(parsedAbout);*/
	var trArtistNameNode = document.createTextNode(trArtistName);
	var trArtistAboutNode = document.createTextNode(trArtistAbout);

	/*pName.appendChild(parsedName);
	pDesc.appendChild(parsedAbout);*/
	pName.appendChild(trArtistNameNode);
	pDesc.appendChild(trArtistAboutNode);

	//img.appendChild(image);
	//img.appendChild(trArtistUrl);
	divInside.appendChild(pName);
	divInside.appendChild(pDesc);

	div.appendChild(image);
	div.appendChild(divInside);
	div.appendChild(deleteBtn);

	tr.appendChild(div);

	tbody.appendChild(tr);

	table.appendChild(tbody);

	y.style.display = "none";
	inputName2.value = "";
	inputAbout2.value = "";
	inputUrl2.value = "";

	console.log(table);

}

function deleteFunction(id) {

	document.getElementById(id).remove();


}

