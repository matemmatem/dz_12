var arr = [
	{
		"title": "1",
		"imageURL": "http://pngimg.com/uploads/pokemon/pokemon_PNG73.png",
		"border": "7px solid green"
	},

	{
		"title": "2",
		"imageURL": "http://pngimg.com/uploads/sign_stop/sign_stop_PNG25624.png",
		"border": "7px solid green"
	},
	{
		"title": "3",
		"imageURL": "https://upload.wikimedia.org/wikipedia/commons/4/41/Gamemaker8-200x200.png",
		"border": "7px solid green"
	},
	{
		"title": "4",
		"imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png",
		"border": "7px solid green"
	},
	{
		"title": "5",
		"imageURL": "https://flink.apache.org/img/logo/png/200/flink_squirrel_200_color.png",
		"border": "7px solid green"
	},
	{
		"title": "6",
		"imageURL": "http://www.personalizedbottlesofwater.com/img/customers/bmw.jpg",
		"border": "7px solid green"
	},
];

function createNewBlocks() {
     var parentE1 = document.getElementById("blocks");
	         
     var value = prompt("сколько блоков добавить на страницу, от 1 до 6?", 0);   


	for (var i = 0; i < value; i < 6, i++) {
	var obj = arr[i];
	var newE1 = document.createElement("div");

		
	newE1.style.border = obj.border;
	newE1.innerHTML = obj.title;
	newE1.style.backgroundImage = "url("+ obj.imageURL +")"; 
	parentE1.append(newE1);
	}
	
	}
	function search() {
	 var value = prompt("Поиск", 0);
	 

	document.getElementById("blocks").children[value-1].style.border = "12px solid red";
}



