var countSeconds;
var maxCountSeconds = 10;
var countMinutes;
var maxCountMinutes = 1;
var timerId;
countSeconds = maxCountSeconds;
countMinutes = maxCountMinutes;


function startCounter()
    {
        stopCounter();
        setDisplay(countSeconds);
        //setDisplay2(countMinutes);
        countSeconds = countSeconds;
        countMinutes = countMinutes;
        timerId = setInterval(updateCounterSeconds, 1000);
        // timerId = setInterval(updateCounterMinutes, 60000);
    }

function stopCounter()
    {
        clearInterval(timerId);
    }

function resetCounter()
    {
        setDisplay(maxCountSeconds);
        countSeconds = maxCountSeconds;
    }

function updateCounterSeconds()
    {
        countSeconds = countSeconds - 1;
        setDisplay(countSeconds);

        if (countSeconds == 0)
            {
                // stopCounter();
                countSeconds = 60;
                // add more!!
            }
    }

function updateCounterMinutes()
    {
        countMinutes = countMinutes - 1;
        setDisplay2(countMinutes);

        if (countMinutes == 0 && countSeconds == 0)
            {
                stopCounter();
                setDisplay2("Fer");
            }
    }

function setDisplay(info)
    {
        document.getElementById("display").innerHTML = info;
    }

function setDisplay2(info)
    {
        document.getElementVyId("Display2").innerHTML = info;
    }