
var arr = [
	{
		
		"imageURL": "http://pngimg.com/uploads/pokemon/pokemon_PNG73.png",
		"border": "7px solid black"
	},

	{
		
		"imageURL": "http://pngimg.com/uploads/sign_stop/sign_stop_PNG25624.png",
		"border": "7px solid black"
	},
	{
		
		"imageURL": "https://upload.wikimedia.org/wikipedia/commons/4/41/Gamemaker8-200x200.png",
		"border": "7px solid black"
	},
	{
		
		"imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png",
		"border": "7px solid black"
	},
	{
		
		"imageURL": "https://flink.apache.org/img/logo/png/200/flink_squirrel_200_color.png",
		"border": "7px solid black"
	},
	{
		
		"imageURL": "http://www.personalizedbottlesofwater.com/img/customers/bmw.jpg",
		"border": "7px solid black"
	},
];
function createBlock() {
     var parentE1 = document.getElementById("blocks");     
     var value = prompt("Сколько блоков добавить на страницу, от 1 до 6?", 0);   


	for (var i = 0; i < value; i++) {
		var j;
		if (i < 6)
		{
			j = i;
		} else {j = i%6;}
	var obj = arr[j];
	var addE1 = document.createElement("div");

		
	addE1.style.border = obj.border;
	addE1.id = "el"+i;
	addE1.innerHTML = "element"+(i+1);
	addE1.style.backgroundImage = "url("+ obj.imageURL +")"; 
	parentE1.insertBefore(addE1, parentE1.lastChild);
	}
	
	}
	function deleteBlock() {
	 var v = prompt("Какой блок удалить?", 0);
	 v=v-1;
	document.getElementById("el"+v).remove();
}



