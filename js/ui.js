// hanterar menyn när man rezisear
addEventListener("resize", (event) => {
    var navMenu = document.getElementById("sidebar");
    var menuButton = document.getElementById("menu-button");
    if(window.innerWidth > 900) {
        navMenu.style.height = "100%";
        menuButton.className="";
        return;
    }
    if(window.innerWidth < 900 && navMenu.style.height == "100%") {
        navMenu.style.height = "0";
        menuButton.className="";
        return;


    }
    
});

//Hanterar expandera navigationen.
function expandNav() {
  var navMenu = document.getElementById("sidebar");
  var menuButton = document.getElementById("menu-button");
  console.log(navMenu.style.height);
  if(navMenu.style.height == "" || navMenu.style.height == "0px") {
    menuButton.className = "selected";
    navMenu.style.height = "100%";
    console.log("trygard");
  } else {
    menuButton.className = "";
    navMenu.style.height = "0";
    console.log("gay");
  }
  
}
function expandCart() {

}