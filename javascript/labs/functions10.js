var dollar_eurokoers = 0.74;
var euro_dollarkoers = 1.36;
var euro_roebelkoers = 48.40;
var roebel_eurokoers = 0.02;

function exchange(bedrag, conversie) {
    switch (conversie) {
        case 'dollar_euro':
            var conversie_bedrag = (bedrag * dollar_eurokoers).toFixed(2);
            document.getElementById("conversie_bedrag").innerHTML = bedrag + '&dollar; is ' + '&euro;' + conversie_bedrag;
            break;
        case 'euro_dollar':
            var conversie_bedrag = (bedrag * euro_dollarkoers).toFixed(2);
            document.getElementById("conversie_bedrag").innerHTML = bedrag + '&euro; is ' + '&dollar;' + conversie_bedrag;
            break;
        case 'euro_roebel':
            var conversie_bedrag = (bedrag * euro_roebelkoers).toFixed(2);
            document.getElementById("conversie_bedrag").innerHTML = bedrag + '&euro; is ' + '&#8381;' + conversie_bedrag;
            break;
        case 'roebel_euro':
            var conversie_bedrag = (bedrag * roebel_eurokoers).toFixed(2);
            document.getElementById("conversie_bedrag").innerHTML = bedrag + '&#8381; is ' + '&euro;' + conversie_bedrag;
            break;

    }
}
