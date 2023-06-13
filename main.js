var countSeconds;
var maxCountSeconds = 13;
var countMinutes;
var maxCountMinutes = 10;
var timerId;
countSeconds = maxCountSeconds;
countMinutes = maxCountMinutes;
let insertZero;
insertZero = "0";
var addZero;
addZero = 0;


function startCounter()
    {
        stopCounter();
        setDisplay(countSeconds);
        setDisplay2(countMinutes);
        countSeconds = countSeconds;
        countMinutes = countMinutes;
        timerId = setInterval(updateCounterSeconds, 1000);
        // timerId = setInterval(updateCounterMinutes);
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
        // countMinutes = countMinutes + addZero;
        setFormatSeconds();
        setFormatMinutes();
        setDisplay(countSeconds);
        setDisplay2(countMinutes);
        reformatMinutes();

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

    function updateCounterMinutes()
    {
        countMinutes = countMinutes;
        // countMinutes = countMinutes + 1 - 1; // + addZero;
        setFormatMinutes();
        setDisplay2(countMinutes);
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
        countMinutes = countMinutes - maxCountMinutes;
        countMinutes = countMinutes + maxCountMinutes;
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