let items;

let Page = [];
window.addEventListener("load", (event) => {
    (async () => {
        items = await getItems();
        Page.Items = items;
        Page.generateContent();
      })();   
    console.log(items);
});


async function getItems() {
    const response = await fetch("https://halerinodejs.roeappelqvist1.repl.co/get");
    const jsonData = await response.json();
    return jsonData;
}


Page.generateContent = function() {
    console.log(Page.Items);
  for(var i = 0; i < Page.Items.length; i++) {
    var itembox = document.createElement("div");
    var price = document.createElement("p");
    var name = document.createElement("p");
    var img = document.createElement("img");
    //image
    img.src = ("https://halerinodejs.roeappelqvist1.repl.co/img/" + Page.Items[i].imgid);
    img.alt = ("Image of " + Page.Items[i].name);
    img.className = "imgBox";
    img.onclick = function() { Page.createItemWindow(this.id); };
    //price
    price.innerHTML = (Page.Items[i].price + "kr");
    price.className = "price";
    //name
    name.innerHTML = (Page.Items[i].name);
    name.className = "name";
    //itembox
    itembox.className = "item";
    itembox.id = (i);
    //lägger inn allt i itemboxen innan man slutligen lägger in den i containern
    itembox.append(img);
    itembox.append(price);
    itembox.append(name);
    document.querySelector("#main").append(itembox);
  }
}
Page.clearItemFrame = function() { 
    var main = document.querySelector("#main");
    while(main.childNodes.length > 0) {
        for(let i = 0; i < (main.childNodes.length); i++) { 
            main.childNodes[i].remove();
        }
    }
}
Page.createItemWindow = function(id) {
    Page.clearItemFrame();
    var mainf = document.createElement("div");
    var img = document.createElement("img");
    var purchaseButton = document.createElement("img");


}
function debug() {
    sex();
}
function expandCart() {
    cons
}
// jag vet johan, jag kan säkert bara använda arrays / jsonObjekt för detta men jag gillar att komplicera saker, om du inte redan har märkt det :)

