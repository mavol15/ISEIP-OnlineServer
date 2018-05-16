var langVar = 0;

function dansk(){
var bodyId = "";  //Defines bodyId variable to avoid compile errors

  //index
  thisBody = document.getElementsByTagName("body")[0].id; //Gets the body id of the calling page

  if(thisBody == "indexBody"){                //Checks if this page is the index page
    document.getElementById("title").innerHTML = "2imprez";             //here and down - Replaces the content of all Ids
    document.getElementById("home").innerHTML = "Hjem";
    document.getElementById("about").innerHTML = " Om ";
    document.getElementById("setup").innerHTML = "Opsætning";
    document.getElementById("dmp").innerHTML = "Læring";
    document.getElementById("data").innerHTML = "Data";
    document.getElementById("livedataco2").innerHTML = "CO\u2082 Niveau";
    document.getElementById("livedatatemp").innerHTML = "Rum Temperatur";
    document.getElementById("livedatahum").innerHTML = "Relativ Luftfugtighed";

    //iframe
    iframeObj = document.getElementById('indexIframe').contentWindow;     // creates an object of the page Iframe
    bodyId = iframeObj.document.getElementsByTagName("body")[0].id;       // creates a string of the Iframe object ID
  }

  //About
  if(bodyId == "aboutBody"){
    iframeObj.scanAboutFolder();
  }

    //setup
  if(bodyId == "setupBody"){
    iframeObj.document.getElementById("connectButton").innerHTML = "Sæt Ny IP Addresse";
    iframeObj.document.getElementById("checkButton").innerHTML = "Se Nuværende IP Addresse";
    iframeObj.document.getElementById("inputDesc").innerHTML = "Skriv ny IP addresse på din lokale Sensor Boks";
  }


  //Data
  if(bodyId == "dataBody"){                                               // checks if the iframe page is Data
    iframeObj.document.getElementById("button1h").innerHTML = "1 time";
    iframeObj.document.getElementById("button3h").innerHTML = "3 timer";
    iframeObj.document.getElementById("button6h").innerHTML = "6 timer";
    iframeObj.document.getElementById("button12h").innerHTML = "12 timer";
    iframeObj.document.getElementById("button24h").innerHTML = "24 timer";
  }
}

function liveDansk(a){
  console.log("liveDansk");
  if(iframeObj.document.getElementsByTagName("body")[0].id == "homeBody"){
    switch (a) {
      case 1:
        iframeObj.document.getElementById("homeFront").innerHTML = "Luftkvalitet: Fantastisk";
        langVar = 1;
        break;
      case 2:
        iframeObj.document.getElementById("homeFront").innerHTML = "Luftkvalitet: God";
        langVar = 2;
        break;
      case 3:
        iframeObj.document.getElementById("homeFront").innerHTML = "Luftkvalitet: Ok";
        langVar = 3;
        break;
      case 4:
        iframeObj.document.getElementById("homeFront").innerHTML = "Luftkvalitet: En smule dårlig";
        langVar = 4;
        break;
      case 5:
        iframeObj.document.getElementById("homeFront").innerHTML = "Luftkvalitet: Dårlig";
        langVar = 5;
        break;
      case 6:
        iframeObj.document.getElementById("homeFront").innerHTML = "Luftkvalitet: Rigtig dårlig";
        langVar = 6;
        break;
      case 7:
        iframeObj.document.getElementById("homeFront").innerHTML = "Luftkvalitet: Super dårlig";
        langVar = 7;
        break;
      case 8:
        iframeObj.document.getElementById("homeFront").innerHTML = "Luftkvalitet: Stinker";
        langVar = 8;
        break;
      case 9:
        iframeObj.document.getElementById("homeFront").innerHTML = "Luftkvalitet: Forfærdelig";
        langVar = 9;
        break;
      default:
        if(langVar != 0){
          liveDansk(langVar);
        }else{iframeObj.document.getElementById("homeFront").innerHTML = "";}
    }}else if(iframeObj.document.getElementsByTagName("body")[0].id == "setupBody"){
      switch (a) {
        case 1:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "Den indtastede IP addresse er ikke tilladt.";
          break;
        case 2:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "Der er noget galt. Den indtastede IP Addresse bør eksempelvis se sådan ud: 10.125.38.2";
          break;
        case 3:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "Uforventet Addresse. Sørg for at IP adressen kun indeholder tal mellem 0-255. F.eks: 10.125.38.2";
          break;
        case 4:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "Den nuværende IP adresse er: "+localStorage.sensorBoxAddress;
          break;
        default:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "";
        }
    }

}
