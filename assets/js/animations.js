let speed = 1;

function incEltNbr(id) {
    elt = document.querySelector(id);
    endNbr = Number(elt.innerHTML.substring(0, elt.innerHTML.length-1));
    incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
        elt.innerHTML = i;
        setTimeout(function () {
            //Delay a bit before calling the function again.
            incNbrRec(i + 1, endNbr, elt);
        }, speed);
    }
}

incEltNbr(".digits");
