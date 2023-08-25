//your JS code here. If required.
function resolvePromise(){
	let prom = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);	
	}).then((data)=>{
		document.getElementById("output").innerHTML = data;
	});
}


resolvePromise();