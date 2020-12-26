

//GENERATE GRID
var arrayVariable = [
'https://www.ebay-kleinanzeigen.de/s-preis:20:100/thinkpad/k0',
'https://www.ebay-kleinanzeigen.de/s-preis:50:150/notebook-i7/k0',
'https://www.ebay-kleinanzeigen.de/s-preis:50:1500/notebook-i9/k0',
'https://www.ebay-kleinanzeigen.de/s-notebooks/preis:50:150/ultrabook/k0c278',
'https://www.ebay-kleinanzeigen.de/s-multimedia-elektronik/preis:100:/razer-blade/k0c161',
'https://www.ebay-kleinanzeigen.de/s-multimedia-elektronik/lineage/k0c161',
'https://www.ebay-kleinanzeigen.de/s-preis:15:100/nokia-8800/k0',
'https://www.ebay-kleinanzeigen.de/s-preis:50:/vertu/k0',
'https://www.ebay-kleinanzeigen.de/s-motorola-aura/k0',
'https://www.ebay-kleinanzeigen.de/s-sony-clie-nr70/k0',
'https://www.ebay-kleinanzeigen.de/s-immobilien/preis:5000:25000/c195',
'https://www.ebay.de/sch/i.html?_from=R40&_nkw=i9&_sacat=175672&LH_TitleDesc=0&LH_PrefLoc=2&_fsrp=1&_sop=2&_osacat=175672&_dcat=175672&rt=nc&LH_BIN=1'
],
    arrayLength = arrayVariable.length;

for (i = 0; i < arrayLength; i++) {
document.getElementById("iframe").src = arrayVariable[i];
var div = document.createElement('div');
    div.innerHTML = document.getElementById('newcard').innerHTML;
    document.body.appendChild(div);
}

