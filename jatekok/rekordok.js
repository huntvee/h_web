var rubikRekordok = [];
rubikRekordok[2]="Mogyorósi Hunor;0,73 mp";
rubikRekordok[3]="Slezák Gábor;5,65 mp";
rubikRekordok[4]="Novotni Gergely;24,91 mp";
rubikRekordok[5]="Mogyorósi Hunor;49,06 mp";
rubikRekordok[6]="Barát Bence;1:36,67 mp";
rubikRekordok[7]="Barát Bence;2:21,03 mp";

function frissit(meret){
    kmeret.innerHTML=meret+' x '+meret;
    kido.innerHTML=rubikRekordok[meret].split(';')[1];
    knev.innerHTML=rubikRekordok[meret].split(';')[0];
    let kepfajl='rubik-'+meret+'.png';
    document.getElementById("rubik").src=kepfajl;
}
