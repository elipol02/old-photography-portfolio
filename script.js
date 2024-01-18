// image portfolio arrays
const year2019 = ["2019",11];
const year2020 = ["2020",6];
const year2021 = ["2021",10];
const year2022 = ["2022",19];
const year2023 = ["2023", 7];
const year2024 = ["2024", 3];
const film = ["film",10];
const portraits = ["portraits", 5];
const home = ["home", 0];
var scrollLast = 0;

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
    }

    if (portfolio == home){
        //shows big menu
        document.getElementById("bigmenu").style.display = "inline";
        console.log("1");
    }else{
        //hides big menu
        document.getElementById("bigmenu").style.display = "none";
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
        if (singlePictureMode == true){
            singlePicture(i, imageCount);
        }
        console.log("2");
    }
}

//toggles single picture mode
function singlePicture(i, imageCount){
    if (singlePictureMode == false){ //turns on

        //records scroll
        scrollLast = window.scrollY || document.documentElement.scrollTop;

        //hides images
        for (let j=1; j<= imageCount; j++){
            document.getElementById(j).style.display = "none";
        }

        //shows selected image, adjusts css
        document.getElementById(i).style.display = "inline";
        if (window.innerWidth >= 860){
            const nodeList = document.querySelectorAll(".collumn");
            for (let j = 0; j < nodeList.length; j++){
                nodeList[j].style.flex = "100%";
                nodeList[j].style.maxWidth = "100%";
            }
        }
        singlePictureMode = true;
/*
        //makes arrows
        var leftimg = document.createElement("img");
        var rightimg = document.createElement("img");

        leftimg.src = "other-images/Arrow left.png"
        rightimg.src = "other-images/Arrow right.png"

        var left = document.createElement("a");
        var right = document.createElement("a");

        left.setAttribute("class", "leftArrow arrow");
        right.setAttribute("class", "rightArrow arrow");

        left.href="#";
        right.href="#";

        left.setAttribute("onClick", "nextPicture(" + i, + "," + imageCount + ", left)");
        right.setAttribute("onClick", "nextPicture(" + i, + "," + imageCount + ", right)");

        left.appendChild(leftimg);
        right.appendChild(rightimg);

        document.getElementById(i).appendChild(left);
        document.getElementById(i).appendChild(right);
*/
    }else{ // turns off
        for (let j=1; j<= imageCount; j++){
            document.getElementById(j).style.display = "inline";
        }
        if (window.innerWidth >= 860){
            const nodeList = document.querySelectorAll(".collumn");
            for (let j = 0; j < nodeList.length; j++){
                nodeList[j].style.flex = "50%";
                nodeList[j].style.maxWidth = "50%";
            }
        }
        singlePictureMode = false;
/*
        //removes arrows
        var elements = document.getElementsByClassName("arrow");
        var elementsArray = Array.from(elements);
        for (var i = 0; i < elementsArray.length; i++) {
            elementsArray[i].remove();
        }
*/
        setTimeout(function () {
            window.scrollTo(0, scrollLast);
        },1);
    }
}

function nextPicture(i, imageCount, direction){

}
/*
ideas for going between pictures:
    arrows on left and right, clicking them will move 
    forward or backwards an image 
    (by calling single picture with the next image)
    
    using "onmousemove" and "onscroll" in images to show arrows
    arrows will hide when there is no movement

    https://www.tutorialrepublic.com/codelab.php?topic=faq&file=css-overlay-one-div-over-another-div
*/

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
        },190)
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
        },190)
    }
}