// const object = {};

// const number = 1;

// Tworzenie obiektów
const views = [
    {
    
        title : "Zachód ślońca pod palmami",
        src : "img/1.jpg"
    }, 
    // po przecinku robi się całe tablice obiektów
    {
        title : "Widok z góry",
        src : "img/2.jpg"
    },

    {
        title : "Warszawa w budowie",
        src : "img/3.jpg"
    }
    ];

    // PUNKT 2 FUNKCJA WYŚWIETLAJĄCA KONKRETNY ELEMENT 
    function displayViews(index){
    const titleField = document.querySelector("h2");
    titleField.innerHTML = views[index].title;

    const imgField = document.querySelector(".content");
    imgField.innerHTML = "";

    // Tworzenie tagów HTML
const img = document.createElement("img"); 
img.src = views[index].src;
imgField.append(img);

    }

    // PUNKT 3 ZMIENNA ZMIENIAJĄCA NUMERY SLAJDÓW
    let currentSlide = 0;

    // WYWOŁANIE FUNKCJI Z PUNKTU 2 Z DOMYŚLNĄ WARTOŚCIĄ
    // żeby wyświetlił się element (graficzny)
    displayViews (currentSlide);

    // PUNKT 4 PRZEŁĄCZANIE SLJAJDÓW

    function changeSlide (direction)
    {
        if (direction == "left")
        {
            currentSlide--;
            if (currentSlide < 0)
            {
                currentSlide = views.length-1;
            }
        }
            else
            {
                currentSlide++;
                if (currentSlide > views.length-1)
                {
                    currentSlide = 0;
                }
            }
            console.log (currentSlide);
            displayViews (currentSlide);
        }
    
        // PUNSKT 5 POBIERAMY STRZAŁKI Z HTMLA
        const leftArr = document.querySelector(".left");

        // FUNKCJA PO KLIKNIĘCIU
        leftArr.onclick = () => {changeSlide("left")};
        const rightArr = document.querySelector(".right");
        rightArr.onclick = () => {changeSlide ("right")};
    


    