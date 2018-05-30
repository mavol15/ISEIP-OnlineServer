var langVar = 0;
var langID = '';
var bodyId = '';

function english(){
  langID = 'en';

  //index
  thisBody = document.getElementsByTagName("body")[0].id;

  if(thisBody == "indexBody"){
    document.getElementById("title").innerHTML = "2imprez";
    document.getElementById("home").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About";
    document.getElementById("setup").innerHTML = "Setup";
    document.getElementById("learning").innerHTML = "Learning";
    document.getElementById("data").innerHTML = "Data";
    document.getElementById("livedataco2").innerHTML = "CO\u2082 Level";
    document.getElementById("livedatatemp").innerHTML = "Room Temperature";
    document.getElementById("livedatahum").innerHTML = "Relative Humidity";

    //iframe
    iframeObj = document.getElementById('indexIframe').contentWindow;
    bodyId = iframeObj.document.getElementsByTagName("body")[0].id;
  }

  //About
  if(bodyId == "aboutBody"){
    iframeObj.scanAboutFolder(langID);
  }

  //setup
  if(bodyId == "setupBody"){
    iframeObj.document.getElementById("connectButton").innerHTML = "Set New IP Address";
    iframeObj.document.getElementById("checkButton").innerHTML = "Check Current IP Address";
    iframeObj.document.getElementById("inputDesc").innerHTML = "Input the IP address of your local Sensor Box";
  }

  //Learning
  if(bodyId == "learningBody"){
    iframeObj.scanFolder();
  }
  if(bodyId == "learningScenario"){
    ls = iframeObj.location.href;
    if(ls.substring(ls.indexOf('index_')+6,ls.length-5) != langID){
      iframeObj.location.href = ls.substring(0,ls.length-7)+langID+'.html';
    }
  }

  //Data
  if(bodyId == "dataBody"){
    iframeObj.document.getElementById("button1h").innerHTML = "1 hour";
    iframeObj.document.getElementById("button3h").innerHTML = "3 hours";
    iframeObj.document.getElementById("button6h").innerHTML = "6 hours";
    iframeObj.document.getElementById("button12h").innerHTML = "12 hours";
    iframeObj.document.getElementById("button24h").innerHTML = "24 hours";
  }
}

function liveEnglish(a){
  if(iframeObj.document.getElementsByTagName("body")[0].id == "homeBody"){
    switch (a) {
      case 1:
        iframeObj.document.getElementById("homeFront").innerHTML = "Air Quality: <b>Excellent</b>";
        langVar = 1;
        break;
      case 2:
        iframeObj.document.getElementById("homeFront").innerHTML = "Air Quality: <b>Good</b>";
        langVar = 2;
        break;
      case 3:
        iframeObj.document.getElementById("homeFront").innerHTML = "Air Quality: <b>Decent</b>";
        langVar = 3;
        break;
      case 4:
        iframeObj.document.getElementById("homeFront").innerHTML = "Air Quality: <b>Mediocre</b>";
        langVar = 4;
        break;
      case 5:
        iframeObj.document.getElementById("homeFront").innerHTML = "Air Quality: <b>Poor</b>";
        langVar = 5;
        break;
      case 6:
        iframeObj.document.getElementById("homeFront").innerHTML = "Air Quality: <b>Awful</b>";
        langVar = 6;
        break;
      case 7:
        iframeObj.document.getElementById("homeFront").innerHTML = "Air Quality: <b>Terrible</b>";
        langVar = 7;
        break;
      case 8:
        iframeObj.document.getElementById("homeFront").innerHTML = "Air Quality: <b>Dysfunctional</b>";
        langVar = 8;
        break;
      case 9:
        iframeObj.document.getElementById("homeFront").innerHTML = "Air Quality: <b>Abysmal</b>";
        langVar = 9;
        break;
      default:
        if(langVar != 0){
          liveEnglish(langVar);
        }else{iframeObj.document.getElementById("homeFront").innerHTML = "";}
    }}
    else if(iframeObj.document.getElementsByTagName("body")[0].id == "setupBody"){
      switch (a) {
        case 1:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "IP address is not allowed.";
          break;
        case 2:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "Invalid Address. Example Address: 10.125.38.2";
          break;
        case 3:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "Unexpected Address. Check that your values are numbers between 0-255. Example: 10.125.38.2";
          break;
        case 4:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "Current address is set to: "+localStorage.sensorBoxAddress;
          break;
        case 5:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "No IP address has been saved";
          break;
        default:
          iframeObj.document.getElementById("wrnMsg").innerHTML = "";
        }}
}
