var countSeconds;
var maxCountSeconds = 13;
var countMinutes;
var maxCountMinutes = 1;
var timerId;
countSeconds = maxCountSeconds;
countMinutes = maxCountMinutes;
let insertZero;
insertZero = "0";


function startCounter()
    {
        stopCounter();
        setDisplay(countSeconds);
        setDisplay2(countMinutes);
        countSeconds = countSeconds;
        countMinutes = countMinutes;
        timerId = setInterval(updateCounterSeconds, 1000);
    }

function stopCounter()
    {
        clearInterval(timerId);
    }

function resetCounter()
    {
        setDisplay(maxCountSeconds);
        setDisplay2(maxCountMinutes);
        setSeparator(":");
        countSeconds = maxCountSeconds;
        countMinutes = maxCountMinutes;
    }

function updateCounterSeconds()
    {
        countSeconds = countSeconds - 1;
        setFormat();
        setDisplay(countSeconds);
        setDisplay2(countMinutes);

        if (countSeconds == 0 && countMinutes == 0)
            {
                stopCounter();
                setDisplay("mate");
                setSeparator("here");
                setDisplay2("We done");

            }

        else if (countSeconds == 0)
            {
                countSeconds = 60;
                countMinutes = countMinutes - 1;
                // add more!!
            }
    }

function setFormat()
    {
        if (countSeconds < 10)
            {
                countSeconds = insertZero + countSeconds;
            }

        if (countMinutes < 10 )
            {
                countMinutes = insertZero + countMinutes;
            }
    }

function setDisplay(info)
    {
        document.getElementById("display").innerHTML = info;
    }

function setDisplay2(info)
    {
        document.getElementById("display2").innerHTML = info;
    }

function setSeparator(info)
    {
        document.getElementById("separator").innerHTML = info;
    }