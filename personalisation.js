const imageAndLogo = document.querySelector(".image-and-logo");
const textAndStyle = document.querySelector(".text-and-style");
const afterClickTextStyle = document.querySelector(".after-click-text-style");
const afterClickColors = document.querySelector(".after-click-colors");
const colors = document.querySelector(".colors");
const originalDiv = document.querySelector(".original");
const previewDiv = document.querySelector(".preview-section");
const mainDiv = document.querySelector(".main-section");
const afterClickDiv = document.querySelector(".after-click");
const cancelEditing = document.querySelector(".cancel-editing");
const cancelEditingColors = document.querySelector(".cancel-editing-colors");
const confirmEditing = document.querySelector(".confirm-editing");
const confirmEditingColors = document.querySelector(".confirm-editing-colors");
const confirmEditingTextStyle = document.querySelector(
  ".confirm-editing-text-style",
);
const cancelEditingTextStyle = document.querySelector(
  ".cancel-editing-text-style",
);
const imageIcon = document.querySelector(".bi-image");
const previewTextShow = document.querySelector("#preview-text-show");
const fontIconTextStyle = document.querySelector(".bi-fonts");
const fontIconColor = document.querySelector(".bi-palette");
const okIcon = document.getElementById("bi-1");
const okIconTextStyle = document.getElementById("bi-2");
const okIconColor = document.getElementById("bi-3");
const fontIcon = document.getElementById("fi-1");
const fontIconContainerText = document.getElementById("fi-2");
const fontIconContainerColor = document.getElementById("fi-3");
const customText = document.getElementById("custom-text");



function display() {
  previewTextShow.innerHTML  = customText.value;
}

// fonts
let interFont = document.getElementById("inter-font");
let mouseFont = document.getElementById("mouse-font");
let loraFont = document.getElementById("lora-font");
let bebasFont = document.getElementById("bebas-font");
let permanentFont = document.getElementById("permanent-font");
let blackOpsFont = document.getElementById("black-ops-font");
let dynapuffFont = document.getElementById("dynapuff-font");
interFont.addEventListener("click", ()=>{
  previewTextShow.style.fontFamily = "Oleo Script Swash Caps";
});
mouseFont.addEventListener("click", ()=>{
  previewTextShow.style.fontFamily = "Inter";
});
loraFont.addEventListener("click", ()=>{
  previewTextShow.style.fontFamily = "Lora";

});
bebasFont.addEventListener("click", ()=>{
  previewTextShow.style.fontFamily = "Bebas Neue";

});
permanentFont.addEventListener("click", ()=>{
  previewTextShow.style.fontFamily = "Permanent Marker";

});
blackOpsFont.addEventListener("click", ()=>{
  previewTextShow.style.fontFamily = "Black Ops One";

});
dynapuffFont.addEventListener("click", ()=>{
  previewTextShow.style.fontFamily = "DynaPuff";
 
});
let redColor = document.getElementById("red-color");
let pinkColor = document.getElementById("pink-color");
let grayColor = document.getElementById("gray-color");
let purpleColor = document.getElementById("purple-color");
let greenColor = document.getElementById("green-color");
redColor.addEventListener("click", ()=>{
  previewTextShow.style.color = "red";
}); 
pinkColor.addEventListener("click", ()=>{
  previewTextShow.style.color = "pink";
});
grayColor.addEventListener("click", ()=>{
  previewTextShow.style.color = "gray";
});
purpleColor.addEventListener("click", ()=>{
  previewTextShow.style.color = "purple";
});
greenColor.addEventListener("click", ()=>{
  previewTextShow.style.color = "green";
});

// media checker
var x = window.matchMedia("(max-width:992px)");

// ********************************
imageAndLogo.addEventListener("click", () => {
  afterClickDiv.style.display = "block";
  originalDiv.style.display = "none";
});

cancelEditing.onclick = () => {
  afterClickDiv.style.display = "none";
  originalDiv.style.display = "block";
};
confirmEditing.onclick = () => {
  // match media

  if (x.matches) {
    imageAndLogo.style.backgroundColor = "none";
  } else {
    imageAndLogo.style.backgroundColor = "#FF0A7C";
    imageAndLogo.style.color = "white";
  }

  afterClickDiv.style.display = "none";
  originalDiv.style.display = "block";

  imageAndLogo.style.border = "none";
  imageIcon.style.display = "none";
  okIcon.style.display = "block";
  okIcon.style.color = "white";
  fontIcon.style.border = "2px solid white";
  fontIcon.style.backgroundColor = "#FFC0CB";
};
textAndStyle.addEventListener("click", () => {
  afterClickTextStyle.style.display = "block";
  originalDiv.style.display = "none";
});
colors.addEventListener("click", () => {
  afterClickColors.style.display = "block";
  originalDiv.style.display = "none";
});
cancelEditingTextStyle.onclick = () => {
  afterClickTextStyle.style.display = "none";
  originalDiv.style.display = "block";
  previewTextShow.style.fontFamily = "sans-serif";
};

cancelEditingColors.onclick = () =>{
  afterClickColors.style.display = "none";
  originalDiv.style.display = "block";
  previewTextShow.style.color ="black";
}

confirmEditingTextStyle.onclick = () => {
  // match media
  if (x.matches) {
    textAndStyle.style.backgroundColor = "none";
  } else {
    textAndStyle.style.backgroundColor = "#FF0A7C";
    textAndStyle.style.color = "white";
  
  }

  afterClickTextStyle.style.display = "none";
  originalDiv.style.display = "block";
  
  textAndStyle.style.border = "none";
  fontIconTextStyle.style.display = "none";
  okIconTextStyle.style.display = "block";
  okIconTextStyle.style.color = "white";
  fontIconContainerText.style.border = "2px solid white";
  fontIconContainerText.style.backgroundColor = "#FFC0CB";
};

confirmEditingColors.onclick = () =>{


  if (x.matches) {
    colors.style.backgroundColor = "none";
  } else {
    colors.style.backgroundColor = "#FF0A7C";
    colors.style.color = "white";
  }

  afterClickColors.style.display = "none";
  originalDiv.style.display = "block";

  colors.style.border = "none";
  fontIconColor.style.display = "none";
  okIconColor.style.display = "block";
  okIconColor.style.color = "white";
  fontIconContainerColor.style.border = "2px solid white";
  fontIconContainerColor.style.backgroundColor = "#FFC0CB";
}