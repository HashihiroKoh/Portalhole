
var moveOn;
var onFlag=false;
const moveSpeed=0.2;
function moveCamera(){
  if(!onFlag){
    moveOn = setInterval(moving, 100);
    onFlag=true;
  }
  
}
function stopCamera(){
  clearInterval(moveOn);
  onFlag=false;
}
var moving = function () {
  const camera = document.querySelector("a-camera");
      let camerapos = camera.getAttribute("position");
      let camerarot = camera.getAttribute("rotation");
    
    camera.setAttribute("position", {
          x:camerapos.x+(Math.sin(camerarot.y * Math.PI / 180) *Math.cos(camerarot.x * Math.PI / 180))*-moveSpeed,
          y:camerapos.y+Math.sin(camerarot.x * Math.PI / 180)*moveSpeed,
          z:camerapos.z+(Math.cos(camerarot.y * Math.PI / 180) *Math.cos(camerarot.x * Math.PI / 180))*-moveSpeed
        })
};

function mouseDown(){
        let btgo=document.getElementById("btgo");
  btgo.setAttribute("material", { color: "cyan" });
        moveCamera();
      }
function mouseUp(){
         let btgo=document.getElementById("btgo");
  btgo.setAttribute("material", { color: "white" });
         stopCamera();
       }
