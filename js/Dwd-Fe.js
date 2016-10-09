var sdelay=0;
function returnTop() {
    window.scrollBy(0,-100);
    if(document.body.scrollTop>0) { 
        sdelay= setTimeout('returnTop()',30);
    }
}
var btn=document.getElementById('return-to-top'); 
if (btn) {
    btn.onclick= function (){ 
        returnTop();
    };
}
