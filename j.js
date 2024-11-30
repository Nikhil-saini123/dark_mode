
const input=document.querySelector(".input");
const body=document.querySelector("body");
console.log("input checkid");
input.checked= false;
update();
function update() {
	if(input.checked)
	{
		 body.style.background="black";


	}
	else
	{
		 body.style.background="white";

	}


}
input.addEventListener("input",()=>
{

	update();
})

