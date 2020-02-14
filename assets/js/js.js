
let tab = ['abricot', 'banane', 'cerise', 'cerisej', 'citron', 'citronj', 'fraise', 'framboise', 'grenade', 'mangue', 'orange', 'pasteque', 'peche', 'poire', 'pomme', 'pommev', 'prune', 'raisin', 'abricot', 'banane', 'cerise', 'cerisej', 'citron', 'citronj', 'fraise', 'framboise', 'grenade', 'mangue', 'orange', 'pasteque', 'peche', 'poire', 'pomme', 'pommev', 'prune', 'raisin'];
let res1;
let res2;
let idres1;
let idres2;
let count = 0;
let temps = 240;
let btnjouer = document.getElementById("jouer");
let btnrejouer = document.getElementById("recommencer");

btnrejouer.addEventListener('click', function ()
   {
    window.location.reload();
});  

btnjouer.addEventListener('click', function ()
   {
    jouer();
    cmptrb();
    
});  

function melange(tab)
{
    shuffle(tab);

    return tab;
}

function jouer()
{
    let tabm = melange(tab);

    for (let i = 1; i <= tabm.length; i++)
    {
        let name = document.getElementById('img' + i.toString());
        name.addEventListener('click', function ()
        {
            if (res1 == undefined || res2 == undefined)
            {
                {
                    name.style.backgroundImage = "url('assets/img/" + tabm[i - 1].toString() + ".png')";

                    if (res1 == undefined)
                    {
                        res1 = tabm[i - 1];
                        idres1 = name.id.toString();
                    } else
                    {
                        if (res2 == undefined)
                            res2 = tabm[i - 1];
                        idres2 = name.id.toString();
                    }
                    if (idres1 == idres2)
                    {
                        res2 = undefined;
                    }
                }
            }
            if ((res1 != undefined && res2 != undefined) && (res1 !== res2))
            {

                setTimeout(function () {
                    document.getElementById(idres1).style.backgroundImage = "url('assets/img/spritesheet.png')";
                    document.getElementById(idres2).style.backgroundImage = "url('assets/img/spritesheet.png')";
                    res2 = undefined;
                    res1 = undefined;
                }, 1000);
            }
            if ((res1 != undefined && res2 != undefined) && (res1 == res2) && (idres1 != idres2)) {

                document.getElementById(idres1).removeAttribute("onclick");
                document.getElementById(idres2).removeAttribute("onclick");
                count++;
                document.getElementById("count").innerHTML = '' + count + '';
                res2 = undefined;
                res1 = undefined;

            }
        });
    }
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function cmptrb()
{
    var compte = document.getElementById('timer');
    let sec = temps;
    let min = 0;
    if (sec < 0)
    {
        if (confirm("Fin du temps !!! \n Recommencer ?") == true) {
            window.location.reload();
        } else {
            window.close();
        }
    } else
    {
        if (sec > 59)
        {
            min = Math.floor(sec / 60);
            sec = sec - min * 60;
        }
        if (sec < 10)
        {
            sec = "0" + sec;
        }
        if (min < 10)
        {
            min = "0" + min;
        }
        compte.innerHTML = min + ":" + sec;
        temps--;
        window.setTimeout("cmptrb();", 999);
    }
}