







function expandCart() {
    fetch("https://halerinodejs.roeappelqvist1.repl.co/get")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let item = data;
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
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
