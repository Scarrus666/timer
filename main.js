var count;
var maxCount = 30;
var timerId;
count = maxCount;

function startCounter()
    {
        stopCounter();
        setDisplay(count);
        count = count;
        timerId = setInterval(updateCounter, 1000);
    }

function stopCounter()
    {
        clearInterval(timerId);
    }

function resetCounter()
    {
        setDisplay(maxCount);
        count = maxCount;
    }

function updateCounter()
    {
        count = count - 1;
        setDisplay(count);

        if (count === 0)
            {
                topCountDown();
                setDisplay("Done!");
                // add more!!
            }
    }

function setDisplay(info)
    {
        document.getElementById("display").innerHTML = info;
    }