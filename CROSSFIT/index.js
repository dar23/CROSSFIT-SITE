document.querySelector(".buttonek").addEventListener("click", displayDate);
 
     
function displayDate(){

document.querySelector(".websites").style.display="none";
document.querySelector(".future").style.display="none";
document.querySelector(".white_half").style.animation="white_half 0.3s forwards"
document.querySelector(".buttonek").style.animation="butonek 0.4s forwards"
}
 

document.querySelector(".buttonek1").addEventListener("click", displayDate_two);


function displayDate_two(){
    document.querySelector(".websites").style.display="block";
    document.querySelector(".future").style.display="block";
    document.querySelector(".white_half").style.animation="white_half_two 1s forwards"
    document.querySelector(".buttonek").style.animation="butonek_two 0.4s forwards"
    }