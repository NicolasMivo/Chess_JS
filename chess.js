var board={
 totalwpieces: 16,
 totalbpieces: 16,
 whatpiece: function(position){
        piecelocation  =  document.getElementById(position);
         thisisclass    = piecelocation.class;
       console.log("classe =" + thiisclass);
 }

};

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
      else if(actualPiece == "wpawn" || actualPiece == "bpawn"){
         movePawn(actualPosition, newPosition)
         control = 0;
      }
      else if(actualPiece == "wking" || actualPiece == "bking"){
         moveKing(actualPosition, newPosition)
         control = 0;
      }
      else if(actualPiece == "wqueen" || actualPiece == "bqueen"){
         moveQueen(actualPosition, newPosition)
         control = 0;
      }
      else
      alert("error");
     
   }

   function IdentifyPiece(pieceId){
      var li = document.getElementById(pieceId);
      console.log(li.className);
          temp   = li.className.charAt(0);
          if((temp == "w") && (whitePlayerTurn == true) || (temp == "b") && (whitePlayerTurn == false))
          {
      actualPiece = li.className;
         actualPosition = pieceId;
         control = 1;
          }
          else {
            alert("Wrong player turn")
            }
     
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
moveXI = parseInt(moveX);
 moveYI = parseInt(moveY);
 posXI = parseInt(posX);
 posYI = parseInt(posY);

  let m = (moveX  - posX)/(moveY  - posY);
  console.log("m:" + m)

if(m == 1 || m == -1)
{
   console.log("valido");
   DetectColisionBishop(origin,position,moveXI,moveYI,posXI,posYI);

}
else
{
   alert("invalido");

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
moveXI = parseInt(moveX);
 moveYI = parseInt(moveY);
 posXI = parseInt(posX);
 posYI = parseInt(posY);

  if(moveXI !== posXI && moveYI !== posYI)
{
   alert("invalido");
   
}
else
{

   DetectColisionTower(origin,position,moveXI,moveYI,posXI,posYI);

///separação
   console.log("valido");
   
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
   alert("invalido")
}
console.log("working")
}

function movePawn(origin,position){
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

if(whitePlayerTurn == true){

  if((moveXI == posXI) && (moveYI == posYI + 1))
{
   console.log("valido");
  pawnFirstMove = false;
  DetectColisionPawn(origin,position,moveXI,moveYI,posXI,posYI)
  // RedirectPiece(origin,position);
   
}
else if((moveXI == posXI) && (moveYI == posYI + 2) && (pawnFirstMove == true))
{
   console.log("valido");
   pawnFirstMove = false;
   DetectColisionPawn(origin,position,moveXI,moveYI,posXI,posYI)
  // RedirectPiece(origin,position);
   
}
else if((moveXI == posXI + 1) && (moveYI == posYI + 1))
{ if(document.getElementById(position).className !== ""){
   console.log("valido");
   DetectColisionPawn(origin,position,moveXI,moveYI,posXI,posYI)
   //RedirectPiece(origin,position);
}
else alert("invalido");
}
else if((moveXI == posXI - 1) && (moveYI == posYI + 1)){
   if(document.getElementById(position).className !== ""){
   console.log("valido");
   DetectColisionPawn(origin,position,moveXI,moveYI,posXI,posYI)
   }
}

}

else if(whitePlayerTurn == false){

   if((moveXI == posXI) && (moveYI == posYI - 1))
{
   console.log("valido");
  pawnFirstMove = false;
  DetectColisionPawn(origin,position,moveXI,moveYI,posXI,posYI)
  // RedirectPiece(origin,position);
   
}
else if((moveXI == posXI) && (moveYI == posYI - 2) && (pawnFirstMove == true))
{
   console.log("valido");
   pawnFirstMove = false;
   DetectColisionPawn(origin,position,moveXI,moveYI,posXI,posYI)
  // RedirectPiece(origin,position);
   
}
else if((moveXI == posXI + 1) && (moveYI == posYI - 1))
{ if(document.getElementById(position).className !== ""){
   console.log("valido");
   DetectColisionPawn(origin,position,moveXI,moveYI,posXI,posYI)
   //RedirectPiece(origin,position);
}
else alert("invalido");
}
else if((moveXI == posXI - 1) && (moveYI == posYI + 1)){
   if(document.getElementById(position).className !== ""){
   console.log("valido");
   DetectColisionPawn(origin,position,moveXI,moveYI,posXI,posYI)
   }
}

}

else {alert("invalido")}

console.log("working")
}

function moveKing(origin,position){
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


  if((moveXI >= posXI+2) || (moveYI >= posYI+2))
{
   alert("invalido");
   
}
 else if((moveXI <= posXI-2) || (moveYI <= posYI-2))
{
   alert("invalido");
   
}

else
{
   console.log("valido");
   DetectColisionKing(origin,position,moveXI,moveYI,posXI,posYI);
   
   
}

console.log("working")
}

function moveQueen(origin,position){
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

 let m = (moveX  - posX)/(moveY  - posY);
  console.log("m:" + m)



  if(((moveXI >= posXI+2) && (moveYI >= posYI+1)) || ((moveXI >= posXI+1) && (moveYI >= posYI+2)))
{
   console.log("invalido");
   
}
else if(m == 1 || m == -1)
{ 
   console.log("valido");
   DetectColisionBishop(origin,position,moveXI,moveYI,posXI,posYI);
}

 else if(!(((moveXI <= posXI-2) || (moveYI <= posYI-2)) || ((moveXI >= posXI+2) || (moveYI >= posYI+2))))
{
   console.log("valido");
   DetectColisionKing(origin,position,moveXI,moveYI,posXI,posYI);
   
}

else if(!((moveXI !== posXI) && (moveYI !== posYI)))
{ 
   console.log("valido");
   DetectColisionTower(origin,position,moveXI,moveYI,posXI,posYI);
}

console.log("working");
}


function DetectColisionTower(origin,position,moveXI,moveYI,posXI,posYI){
   let valido = true;
    if(moveXI !== posXI && posXI < moveXI){
   for(let x = 0; posXI < moveXI; x++){
      posXI++; 
      if(document.getElementById(posXI + "" + posYI).className != ""){    
     let temp = document.getElementById(posXI + "" + posYI).className;
    let temp2 =  document.getElementById(origin).className;
    if(temp.charAt(0) != temp2.charAt(0)){
      if(temp.substring(1,temp.length) == "king"){
         Clear();
}
document.getElementById(posXI + "" + posYI).classList.remove(temp)
document.getElementById(origin).classList.remove(temp2);
 document.getElementById(posXI + "" + posYI).classList.add(temp2);
   console.log("COlision working");
    }
    else {
      alert("pieces with the same color");
      valido = false;
    }
   break;
      }
}

}
else if (moveXI !== posXI && posXI > moveXI){
for(let x = 0; posXI > moveXI; x++){
      posXI--; 
      if(document.getElementById(posXI + "" + posYI).className != ""){    
         let temp = document.getElementById(posXI + "" + posYI).className;
         let temp2 =  document.getElementById(origin).className;
         
         //RedirectPiece(origin,posXI + posY);
   
   if(temp.charAt(0) != temp2.charAt(0)){
      if(temp.substring(1,temp.length) == "king"){
         Clear();
}
      document.getElementById(posXI + "" + posYI).classList.remove(temp)
     document.getElementById(origin).classList.remove(temp2);
     document.getElementById(posXI + "" + posYI).classList.add(temp2);
       console.log("COlision working");
   }
   else{
      alert("pieces with the same color");
      valido = false;
   }
       break;
          }
}
}

else if (moveYI !== posYI && posYI < moveYI){
   for(let x = 0; posYI < moveYI; x++){
         posYI++; 
         if(document.getElementById(posXI + "" + posYI).className != ""){    
            let temp = document.getElementById(posXI + "" + posYI).className;
            
            //RedirectPiece(origin,posXI + posY);
       let temp2 =  document.getElementById(origin).className;
       if(temp.charAt(0) != temp2.charAt(0)){
         if(temp.substring(1,temp.length) == "king"){
            Clear();
   }
         document.getElementById(posXI + "" + posYI).classList.remove(temp)
        document.getElementById(origin).classList.remove(temp2);
        document.getElementById(posXI + "" + posYI).classList.add(temp2);
          console.log("COlision working");
       }
       else{
         alert("pieces with the same color");
      valido = false;
       }
          break;
             }
   }
   }

else if (moveYI !== posYI && posYI > moveYI){
   for(let x = 0; posYI > moveYI; x++){
         posYI--; 
         if(document.getElementById(posXI + "" + posYI).className != ""){    
            let temp = document.getElementById(posXI + "" + posYI).className;
            
            //RedirectPiece(origin,posXI + posY);
       let temp2 =  document.getElementById(origin).className;
       if(temp.charAt(0) != temp2.charAt(0)){
         if(temp.substring(1,temp.length) == "king"){
            Clear();
   }
         document.getElementById(posXI + "" + posYI).classList.remove(temp)
        document.getElementById(origin).classList.remove(temp2);
        document.getElementById(posXI + "" + posYI).classList.add(temp2);
          console.log("COlision working");
       }
       else{
         alert("pieces with the same color");
         valido = false;
       }
          break;
             }
   }
   }


   RedirectPiece(origin,position,valido);
}


function DetectColisionPawn(origin,position,moveXI,moveYI,posXI,posYI){

   let valido = true;
   if(moveXI == posXI){
  for(let x = 0; posYI < moveYI; x++){
     posYI++; 
     if(document.getElementById(posXI + "" + posYI).className != ""){    
    let temp = document.getElementById(posXI + "" + posYI).className;
   let temp2 =  document.getElementById(origin).className;
   if(temp.charAt(0) != temp2.charAt(0)){
      if(temp.substring(1,temp.length) == "king"){
         Clear();
}
      document.getElementById(posXI + "" + posYI).classList.remove(temp)
document.getElementById(origin).classList.remove(temp2);
document.getElementById(posXI + "" + posYI).classList.add(temp2);
  console.log("COlision working");
   }
   else {
     alert("pieces with the same color");
     valido = false;
   }
  break;
     }
}
   }
   else if((moveXI !== posXI)){
      
      let temp = document.getElementById(position).className;
      let temp2 =  document.getElementById(origin).className;
      if((temp.charAt(0) == temp2.charAt(0)) || (temp == "")){
         valido = false
         alert("pawn movement invalid")
      }
      
   }
   RedirectPiece(origin,position,valido);

}

function DetectColisionKing(origin,position,moveXI,moveYI,posXI,posYI){
    let valido = true;
    let temp = document.getElementById(origin).className;
    let temp2 = document.getElementById(position).className;
  
     if(temp.charAt(0) == temp2.charAt(0)){
     alert("pieces with the same color");
     valido = false;
   }

   RedirectPiece(origin,position,valido);
  
}
   
   
function DetectColisionBishop(origin,position,moveXI,moveYI,posXI,posYI){

   let valido = true;
   if(moveXI > posXI && moveYI > posYI){
  for(let x = 0; posYI < moveYI; x++){
     posYI++; 
     posXI++
     if(document.getElementById(posXI + "" + posYI).className != ""){    
    let temp = document.getElementById(posXI + "" + posYI).className;
   let temp2 =  document.getElementById(origin).className;
   if(temp.charAt(0) != temp2.charAt(0)){
      if(temp.substring(1,temp.length) == "king"){
         Clear();
}
      document.getElementById(posXI + "" + posYI).classList.remove(temp)
document.getElementById(origin).classList.remove(temp2);
document.getElementById(posXI + "" + posYI).classList.add(temp2);
  console.log("COlision working");
   }
   else{
      alert("same color");
      valido = false;
   }
break;
}
  }
}

else if(moveXI > posXI && moveYI < posYI){
   for(let x = 0; posYI > moveYI; x++){
      posYI--; 
      posXI++;
      if(document.getElementById(posXI + "" + posYI).className != ""){    
     let temp = document.getElementById(posXI + "" + posYI).className;
    let temp2 =  document.getElementById(origin).className;
    if(temp.charAt(0) != temp2.charAt(0)){
      if(temp.substring(1,temp.length) == "king"){
         Clear();
}
      document.getElementById(posXI + "" + posYI).classList.remove(temp)
 document.getElementById(origin).classList.remove(temp2);
 document.getElementById(posXI + "" + posYI).classList.add(temp2);
   console.log("COlision working");
    }
    else{
      alert("same color");
      valido = false;
   }
   break;
 }
   }
}

else if(moveXI < posXI && moveYI > posYI){
   for(let x = 0; posYI < moveYI; x++){
      posYI++; 
      posXI--;
      if(document.getElementById(posXI + "" + posYI).className != ""){    
     let temp = document.getElementById(posXI + "" + posYI).className;
    let temp2 =  document.getElementById(origin).className;
    if(temp.charAt(0) != temp2.charAt(0)){
      if(temp.substring(1,temp.length) == "king"){
         Clear();
}
      document.getElementById(posXI + "" + posYI).classList.remove(temp)
 document.getElementById(origin).classList.remove(temp2);
 document.getElementById(posXI + "" + posYI).classList.add(temp2);
   console.log("COlision working");
    }
    else{
      alert("same color");
      valido = false;
   }
   break;
 }
   }
   }

   else if(moveXI < posXI && moveYI < posYI){
      for(let x = 0; posYI < moveYI; x++){
         posYI--; 
         posXI--;
         if(document.getElementById(posXI + "" + posYI).className != ""){    
        let temp = document.getElementById(posXI + "" + posYI).className;
       let temp2 =  document.getElementById(origin).className;
       if(temp.charAt(0) != temp2.charAt(0)){
         if(temp.substring(1,temp.length) == "king"){
            Clear();
   }
         document.getElementById(posXI + "" + posYI).classList.remove(temp)
    document.getElementById(origin).classList.remove(temp2);
    document.getElementById(posXI + "" + posYI).classList.add(temp2);
      console.log("COlision working");
       }
       else{
         alert("same color piece");
         valido = false;
      }
      break;
    }
      }
      }

RedirectPiece(origin,position,valido);

}  

function Clear(){
   if(whitePlayerTurn == true){
alert("white player won");
   }
   else{
      alert("black player won");    
   }
   window.location.reload();

}




function RedirectPiece(posInitial, posFinal, value){
   control = 0;
if(value == true || value == null){
   if(temp.substring(1,temp.length) == "king"){
      Clear();
}
 whitePlayerTurn = !(whitePlayerTurn);
 let temp =  document.getElementById(posInitial).className;
 document.getElementById(posInitial).classList.remove(temp);
 if(document.getElementById(posFinal).className !== ""){
 document.getElementById(posFinal).classList.remove(document.getElementById(posFinal).className);
 }
 document.getElementById(posFinal).classList.add(temp);
   console.log("redirectWorking");
   }
   else alert("invalid move")
}


let pawnFirstMove = true;
let actualPiece = ""
let actualPosition;
let control = 0;
whitePlayerTurn = true;
alert("beggining");
alert("first turn is White turn")
//take the piece
    let buttonSelectPiece   = document.getElementById("move-piece");
    
     buttonSelectPiece.addEventListener('click', function() {
      Convertor(document.getElementById("next-position").value);
  })
