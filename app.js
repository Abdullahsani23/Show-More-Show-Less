let flag = 0

function butnText(){
    var moreText = document.getElementById("moreText")
    var butnText = document.getElementById("butnText")
    if(flag ===0){
        moreText.style.display = "inline"
        butnText.innerText = "Show Less"
        flag = 1
    }else{
        moreText.style.display ="none"
        butnText.innerText = "Show More"
        flag = 0
    }
}





































// function butnText(){
// var moreText=document.getElementById("moreText")
// // console.log(moreText);
// var butnText =document.getElementById("butnText")
// var flag = 1

// if(butnText.innerText ="Show More"){
//     moreText.style.display = "inline"
// }
// else{
//     butnText.innerText= "Show Less"
//     moreText.style.display ="none"
// }


// var flag = 0

// function butnText() {
//     var moreText = document.getElementById("moreText")
//     var butnText = document.getElementById("butnText")

//     if (flag === 0) {
//         moreText.style.display = "inline"
//         butnText.innerText = "Show Less"
//         flag = 1;
//     } else {
//         moreText.style.display = "none"
//         butnText.innerText = "Show More"
//         flag = 0
//     }
// }











// if(flag === 1){
//     moreText.style.display ="inline"
//     butnText.innerText ="Show less"
//     flag=0
// }else {
//     moreText.style.display = "none"
//     butnText.innerText ="Show More"
//     flag = 1
// }
// }









// if (moreText.style.display === "none"){
//     moreText.style.display = "inline"
//     butnText.textContent = "Show less"
    
// }
// else{
//     moreText.style.display = "none"
//     butnText.textContent = "Show More"
// }
// }