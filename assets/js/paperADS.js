//import data
import adsData from '/assets/csv/ads.json' assert {type: 'json'};

//matching patterns
const regexSession = new RegExp('^SESSION');


//variables
let ADSHTML = "";



for(var i = 0; i<adsData.length; i++){
	if(regexSession.test(adsData[i].r1)){
		ADSHTML += `<p class="session">` + adsData[i].r1 + `</p>`;
	}
	else if(adsData[i].r1.includes("August") || adsData[i].r1.includes("All Other Accepted Papers")){
		ADSHTML +=  `<p class="title">` + adsData[i].r1 + `</p>`;
	}
	else if(!!adsData[i].r1 && !!adsData[i].r2){
		ADSHTML += `<section class="paper"><p class="paperTitle">` + adsData[i].r1 + `</p><p class="paperAuthor">` + adsData[i].r2 + `</p></section>`;
	}
}

$(".papers").html(ADSHTML);

