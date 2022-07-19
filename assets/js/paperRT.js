//matching patterns
const regexSession = new RegExp('^SESSION');

//variables
let researchHTML = "";
let researchData = [];

window.onload = function(){
	fetch('./assets/csv/research.json')
	.then(function(resp){
		return resp.json();
	})
	.then(function(data){
		researchData = data;
		for(var i = 0; i<researchData.length; i++){
			if(regexSession.test(researchData[i].r1)){
				researchHTML += `<p class="session">` + researchData[i].r1 + `</p>`;
			}
			else if(researchData[i].r1.includes("August") || researchData[i].r1.includes("All Other")){
				researchHTML +=  `<p class="title">` + researchData[i].r1 + `</p>`;
			}
			else if(!!researchData[i].r1 && !!researchData[i].r2){
				researchHTML += `<section class="paper"><p class="paperTitle">` + researchData[i].r1 + `</p><p class="paperAuthor">` + researchData[i].r2 + `</p></section>`;
			}
		}
		
		$(".papers").html(researchHTML);
	})
}

















