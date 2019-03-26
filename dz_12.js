
var arr = [
	{
		"title": "1",
		"imageURL": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/android_ambassador_v1_cmyk_200px.max-200x200.png",
		"border": "7px solid green"
	},

	{
		"title": "2",
		"imageURL": "https://www.cmcgroups.com/wp-content/uploads/2018/02/logo-att-color-trans-200x200.png",
		"border": "7px solid green"
	},
	{
		"title": "3",
		"imageURL": "https://21clradio.com/wp-content/uploads/2015/09/Blend-Space-Logo-1.png",
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


	for (var i = 0; i < value; i++) {
	var obj = arr[i];
	var newE1 = document.createElement("div");

		
	newE1.style.border = obj.border;
	newE1.innerHTML = obj.title;
	newE1.style.backgroundImage = "url("+ obj.imageURL +")"; 
	parentE1.append(newE1);
	}
	
	}
	function clousebox() {
	 var value = prompt("сколько блоков удалить с страницы, от 1 до 6?", 0);
	document.getElementById("blocks").children[value-1].remove();
}



