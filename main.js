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
        maxCountMinutes = document.getElementById("minutes").value;
        maxCountSeconds = document.getElementById("seconds").value;
        countSeconds = maxCountSeconds;
        countMinutes = maxCountMinutes;
        setDisplay(countSeconds);
        setFormatMinutes();
        setDisplay2(countMinutes);
        reformatMinutes();

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
        setFormatSeconds();
        setFormatMinutes();
        setDisplay(maxCountSeconds);
        setDisplay2(maxCountMinutes);
    }

function updateCounter()
    {
        countSeconds = countSeconds - 1;
        setFormatSeconds();
        setFormatMinutes();
        setDisplay(countSeconds);
        setDisplay2(countMinutes);
        reformatMinutes();

        if (countSeconds <= 0 && countMinutes <= 0 && countHours <= 0)
            {
                stopCounter();
                setDisplay3("Wir");
                setDisplay2("haben");
                setDisplay("fertig");
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

function reformatMinutes()
    {
        countMinutes = countMinutes - 3;
        countMinutes = countMinutes + 3;
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