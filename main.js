var countSeconds;
var maxCountSeconds = 60;
var countMinutes;
var maxCountMinutes = 1;
var timerId;
countSeconds = maxCountSeconds;
countMinutes = maxCountMinutes;


function startCounter()
    {
        stopCounter();
        setDisplay(countSeconds);
        setDisplay2(countMinutes);
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
        setDisplay2(maxCountMinutes);
        countSeconds = maxCountSeconds;
        countMinutes = maxCountMinutes;
    }

function updateCounterSeconds()
    {
        countSeconds = countSeconds - 1;
        setDisplay(countSeconds);

        if (countSeconds == 0)
            {
                // stopCounter();
                // setDisplay("mate");
                // setSeparator("here");
                // setDisplay2("We done");
                countSeconds = 60;
                countMinutes = countMinutes - 1;
                // add more!!
            }

        else if (countMinutes == 0 && countSeconds == 0)
            {
                stopCounter();
                setDisplay("mate");
                setSeparator("here");
                setDisplay2("We done");

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
        document.getElementById("display2").innerHTML = info;
    }

function setSeparator(info)
    {
        document.getElementById("separator").innerHTML = info;
    }