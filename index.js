let Searchbox=document.querySelector("#searchbox")
let Searchbutton=document.querySelector("#searchbutton")
const fun=async()=>{
    if(Searchbox.value){
const url = 'https://instagram-story-downloader-media-downloader.p.rapidapi.com/index?url='+Searchbox.value;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '355d027219msh386d40ea1898e94p144534jsnb79e8056d9bc',
		'x-rapidapi-host': 'instagram-story-downloader-media-downloader.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	//console.log(result["media"]);
    //Searchbox.value=result["media"]
    window.location.href=result["media"]
} catch (error) {
	console.error(error);
    alert("Give Valid Url")
}
    }
    else{
        alert("Fill Url Field !!")
    }
}
Searchbutton.addEventListener("click",fun)