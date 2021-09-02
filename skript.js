// Teilgefecht an endless game

var nahrung = "600";

var holz = "400";

var stein = "200";

var stahl = "200";

var waffen = "100";

var ressourcen = "1000" //holz + stein + stahl

var jahr = 1640;

var siedler = 0;

var ende = false;

var geburtenRate;






//document.getElementById("startButton").onclick = function () { startFunction() };

//function startFunction() {
//  document.getElementById("startButton").innerHTML = spieleEineRunde();
//}

function spieleEineRunde() {

  if (ende == false) {
    jahr = jahr + 1;

    armeeZusammenstellen(); 
    verarbeiteBefehle();
    bestimmeSchlachtBonus(); 
    erstelleBericht();
    pruefeEnde();

  }

  
  

}


function armeeZusammenstellen() {
  console.log("1");
}
function verarbeiteBefehle(){
  console.log("2");
}
function bestimmeSchlachtBonus() {
  console.log("3");
}
function erstelleBericht(){
  console.log("4");
}
function pruefeEnde(){
  console.log("5");
}

/*

function bestimmeSchlachtBonus() {
  schlachtBonus = Math.round(Math.random() * 10 + 0.5);
  if (Math.random() > 0.9) {
    schlachtBonus = Math.round(Math.random() * 15 + 0.5);
  }

}

function bestimmeWachstumsErfolg() {
  geburtenRate = Math.round(Math.random() * 5 + Math.random() * 5 + 0.5);

}

function verarbeiteBefehle() {
  var eingabe = prompt("Erteilt Eure Befehle, grausamer Diktator der Unterwelt", "Nahrung,Handel,Waffen");
  var befehle = eingabe.split(",");

  var verteileNahrung = parseInt(befehle[0]);
  var betreibeHandel = parseInt(befehle[1]);
  var fuehreKrieg = parseInt(befehle[2]);

  if (isNaN(verteileNahrung) || verteileNahrung < 0) {
    verteileNahrung = 0;
  }

  if (isNaN(betreibeHandel) || betreibeHandel < 0) {
    betreibeHandel = 0;
  }

  if (isNaN(fuehreKrieg) || fuehreKrieg < 0) {
    fuehreKrieg = 0;
  }

  bevoelkerung(verteileNahrung);
  handel(betreibeHandel);
  krieg(fuehreKrieg);

}

function bevoelkerung(hunger) {
  if (hunger > nahrung) {
    hunger = nahrung;
  }
  nahrung = nahrung - hunger;
  var keinHunger = Math.round(hunger / 20) - siedler;

  var neueSiedler = 0;
  if (keinHunger > 0 ) {
    neueSiedler = keinHunger / 2;
  }
  var verstorbeneSiedler = 0;
  if (keinHunger < 0) {
    verstorbeneSiedler = -keinHunger;
  }
  siedler = Math.round(siedler + neueSiedler - verstorbeneSiedler);
}

function handel(kauf){

  //Kaufe Waffen
  if (kauf < 0) {
    var verkauf = Math.abs(kauf);
    if (kauf > ressourcen) {
      return;
    }
    ressourcen = ressourcen - verkauf;
    waffen = waffen + verkauf * schlachtBonus;
  }

  //Verkaufe Waffen
  if (kauf > 0){
    if (kauf * schlachtBonus > waffen) {
      alert("Nicht genug Ressourcen für die Beschaffung von Kriegsmaterial!");
      return;
    }
    ressourcen = ressourcen + kauf;
    waffen = waffen - kauf * schlachtBonus;
  }

}





function krieg (gewinn) {
  if (gewinn > waffen) {
    gewinn = waffen;
  }
  waffen = waffen - gewinn;
  var moeglicherGewinn = parseInt(gewinn/2);

  if (moeglicherGewinn > siedler * 10) {
    moeglicherGewinn = siedler * 10;
  }
  if (moeglicherGewinn > ressourcen) {
    moeglicherGewinn = ressourcen;
  }
  gewonneneNahrung = geburtenRate * moeglicherGewinn;
  nahrung = nahrung + gewonneneNahrung;
}


//function kill() {

//  return "I WILL KILL YOU!";

//}

//document.getElementById("button1").onclick = function () { killFunction() };

//function killFunction() {
//  document.getElementById("button1").innerHTML = kill();
//}



function erstelleBericht() {

  
 
  var geburten;
  switch (geburtenRate) {
    case 1:
      geburten = "Es herrscht eine große Distanz zwischen deiner Bevölkerung. Niemand scheint sich oder dich zu mögen. Ohne Liebe keine Kinder.";
      break;
    case 2:
    case 3:
      geburten = "Keine große Lust an der Lust..";
      break;
    case 6:
    case 7:
      geburten = "Sobald die Nacht hereinbricht gibt es Nachwuchs.";
      break;
    case 8:
    case 9:
    case 10:
      geburten = "Es wird Tag und Nacht geschnaxlt."
      break;
    case 4:
    case 5:
    default:
      geburten = "Ab und zu trifft man sich und bleibt dann länger. Normaler Nachwuchs." + "&#128536";
      break;  
  }





  var jahr = "2020";
  var info = "Herrscher und Gebieter. <br>";
  info += "Wir schreiben das Jahr" + jahr + "<br>";
  info += siedler + " stinkende Siedler leben in euerer sumpfigen Moorlandschaft.<br>";
  info += "Ihr seid im Besitz von: <br>";
  info += nahrung + " Nahrung<br>";
  info += holz + " Holz<br>";
  info += stein + " Stein<br>";
  info += stahl + " Stahl<br>";
  info += waffen + " Waffen<br>";
  info += "Euer Schlachtenbonus beträgt: " + schlachtBonus;

  document.getElementById("monitor").innerHTML = info;
  return;

}

function pruefeEnde() {
  var abbruchGrund = "<br>";
  if (siedler < 1) {
    ende = true;
    abbruchGrund += "Ihr habt verloren.<br><br>Ihr habt zu wenige Krieger. ";
  }
  if (waffen < 1) {
    ende = true;
    abbruchGrund += "Ihr habt verloren.<br><br>Ihr habt keine Waffen mehr. ";
  }
  if (ressourcen < 1) {
    ende = true;
    abbruchGrund += "Ihr habt verloren.<br><br>Ihr habt keine Ressourcen mehr. ";
  }
  if (jahr > 20 && ende == false) {
    ende = true;
    abbruchGrund = "Ihr habt gewonnen.<br><br>Nach einem 20 jährigen Krieg, welcher euch zahlreiche Moorleichen verschafft hat, ist nun endlich der Sieg gekommen. <br>Ihr sollt auf ewig in die Geschichtsbücher eingehen.";
  }
  if (ende) {
    abbruchGrund = "<br><br> Der Krieg ist vorbei. " + abbruchGrund;
    document.getElementById("monitor").innerHTML = document.getElementById("monitor").innerHTML + abbruchGrund;
  }
}

*/