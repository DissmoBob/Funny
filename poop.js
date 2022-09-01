alert(document.getElementsByTagName("img").length);
for(var q = 0; q<document.getElementsByTagName("img").length; q++){
  document.getElementsByTagName("img")[q].going=[[1,1],[1,-1],[-1,1],[-1,-1]][Math.floor(Math.random()*3)];
  document.getElementsByTagName("img")[q].going[0]=document.getElementsByTagName("img")[q].going[0]*(Math.floor(Math.random()*40)/10+1);
  document.getElementsByTagName("img")[q].going[1]=document.getElementsByTagName("img")[q].going[1]*(Math.floor(Math.random()*40)/10+1);
  document.getElementsByTagName("img")[q].style.position="fixed";
  document.getElementsByTagName("img")[q].style.display="hidden";
  document.getElementsByTagName("img")[q].style.left=(window.innerWidth/2+Math.random()*20-10)+"px";
  document.getElementsByTagName("img")[q].style.top=(Math.floor(Math.random()*(window.innerHeight-10))+10)+"px";
  console.log(q);
}
var a;
window.setInterval(function(){
  for(var i = 0; i<document.getElementsByTagName("img").length; i++){
    a=document.getElementsByTagName("img")[i];
    a.style.zIndex = Infinity;
    a.style.left=(parseInt(a.style.left.slice(0,-2))+a.going[0])+"px";
    a.style.top=(parseInt(a.style.top.slice(0,-2))+a.going[1])+"px";
    if(parseInt(a.style.top.slice(0,-2))>(window.innerHeight-2) || parseInt(a.style.top.slice(0,-2))<2){
      a.going[1]=a.going[1]*-1;
      if(parseInt(a.style.top.slice(0,-2))>window.innerWidth-2){
        a.style.top=(window.innerHeight-2)+"px";
      }
      else if(parseInt(a.style.top.slice(0,-2))<2){
        a.style.top="2px";
      }
    }
    if(parseInt(a.style.left.slice(0,-2))>(window.innerWidth-2) || parseInt(a.style.left.slice(0,-2))<2){
      a.going[0]=a.going[0]*-1;
      if(parseInt(a.style.left.slice(0,-2))>window.innerWidth-2){
        a.style.left=(window.innerWidth-2)+"px";
      }
      else if(parseInt(a.style.left.slice(0,-2))<2){
        a.style.left="2px";
      }
    }
    /*document.getElementById("change").innerText=a.style.left+"    "+a.style.top;
    document.getElementsByClassName("STYLE51")[1].innerText=a.style.left+"    "+a.style.top;*/
  }
}, 10)

//JermaSus.document.getElementsByTagName("img")[i].src="https://preview.redd.it/6bjy3w1x11261.jpg?auto=webp&s=853b45b11831f3e52ef67e754dfbdce2235e90f1"
/*if(document.getElementsByTagName("img")[i].style.width==""){  GrowThing
  document.getElementsByTagName("img")[i].style.width="15px";
}
if(document.getElementsByTagName("img")[i].style.height==""){
  document.getElementsByTagName("img")[i].style.height="15px";
}
document.getElementsByTagName("img")[i].style.width=(parseInt(document.getElementsByTagName("img")[i].style.width.slice(0,-2))+1)+"px";
document.getElementsByTagName("img")[i].style.height=(parseInt(document.getElementsByTagName("img")[i].style.height.slice(0,-2))+1)+"px";
//console.log(w + "   " + h);*/
