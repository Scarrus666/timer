var countSeconds;
var maxCountSeconds;
var countMinutes;
var maxCountMinutes;
var countHours;
var maxCountHours;
var timerId;
let insertZero;

countSeconds = 0;
countMinutes = 0;
countHours = 0;
maxCountSeconds = 0;
maxCountMinutes = 0;
maxCountHours = 0;
insertZero = "0";




function startCounter()
    {
        stopCounter();
        // maxCountHours = document.getElementById("hours").value;
        // maxCountMinutes = document.getElementById("minutes").value;
        // maxCountSeconds = document.getElementById("seconds").value;
        countSeconds = maxCountSeconds;
        countMinutes = maxCountMinutes;
        countHours = maxCountHours;
        reformatSeconds();
        reformatMinutes();
        reformatHours();
        setFormatSeconds();
        setDisplay(countSeconds);
        setFormatMinutes();
        setDisplay2(countMinutes);
        setFormatHours();
        setDisplay3(countHours);
        reformatMinutes();
        reformatHours();
        timerId = setInterval(updateCounter, 1000);
    }

    function pauseCounter()
    {
        stopCounter();
        // maxCountHours = document.getElementById("hours").value;
        // maxCountMinutes = document.getElementById("minutes").value;
        // maxCountSeconds = document.getElementById("seconds").value;
        // countSeconds = maxCountSeconds;
        // countMinutes = maxCountMinutes;
        // countHours = maxCountHours;
        reformatSeconds();
        reformatMinutes();
        reformatHours();
        setFormatSeconds();
        setDisplay(countSeconds);
        setFormatMinutes();
        setDisplay2(countMinutes);
        setFormatHours();
        setDisplay3(countHours);
        reformatMinutes();
        reformatHours();
        timerId = setInterval(updateCounter, 1000);
    }

function stopCounter()
    {
        clearInterval(timerId);
    }

/* 
function resetCounter()
    {
        stopCounter();
        countSeconds = maxCountSeconds;
        countMinutes = maxCountMinutes;
        countHours = maxCountHours;
        setFormatSeconds();
        setFormatMinutes();
        setFormatHours();
        setDisplay(countSeconds);
        setDisplay2(countMinutes);
        setDisplay3(countHours);
        reformatMinutes();
        reformatHours();
    }
*/

function updateCounter()
    {
        countSeconds = countSeconds - 1;


        if (countSeconds <= 0 && countMinutes <= 0 && countHours <= 0)
            {
                stopCounter();
                countSeconds = "0"
                countMinutes = "0"
                countHours = "0"
                // setDisplay3("Wir");
                // setDisplay2("haben");
                // setDisplay("fertig");
            }

        else if (countMinutes == 0 && countSeconds < 0)
            {
                countMinutes = 60;
                countSeconds = 59;
                countHours = countHours - 1;
                countMinutes = countMinutes - 1;
            }

        else if (countSeconds < 0)
            {
                countSeconds = 59;
                countMinutes = countMinutes - 1;
                // add more!!
            }

            setFormatSeconds();
            setFormatMinutes();
            setFormatHours();
            setDisplay(countSeconds);
            setDisplay2(countMinutes);
            setDisplay3(countHours);
            reformatMinutes();
            reformatHours();
    }

function setFormatSeconds()
    {
        if (countSeconds < 10)
            {
                countSeconds = insertZero + countSeconds;
            }
    }

function setFormatMinutes()
    {
        if (countMinutes < 10 )
            {
                countMinutes = insertZero + countMinutes;
            }
    }

function setFormatHours()
    {
        if (countHours < 10)
            {
                countHours = insertZero + countHours;
            }
    }

function reformatSeconds()
    {
        countSeconds = countSeconds - 3;
        countSeconds = countSeconds + 3;
    }

function reformatMinutes()
    {
        countMinutes = countMinutes - 3;
        countMinutes = countMinutes + 3;
    }

function reformatHours()
    {
        countHours = countHours -3;
        countHours = countHours +3;
    }

function setDisplay(info)
    {
        document.getElementById("display").innerHTML = info;
    }

function setDisplay2(info)
    {
        document.getElementById("display2").innerHTML = info;
    }

function setDisplay3(info)
    {
        document.getElementById("display3").innerHTML = info;
    }

function setSeparator(info)
    {
        document.getElementById("separator").innerHTML = info;
    }

function setTimer()
    {
        stopCounter();
        maxCountHours = document.getElementById("hours").value;
        maxCountMinutes = document.getElementById("minutes").value;
        maxCountSeconds = document.getElementById("seconds").value;
        countHours = maxCountHours;
        countMinutes = maxCountMinutes;
        countSeconds = maxCountSeconds;
        reformatSeconds();
        setFormatSeconds();
        setDisplay(countSeconds);
        reformatMinutes();
        setFormatMinutes();
        setDisplay2(countMinutes);
        reformatHours();
        setFormatHours();
        setDisplay3(countHours);
    }

function resetToZero()
    {
        elementHours = document.getElementById("hours");
        elementMinutes = document.getElementById("minutes");
        elementSeconds = document.getElementById("seconds");
        elementHours.value = 0;
        elementMinutes.value = 0;
        elementSeconds.value = 0;
        countSeconds = 0;
        countMinutes = 0;
        countHours = 0;
        reformatSeconds();
        reformatMinutes();
        reformatHours();
        setFormatSeconds();
        setDisplay(countSeconds);
        setFormatMinutes();
        setDisplay2(countMinutes);
        setFormatHours();
        setDisplay3(countHours);
        reformatMinutes();
        reformatHours();
    }