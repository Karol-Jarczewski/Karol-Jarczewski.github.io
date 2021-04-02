const object = {};

const number = 1;


const views = [
    {
    
        title : "1",
        src : "img/1.jpg"
    }, 
    // po przecinku robi się całe tablice obiektów
    {
        title2 : "t";
        src : "img/2.jpg"
    }
    ];

    const titleField = document.querySelector("h2");
    titleField.innerHTML - views[0].title;

    const imgField = document.querySelector(".content");
    imgField.innerHTML = "Hello World";

    // Tworzenie tagów HTML
const img = document.createElement("img"); 
img.src = "img/" + views[0].src;
imgField.append(img);


    console.log(img);
    console.log(views);