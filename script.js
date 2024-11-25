let contentChamps = document.getElementById("Champs");

let jsonDatabase = [
	{
		"name": "Cleveland Cavaliers",
		"year": "2015-2016",
		"mvp": "Lebron James",
		"color1":"#860038",
		"color2":"#FDBB30",
		"score":"4:3 vs Golden State Warriors",
		"picture_url":"2016champs.jpg"
	},{
		"name": "Golden State Warriors",
		"year": "2016-2017",
		"mvp": "Kevin Durant",
		"color1":"#006BB6",
		"color2":"#FDB927",
		"score":"4:1 vs Cleveland Cavaliers",
		"picture_url":"2017champs.jpg"
	},{
		"name": "Golden State Warriors",
		"year": "2017-2018",
		"mvp": "Kevin Durant",
		"color1":"#006BB6",
		"color2":"#FDB927",
		"score":"4:0 Cleveland Cavaliers",
		"picture_url":"2018champs.jpg"
	},{
		"name": "Toronto Raptors",
		"year": "2018-2019",
		"mvp": "Kawhi Leonard",
		"color1":"#BE0F34",
		"color2":"#000000",
		"score":"4:2 vs Golden State Warriors",
		"picture_url":"2019champs.jpg"
	},{
		"name": "Los Angeles Lakers",
		"year": "2019-2020",
		"mvp": "Lebron James",
		"color1":"#FDB827",
		"color2":"#542583",
		"score":"4:2 vs Miami Heat",
		"picture_url":"2020champs.jpg"
	},{
		"name": "Milwaukee Bucks",
		"year": "2020-2021",
		"mvp": "Giannis Antetokounmpo",
		"color1":"#00461B",
		"color2":"#EFEBD2",
		"score":"4:2 vs Phoenix Suns",
		"picture_url":"2021champs.jpg"
	},{
		"name": "Golden State Warriors",
		"year": "2021-2022",
		"mvp": "Stephen Curry",
		"color1":"#006BB6",
		"color2":"#FDB927",
		"score":"4:2 vs Boston Celtics",
		"picture_url":"2022champs.jpg"
	},{
		"name": "Denver Nuggets",
		"year": "2022-2023",
		"mvp": "Nikola Jokić",
		"color1":"#002D62",
		"color2":"#FDB827",
		"score":"4:1 vs Miami Heat",
		"picture_url":"2023champs.jpg"
	},{
		"name": "Boston Celtics",
		"year": "2023-2024",
		"mvp": "Jaylen Brown",
		"color1":"#008348",
		"color2":"#FFFFFF",
		"score":"4:1 vs Dallas Mavericks",
		"picture_url":"2024champs.jpg"
	}
];


for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON){

	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = incomingJSON['color1'];
	newContentElement.style.borderColor = incomingJSON['color2'];
	newContentElement.classList.add('contentItem');


	let newContentYear = document.createElement("H2");
	newContentYear.classList.add('contentTitle');
	newContentYear.innerText = incomingJSON['year']+" CHAMPS";
	newContentElement.appendChild(newContentYear);

	let newContentName = document.createElement("H3");
	newContentName.classList.add('contentTitle');
	newContentName.innerText = incomingJSON['name'];
	newContentName.style.color = incomingJSON['color2'];
	newContentElement.appendChild(newContentName);

	let newImage = document.createElement("IMG");
	newImage.classList.add("footerImage");
	newImage.src = incomingJSON['picture_url'];
	newContentElement.appendChild(newImage);


	let newContentList = document.createElement("UL");
	newContentElement.appendChild(newContentList);

	
	let newInfoMvp = document.createElement("LI");
	let newMvp = "Final MVP: " +incomingJSON['mvp'];
	newInfoMvp.innerText = newMvp;
	newContentList.appendChild(newInfoMvp);

	let newInfoScore = document.createElement("LI");
	let newScore = incomingJSON['score'];
	newInfoScore.innerText = newScore;
	newContentList.appendChild(newInfoScore);


  	contentChamps.appendChild(newContentElement);
}