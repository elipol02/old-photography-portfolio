// image portfolio arrays
const home = [1,13];
const oregon = [2,8];
const northcascades = [3,10];
const seattle = [4,7];

// Adds images to html
function loadImages(portfolio){
    //clears images
    document.getElementById("images").innerHTML = ""; 
    document.getElementById("images2").innerHTML = "";

    //gets portfolio information
    const imageCount = portfolio[1];
    const folder = portfolio[0];

    //creates array of image names and appends to collumns
    var images = [];
    var i;
    for (i=1; i<= imageCount; i++){
        images[i] = document.createElement("img"); 
        images[i].src = "image-folders/" + folder + "/" + i + ".jpg";
        if (i <= imageCount/2){
            document.getElementById("images").appendChild(images[i]);
        }else{
            document.getElementById("images2").appendChild(images[i]);
        }
    }
}

// Toggles menu bar and its smooth animation
var menuVisibility = false;
function menu(){
    if (menuVisibility == false){
        document.getElementById("menu").style.display = "block";
        document.getElementById("menu").classList.add("animate");
        document.getElementById("title").classList.add("animate");
        document.getElementById("content").classList.add("animate");
        menuVisibility = true;
        setTimeout(function(){
            document.getElementById("menu").classList.remove("animate");
            document.getElementById("title").classList.remove("animate");
            document.getElementById("content").classList.remove("animate");
        },200)
    }else{
        document.getElementById("menu").classList.add("animateReverse");
        document.getElementById("title").classList.add("animateReverse");
        document.getElementById("content").classList.add("animateReverse");
        menuVisibility = false;
        setTimeout(function(){
            document.getElementById("menu").classList.remove("animateReverse");
            document.getElementById("title").classList.remove("animateReverse");
            document.getElementById("content").classList.remove("animateReverse");
            document.getElementById("menu").style.display = "none";
        },200)
    }
}
