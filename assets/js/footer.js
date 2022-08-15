var body = document.body,
html = document.documentElement;

var bodyHeight = body.scrollHeight;
var htmlHeight = html.scrollHeight;

if(htmlHeight - 70 > bodyHeight){
    $('#wrap').css({"height": "95vh"});
}

console.log(htmlHeight);

