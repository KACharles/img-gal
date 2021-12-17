// get all images in the gallery
let galleryImages = document.querySelectorAll(".gallery-img");
// open or get current images
let getLatestOpenedImg;
// get the window width
let windowWidth = window.innerWidth;
// check to see if images are in the gallery. if there's no image, the condition return flase
if(galleryImages){
    // this function allows to open each of the images in full view
    galleryImages.forEach(function(image, index) {
      image.onclick = function() {
        let getElementCss = window.getComputedStyle(image);
        let getFullImageUrl = getElementCss.getPropertyValue("background-image");
        let getImgUrlPos = getFullImageUrl.split("/img/thumbs/");
        let setNewImgUrl = getImgUrlPos[1].replace('")','');
        // alert(setNewImgUrl);

        getLatestOpenedImg = index + 1;

        let container = document.body;
        let newImgWindow = document.createElement("div");
        container.appendChild(newImgWindow);
        newImgWindow.setAttribute("class", "img-window");
        newImgWindow.setAttribute("onclick", "closeImg()");

        let newImg = document.createElement("img");
        newImgWindow.appendChild(newImg);
        newImgWindow.setAttribute("src", "img/" + setNewImgUrl);

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("Prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("class", "img-btn-prev");


      }
    });
}

function closeImg() {
  document.querySelector("img-window").remove();
}
