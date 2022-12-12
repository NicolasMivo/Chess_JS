var board={
 totalwpieces: 16,
 totalbpieces: 16,
 whatpiece: function(position){
        piecelocation  =  document.getElementById(position);
         thisisclass    = piecelocation.class;
       console.log("classe =" + thiisclass);
 }

};



  
/*
   makemove: function(position, origem){
    result =  this.selectepiece();
   if(result == 2) {
    this.movebishop(position, origem)
   
   
   }

    console.log("esse e a posição" + position);
    console.log("esse e  origem " + origem);
       post     =  document.getElementById(position);    
       postog     =  document.getElementById(origem);    
   namepos = post.className;
   nameposog = postog.className;
   console.log("esse e a " + namepos);
   console.log("esse e a " + nameposog);

 post.setAttribute("class",nameposog);
 postog.classList.remove(nameposog);

}
*/

function Convertor(pos)
   {
    Alphabet=['A','B','C','D','E','F','G','H'];
       xpos   = pos.charAt(0);
       ypos   = pos.charAt(1);
      xpos2 =  1 + Alphabet.indexOf(xpos.toUpperCase());
      xypos = xpos2 +  "" + ypos;
      console.log(xypos);
      if(control == 0){
      IdentifyPiece(xypos);
      }
      else{
       Callmoviment(xypos)
      }
   }

   function Callmoviment(newPosition){
      if(actualPiece == "wbishop" || actualPiece == "bbishop"){
         moveBishop(actualPosition, newPosition)
         control = 0;
      }
     else if(actualPiece == "brooks" || actualPiece == "wrooks"){
         moveTower(actualPosition, newPosition)
         control = 0;
      }
      else if(actualPiece == "wknight" || actualPiece == "bknight"){
         moveknight(actualPosition, newPosition)
         control = 0;
      }
      else
      console.log("error");
     
   }

   function IdentifyPiece(pieceId){
      var li = document.getElementById(pieceId);
      console.log(li.className);
     actualPiece = li.className;
         actualPosition = pieceId;
         control = 1;
      }



function moveBishop(origin,position){
   console.log("posição inicial:" + origin)
let posX  = origin.charAt(0);
let posY   = origin.charAt(1);
console.log("posx:" + posX)
console.log("posy:" + posY)
let moveX = position.charAt(0);
let moveY = position.charAt(1);
console.log("posição final:" + position)
console.log("movex:" + moveX)
console.log("movey:" + moveY)


  let m = (moveX  - posX)/(moveY  - posY);
  console.log("m:" + m)

if(m == 1 || m == -1)
{
   console.log("valido");
   RedirectPiece(origin,position);
}
else
{
   console.log("invalido");

}

console.log("working")
}

function moveTower(origin,position){
   console.log("posição inicial:" + origin)
let posX  = origin.charAt(0);
let posY   = origin.charAt(1);
console.log("posx:" + posX)
console.log("posy:" + posY)
let moveX = position.charAt(0);
let moveY = position.charAt(1);
console.log("posição final:" + position)
console.log("movex:" + moveX)
console.log("movey:" + moveY)


  if(moveX != posX && moveY !== posY)
{
   console.log("invalido");
   
}
else
{
   console.log("valido");
   RedirectPiece(origin,position);
}

console.log("working")
}

function moveknight(origin,position){
   console.log("posição inicial:" + origin)
let posX  = origin.charAt(0);
let posY   = origin.charAt(1);
console.log("posx:" + posX)
console.log("posy:" + posY)
let moveX = position.charAt(0);
let moveY = position.charAt(1);
console.log("posição final:" + position)
console.log("movex:" + moveX)
console.log("movey:" + moveY)
 moveXI = parseInt(moveX);
 moveYI = parseInt(moveY);
 posXI = parseInt(posX);
 posYI = parseInt(posY);


  if(((moveXI  === (posXI + 2)) ||  (moveXI  === (posXI - 2))) && ((moveYI === (posYI + 1)) ||  (moveYI  === (posYI - 1))))
{
   console.log("valido");
   RedirectPiece(origin,position);
}
else if((moveXI === (posXI+1) ||  moveXI === (posXI-1)) && (moveYI  === (posYI + 2) ||  moveYI  === (posYI-2)))
{
   console.log("valido");
   RedirectPiece(origin,position);
}
else{
   console.log("invalido")
}
console.log("working")
}



function RedirectPiece(posInitial, posFinal){
 let temp =  document.getElementById(posInitial).className;
 document.getElementById(posInitial).classList.remove(temp);
 document.getElementById(posFinal).classList.add(temp);
   console.log("redirectWorking");
}

let actualPiece = ""
let actualPosition;
let control = 0;
alert("beggining");

//take the piece
    let buttonSelectPiece   = document.getElementById("move-piece");
    
     buttonSelectPiece.addEventListener('click', function() {
      Convertor(document.getElementById("next-position").value);
  })
