//RELOAD
    function reload_iframes() {
        var f_list = document.getElementsByTagName('iframe');
        for (var i = 0, f; f = f_list[i]; i++) {
            f.src = f.src;
        }
    }


//GENERATE GRID
var arrayVariable = [
'https://www.ebay-kleinanzeigen.de/s-preis:20:100/thinkpad/k0',
'https://www.ebay-kleinanzeigen.de/s-preis:50:150/notebook-i7/k0',
'https://www.ebay-kleinanzeigen.de/s-preis:50:1500/notebook-i9/k0',
'https://www.ebay-kleinanzeigen.de/s-notebooks/preis:50:150/ultrabook/k0c278',
'https://www.ebay-kleinanzeigen.de/s-multimedia-elektronik/preis:100:/razer-blade/k0c161',
'https://www.ebay-kleinanzeigen.de/s-thinkpad-xd/k0',
'https://www.ebay-kleinanzeigen.de/s-commodore-pet/k0',
'https://www.ebay-kleinanzeigen.de/s-multimedia-elektronik/lineage/k0c161',
'https://www.ebay-kleinanzeigen.de/s-sony-clie-nr70/k0',
'https://www.ebay.de/sch/i.html?_from=R40&_nkw=i9&_sacat=175672&LH_TitleDesc=0&LH_PrefLoc=2&_fsrp=1&_sop=2&_osacat=175672&_dcat=175672&rt=nc&LH_BIN=1',
'https://www.ebay.de/sch/i.html?_from=R40&_nkw=librem+purism&_sacat=0&rt=nc&LH_ItemCondition=4',
'https://www.ebay-kleinanzeigen.de/s-librem-purism/k0',
'https://www.ebay-kleinanzeigen.de/s-sortierung:preis/seite:5/laptop-motherboard/k0',
'https://www.ebay.de/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=Laptop+Motherboard+ryzen+9&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=Laptop+Motherboard+ryzen+7',
'https://www.ebay.de/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=laptop+mainboard+i9&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=laptop+mainboard'
],
    arrayLength = arrayVariable.length;

for (i = 0; i < arrayLength; i++) {
document.getElementById("iframe").src = arrayVariable[i];
var div = document.createElement('div');
    div.innerHTML = document.getElementById('newcard').innerHTML;
    document.body.appendChild(div);
}

