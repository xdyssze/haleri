let items;
let Cart = [];
let Page = [];
window.addEventListener("load", (event) => {
    (async () => {
        items = await getItems();
        Page.Items = items;
        Page.generateContent();
      })();   
    console.log(items);
    Cart.initCart();
});


async function getItems() {
    const response = await fetch("https://5877de4a-acb2-4d59-8cfd-e6379d9f3bc6-00-10qravryh231u.kirk.replit.dev/get");
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
    img.src = ("https://5877de4a-acb2-4d59-8cfd-e6379d9f3bc6-00-10qravryh231u.kirk.replit.dev/img/" + Page.Items[i].imgid);
    img.alt = ("Image of " + Page.Items[i].name);
    img.className = "imgBox";
    img.id = i;
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
    var desc = document.createElement("p");
    var pric = document.createElement("p");
    var name = document.createElement("p");
    var backbtn = document.createElement("img");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    //img
    img.src = ("https://5877de4a-acb2-4d59-8cfd-e6379d9f3bc6-00-10qravryh231u.kirk.replit.dev/img/" + Page.Items[id].imgid);
    img.alt = ("Image of " + Page.Items[id].name);
    //purchaseknapp
    purchaseButton.onclick = function() {
        Cart.addToCart(this.id); 
    };
    purchaseButton.src = "../img/shopping-cart.svg";
    purchaseButton.alt ="add to cart";
    purchaseButton.id = id;
    //desc
    desc.innerHTML = Page.Items[id].desc;
    //back
    backbtn.onclick = function() {
        Page.clearItemFrame();
        Page.generateContent();
    }
    backbtn.src = "../img/back-button.svg";
    backbtn.alt = "backbutton";
    //pric
    pric.innerHTML = Page.Items[id].price + "kr";
    //name
    name = Page.Items[id].name;
    //classnames
    purchaseButton.className ="Inframepurchase";
    desc.className = "Inframedesc";
    pric.className = "Inframeprice";
    name.className = "Inframename";
    img.className = "Inframeimg";
    mainf.className = "Inframe";
    div1.className = "Inframediv1";
    div2.className = "Inframediv2";
    backbtn.className = "Inframeback";
    
    //append
    div1.append(name);
    div1.append(img);
    div1.append(pric);
    mainf.append(backbtn);
    div2.append(desc);
    div2.append(purchaseButton);
    mainf.append(div1);
    mainf.append(div2);
    
    
    document.querySelector("#main").append(mainf);
}



//Cart draw inframe screen

Page.createCartWindow = function() {
    Page.clearItemFrame();
    var mainf = document.createElement("div");
    var list = document.createElement("ul");
    var tot = document.createElement("p");
    var totalcost = 0;
    for(let i = 0; i < Cart.Items.length; i++) {
        var ob = document.createElement("li");
        ob.textContent = "Vara: " + Cart.Items[i].name + " || Pris: " + Cart.Items[i].price + "kr";
        totalcost += parseInt(Cart.Items[i].price);
        ob.id = Cart.Items[i].id;
        ob.className = "Liobj";
        ob.onclick = function() {
            Cart.removeFromCart(this.id);
        }
        list.append(ob);
    }
    
    tot.innerHTML = "Total Kostnad: " + totalcost + "kr";
    tot.className = "total";
    mainf.append(list);
    mainf.append(tot);

    document.querySelector("#main").append(mainf);
}

// cart functions
Cart.addToCart = function(id) {
    let it = Page.Items[id];
    it.id = id;
    console.log(it);
    Cart.Items[Cart.Items.length] = it;
    console.log(Cart.Items[Cart.Items.length-1]);
    Cart.sorts();
}
Cart.findElement = function(id) {
    for(let i = 0; i < Cart.Items.length; i++) {
        if(Cart.Items[i].id == id) {
            return(i);
        }      
    }
    return(null);
}

Cart.removeFromCart = function(id) {
    
    Cart.Items[Cart.findElement(id)] = "2sex";
    Cart.sorts();
    Page.createCartWindow();
}
Cart.sorts = function() {
    let temparr = [];
    let count = 0;
    for(let i = 0; i < Cart.Items.length; i++) {
        if(Cart.Items[i] != "2sex") {
            console.log(Cart.Items[i]);
            temparr[count] = Cart.Items[i];
            count++;
        }
    }
    console.log(temparr);
    Cart.Items = temparr;
    Cart.updateLocalStorage();
}
Cart.initCart = function() {
    let wl = window.localStorage.getItem("cart");
    if(!wl || wl.length == 0) {
        Cart.Items = [];
        return;
    }
    Cart.Items = JSON.parse(wl);
    return;
}
Cart.updateLocalStorage = function() {
    window.localStorage.removeItem("cart");
    window.localStorage.setItem("cart", JSON.stringify(Cart.Items));
}
function debug() {
    sex();
}
Cart.expandCart = function() {
    console.log("sex");
    Page.createCartWindow();
}
