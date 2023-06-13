var countSeconds;
var maxCountSeconds;
var countMinutes;
var maxCountMinutes;
var countHours;
var maxCountHours;
var timerId;
let insertZero;
insertZero = "0";




function startCounter()
    {
        stopCounter();
        maxCountHours = document.getElementById("hours").value;
        maxCountMinutes = document.getElementById("minutes").value;
        maxCountSeconds = document.getElementById("seconds").value;
        countSeconds = maxCountSeconds;
        countMinutes = maxCountMinutes;
        countHours = maxCountHours;
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

function resetCounter()
    {
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

function updateCounter()
    {
        countSeconds = countSeconds - 1;
        setFormatSeconds();
        setFormatMinutes();
        setFormatHours();
        setDisplay(countSeconds);
        setDisplay2(countMinutes);
        setDisplay3(countHours);
        reformatMinutes();
        reformatHours();

        if (countSeconds <= 0 && countMinutes <= 0 && countHours <= 0)
            {
                stopCounter();
                setDisplay3("Wir");
                setDisplay2("haben");
                setDisplay("fertig");
            }

        else if (countMinutes == 0 && countSeconds == 0)
            {
                countMinutes = 60;
                countSeconds = 60;
                countHours = countHours - 1;
                countMinutes = countMinutes - 1;
            }

        else if (countSeconds == 0)
            {
                countSeconds = 60;
                countMinutes = countMinutes - 1;
                // add more!!
            }
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