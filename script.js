// image portfolio arrays
const home = [1,13];
const oregon = [2,8];
const northcascades = [3,10];
const seattle = [4,7];

//toggles
var menuVisibility = false;
var singlePictureMode = false;

// Adds images to html
function loadImages(portfolio){
    //clears images
    document.getElementById("images").innerHTML = ""; 
    document.getElementById("images2").innerHTML = "";
    //clears menu
    console.log(menuVisibility);
    if (menuVisibility == true){
        menu();
        console.log("1");
    }
    //gets portfolio information
    const imageCount = portfolio[1];
    const folder = portfolio[0];
    //creates array of image names and appends to collumns
    var images = [];
    var a = [];
    var divs = [];
    var i;
    for (i=1; i<= imageCount; i++){
        images[i] = document.createElement("img"); 
        images[i].src = "image-folders/" + folder + "/" + i + ".jpg";
        a[i] = document.createElement("a");
        a[i].href = "#";
        a[i].setAttribute("class", "button");
        a[i].setAttribute("onClick", "singlePicture(" + i + ", " + imageCount + ")");
        a[i].appendChild(images[i]);
        divs[i] = document.createElement("div");
        divs[i].id = i;
        divs[i].appendChild(a[i]);
        if (i <= imageCount/2){
            document.getElementById("images").appendChild(divs[i]);
        }else{
            document.getElementById("images2").appendChild(divs[i]);
        }
    }
    //resets picture mode
    if (singlePictureMode = true){
        singlePicture(i, imageCount);
    }
}

//toggles single picture mode
function singlePicture(i, imageCount){
    if (singlePictureMode == false){
        for (let j=1; j<= imageCount; j++){
            document.getElementById(j).style.display = "none";
        }
        document.getElementById(i).style.display = "inline";
        const nodeList = document.querySelectorAll(".collumn");
        for (let j = 0; j < nodeList.length; j++){
            nodeList[j].style.flex = "100%";
            nodeList[j].style.maxWidth = "100%";
        }
        singlePictureMode = true;
    }else{
        for (let j=1; j<= imageCount; j++){
            document.getElementById(j).style.display = "inline";
        }
        const nodeList = document.querySelectorAll(".collumn");
        for (let j = 0; j < nodeList.length; j++){
            nodeList[j].style.flex = "50%";
            nodeList[j].style.maxWidth = "50%";
        }
        singlePictureMode = false;
    }
}

// Toggles menu bar and its smooth animation
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
