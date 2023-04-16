//your JS code here. If required.
let ul = document.getElementsByTagName('ul')[0];
let d;
for(let i = 0; i<ul.children.length; i++){
	if(ul.children[i].id==='level'){
		d = "The level of the element is: "+(i+1);
	}
}
alert(d);
