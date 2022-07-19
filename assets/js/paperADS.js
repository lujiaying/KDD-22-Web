//variables
let ADSHTML = "";
let adsData = [];

//matching patterns
const regexSession = new RegExp('^SESSION');


window.onload = function(){
	fetch('/csv/ads.json')
	.then(function(resp){
		return resp.json();
	})
	.then(function(data){
		adsData = data;
		for(var i = 0; i<adsData.length; i++){
			if(regexSession.test(adsData[i].r1) || adsData[i].r1.includes("ADS PAPER SHOWCASE")){
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
	})
}

