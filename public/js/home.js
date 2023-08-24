// Get the modal
var modal = document.getElementById("myModal");

// 1
var img = document.getElementById("img1");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// 2
var img = document.getElementById("img2");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// 3
var img = document.getElementById("img3");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// 4
var img = document.getElementById("img4");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// 5
var img = document.getElementById("img5");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// 6
var img = document.getElementById("img6");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Close
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}