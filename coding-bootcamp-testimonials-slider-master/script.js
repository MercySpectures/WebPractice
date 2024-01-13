//defining 2 arrays with images addresses and texts
var imagesList = ["./images/image-tanya.jpg", "./images/image-john.jpg", "./images/image-ani.jpg", "./images/image-jay.jpg"];
var paragraphText = [
    "I have been interested in coding for a while but never taken the jump, until now. I could not recommend this course enough. I am now in the job of my dreams and so excited about the future",
    "If you want to lay the best foundation possible, I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    "I've had a fascination with programming for some time but never mustered the courage until recently. I highly endorse this program. Currently, I'm working in my dream position and eagerly anticipating what lies ahead.",
    "For quite some time, I've been intrigued by the world of coding, yet hesitated to take the plunge until now. I can't emphasize enough how beneficial this course has been. I'm now employed in my dream job and enthusiastic about the upcoming journey."
];
var nameList = ["Tanya", "Benjamin", "Lucas", "Xavier"];
var designationList = ["UX Engineer", "Web Developer", "Front-End Developer", "Web Security Analyst"]

//default value = 0
var currentValue = 0;

//total elemnts length
var totalElements = imagesList.length;

//defining prev and next variables with respected tags
var prev = document.getElementById("prev");
var next = document.getElementById("next");

//defining image and text variables with respected tags
var image = document.querySelector(".rightImage>img");
var text = document.querySelector(".txt h4");
var names = document.getElementsByClassName("dark")[0];
var desig = document.getElementsByClassName("light")[0];

//to update values
function updateValue(){
    image.setAttribute("src", imagesList[currentValue]);
    text.innerText = paragraphText[currentValue];
    names.innerText = nameList[currentValue];
    desig.innerText = designationList[currentValue];
}

updateValue();

function previous(){
    if(currentValue === 0){
        currentValue = totalElements - 1;
        console.log("limit");
        updateValue();
    }
    else if(currentValue === totalElements){
        currentValue--;
        updateValue();
    }
    else{
        currentValue--
        updateValue();
    }
}

function nextThing(){
    if(currentValue === 0){
        currentValue++;
        updateValue();
    }
    else if(currentValue === totalElements - 1){
        currentValue = 0;
        console.log("limit");
        updateValue();
    }
    else{
        currentValue++;
        updateValue();
    }
}

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowLeft"){
        previous();
    }
    else if(event.key === "ArrowRight"){
        nextThing();
    }
    else{
        console.log("Other Key Pressed")
    }
})

//prev button functioning
prev.addEventListener("click", function(){
    previous();
})

//next button functioning
next.addEventListener("click", function(){
    nextThing();
})
