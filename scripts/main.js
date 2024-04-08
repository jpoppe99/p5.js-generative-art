function main(){
	id = this.id
	changeSketch(id)

}

function changeSketch(id){
	frame = document.querySelector("#artframe");
	pathstr = id
	frame.src = "scripts/"+pathstr+".html"

}

//register event handler
window.addEventListener("load", function() {
  let buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i)
    buttons[i].addEventListener("click", main);
	///debug
	console.log(buttons)
});