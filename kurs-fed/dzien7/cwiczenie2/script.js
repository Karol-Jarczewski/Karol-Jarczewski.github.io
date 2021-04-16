// const object = {};

// const number = 1;

// Tworzenie obiektów
const chopekInfo = [
    {
    
        title : "Obrazek",
        src : "https://placeimg.com/640/480/people"
    }, 
    // po przecinku robi się całe tablice obiektów
    {
        title : "obrazek2",
        src : "https://placeimg.com/640/480/animals"
    },

    {
        title : "obrazek3",
        src : "https://placeimg.com/640/480/arch"
    },

    {
        title : "Warszobrazek4",
        src : "https://placeimg.com/640/480/tech"
    }
    ];

    // PUNKT 2 FUNKCJA WYŚWIETLAJĄCA KONKRETNY ELEMENT 
    function displaychopekInfo(index){
    const titleField = document.querySelector("h2");
    titleField.innerHTML - chopekInfo[index].title;

    const imgField = document.querySelector(".content");
    imgField.innerHTML = "";

    // Tworzenie tagów HTML
const img = document.createElement("img"); 
img.src = chopekInfo[index].src;
imgField.append(img);

    }

    

    