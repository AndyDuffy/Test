breakTot = 5;
sessionTot = 25;

$('#breakLess').on('click', function (e) {
    if (breakTot > 0) {
        breakTot -= 1;
        document.getElementById("myBreak").innerHTML = breakTot;
    }
});

$('#breakMore').on('click', function (e) {
    breakTot += 1;
    document.getElementById("myBreak").innerHTML = breakTot;
});

$('#sessionLess').on('click', function (e) {
    if (sessionTot > 0) {
        sessionTot -= 1;
        document.getElementById("mySession").innerHTML = sessionTot;
        document.getElementById("minutes").innerHTML = sessionTot;
    }

});
$('#sessionMore').on('click', function (e) {

    sessionTot += 1;
    document.getElementById("mySession").innerHTML = sessionTot;
    document.getElementById("minutes").innerHTML = sessionTot;
});
$('#startClock').on('click', function (e) {
    var countSec = setInterval(mySec, 1000);
    document.getElementById("myBreak").innerHTML = breakTot;
}
);