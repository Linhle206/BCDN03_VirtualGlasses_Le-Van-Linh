let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];


let showGlassesList = () => {
    let content = "";
    for (const index in dataGlasses) {
        let glass = dataGlasses[index];
        content += `
            <a onclick="showVirtualGlasses(${index})" class="col-4"><img style="cursor: pointer;width:100%" src = "${glass.src}"></a>
        `
    }
    document.querySelector("#vglassesList").innerHTML = `${content}`;
}
showGlassesList();

let showVirtualGlasses = (index) => {
    let glasses = []
    dataGlasses.map((glass) => {
        glasses = [...glasses, glass];
    });

    let contentAVA = `
        <img src="${glasses[index].virtualImg}">
    `
    document.querySelector("#avatar").innerHTML = `${contentAVA}`;

    document.querySelector("#glassesInfo").style.display = "block";
    let contentInfo = `
        <h5>${glasses[index].name} - ${glasses[index].brand} (${glasses[index].color})</h5>
        <P style="color:#55ee55"><span style="background-color:red; color: #fff; padding:2px 5px; margin-right: 8px">$${glasses[index].price}</span>Stocking</P> 
        <p>${glasses[index].description}</p>
    `
    document.querySelector("#glassesInfo").innerHTML = `${contentInfo}`;
}
window.showVirtualGlasses = showVirtualGlasses;

let removeGlasses = (remove) => {
    if (remove == false) {
        document.querySelector("#avatar img").style.display = "none";
        document.querySelector("#glassesInfo").style.display = "none";
    } else {
        document.querySelector("#avatar img").style.display = "block";
        document.querySelector("#glassesInfo").style.display = "block";
    }

}
window.removeGlasses = removeGlasses;

