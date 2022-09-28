// MOMENTS
// THIS IS AN ARRAY
var saveButtons = $("button");
console.log(saveButtons);

var hourRow = document.querySelector(".row");
var taskInput = document.querySelector(".description")
var scheduleHour = document.querySelector("#schedule-time");



var displayDateTime = setInterval(() => {
    $("#currentDay").text(moment().format("[Today is: ] dddd MMMM Do, YYYY h:mm:ss a"));
}, 1000);

// JQUERY STYLING
var currentTime = moment().format("H");
console.log (currentTime);

var inputTasks = function () {
    $(".description").each(function () {
        var theTime = $(this).attr("id");
        if (theTime < currentTime) {
            $(this).addClass("past");
        } else if (theTime > currentTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
            console.log("it works!!");
        };
        console.log(theTime);
        console.log(currentTime);
    });
};

inputTasks ();

// save button as set storage
saveButtons.each(function (i, event)
    { $(event).on("click" , setStorage);

    })

// storing the data to local storage as set item
function setStorage (event) {
    var userInput = event.currentTarget.previousElementSibling.value;
    var userTime = event.currentTarget.previousElementSibling.id;
    console.log (userInput);
    console.log (userTime);

    localStorage.setItem(userTime, userInput);
}

// getting local storage
function loadStorage () {
    var manyTimes= ["09" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18"];
    manyTimes.forEach(function(theHour){
    var saveTimes = localStorage.getItem(theHour);
    $("#" + theHour).val(saveTimes);
});
};

loadStorage();












