






async function testFetch() {
    console.log("prov");
    var res = await fetch("http://127.0.0.1:3600/get", {
        method: 'GET',
        
    });
    var jsond = await res.json();
    console.log(jsond);
}
function expandCart() {
    testFetch();
}
// jag vet johan, jag kan säkert bara använda arrays / jsonObjekt för detta men jag gillar att komplicera saker, om du inte redan har märkt det :)


class Item {
    name;
    id;
    img;
    pris;
    kategori;
    desc;
    constructor() {
    }
}
