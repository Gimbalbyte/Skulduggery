//global variables//
const generateBtn = document.querySelector("#generateBtn");

//need to randomize these variables//
// getRandomBackground
// getRandomClass
// getRandomRace

//fetch class api//
var getCharacterClass = function (getClass) {
    if (getClass === "class") {
        getClass = randO("#dropdown-content1")
    };
    //if class == Class then randomize//
    var apiClassUrl = 'https://www.dnd5eapi.co/api/classes/' + getClass.trim().toLowerCase();
    fetch(apiClassUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    //write Class to DOM//
                    $(".classInfo").text(data.name);
                });
            }
        });
};

//fetch race api//
var getCharacterRace = function (getRace) {
    if (getRace === "race") {
        getRace = randO("#dropdown-content2")
    };
    //if race == Race then randomize//
    var apiRaceUrl = 'https://www.dnd5eapi.co/api/races/' + getRace.trim().toLowerCase();
    fetch(apiRaceUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data)
                    //write Class to DOM//
                    $(".raceInfo").text(data.name);
                });
            }
        });
};

//fetch background//
var getCharacterBackground = function (getBackground) {
    if (getBackground === "background") {
        getBackground = randO("#dropdown-content3")
    };
    var select = document.getElementById('dropdown-content3');
    var items = select.getElementsByTagName('option');
    var index = Math.floor(Math.random() * items.length);
    select.selectedIndex = index;
    console.log(getBackground);
    $(".backgroundInfo").text(getBackground);
};

//helper function for randomizing dropdowns//
var randO = function (classing) {
    const select = document.querySelector(classing);
    const toget = Math.random() * (select.options.length - 1);
    return select.options[Math.floor(toget)].value;
};

//run dropdown menu changes on generate submit//
var formSubmitHandler = function (event) {
    event.preventDefault();

    const getClass = $("#dropdown-content1 option:selected").val();
    const getRace = $("#dropdown-content2 option:selected").val();
    const getBackground = $("#dropdown-content3 option:selected").val();
    //calling functions on formSubmit//
    getCharacterClass(getClass);
    getCharacterRace(getRace);
    getCharacterBackground(getBackground);
};

generateBtn.addEventListener('click', formSubmitHandler);
