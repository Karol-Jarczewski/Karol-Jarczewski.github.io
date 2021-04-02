// const object = {};

// const number = 1;


const views = [
    {
    
        title : "Obrazek",
        src : "img/1.jpg"
    }, 
    // po przecinku robi się całe tablice obiektów
    {
        title2 : "Zachód ślońca pod palmami",
        src : "img/2.jpg"
    }
    ];

    function displayViews(index){
    const titleField = document.querySelector("h2");
    titleField.innerHTML - views[0].title;

    const imgField = document.querySelector(".content");
    // imgField.innerHTML = "Hello World";

    // Tworzenie tagów HTML
const img = document.createElement("img"); 
img.src = views[0].src;
imgField.append(img);

    }

    displayViews(2);

    console.log(img);
    console.log(views);