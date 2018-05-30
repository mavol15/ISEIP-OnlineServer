var xmlHttp = new XMLHttpRequest();       //createXmlHttpRequestObject();
var monitor_state = 0;
var rec = 0;

function resetSensorState(){
  monitor_state = 0;
  getSensorData();
}

function recursiveSensorCall(){
  rec = 0;
  getSensorData();
  setTimeout('recursiveSensorCall()', 5000);
}

function getSensorData(){
  if(localStorage.sensorBoxAddress!=undefined){
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
      xmlHttp.open("GET", 'http://'+localStorage.sensorBoxAddress+'/livedata.php?getData=all', true);
      xmlHttp.onreadystatechange = handleServerResponse;
      xmlHttp.send(null);
    }else if(rec<3){
      setTimeout('getSensorData()', 500);
      rec++;
    }}else if(rec<3){
      setTimeout('getSensorData()', 500);
      rec++;}}

function handleServerResponse(){
if(xmlHttp.readyState==4){
    if(xmlHttp.status==200){
        xmlResponse = xmlHttp.responseXML;
        xmlDocumentElement = xmlResponse.documentElement;
        message = xmlDocumentElement.firstChild.data;
        for (var i = 0; i < 3; i++) {
      		splitRead = message.split(",");
      		co2 = splitRead[0];
      		tempC = splitRead[1];
          hum = splitRead[2];
      	}
        if(typeof document.getElementById('indexIframe').contentWindow.document.getElementsByTagName("body")[0] != "undefined"){ //Checks if iframe content is loaded (to prevent errors that cause breaks when comparing iframe elements)
        if(document.getElementById('indexIframe').contentWindow.document.getElementsByTagName("body")[0].id == "homeBody"){ //Checks iframe body id against Home body id
          if(co2<500 && monitor_state != 1){
            document.getElementById('indexIframe').contentWindow.document.getElementById("Robert").src="./img/mascot/1.svg";
            monitor_state=1;
            liveLanguage(monitor_state);}
          else if(co2>=500 && co2<700 && monitor_state != 2){
            document.getElementById('indexIframe').contentWindow.document.getElementById("Robert").src="./img/mascot/2.svg"; monitor_state=2;liveLanguage(monitor_state);}
          else if(co2>=700 && co2<900 && monitor_state != 3){
            document.getElementById('indexIframe').contentWindow.document.getElementById("Robert").src="./img/mascot/3.svg"; monitor_state=3;liveLanguage(monitor_state);}
          else if(co2>=900 && co2<1100 && monitor_state != 4){
            document.getElementById('indexIframe').contentWindow.document.getElementById("Robert").src="./img/mascot/4.svg"; monitor_state=4;liveLanguage(monitor_state);}
          else if(co2>=1100 && co2<1300 && monitor_state != 5){
            document.getElementById('indexIframe').contentWindow.document.getElementById("Robert").src="./img/mascot/5.svg"; monitor_state=5;liveLanguage(monitor_state);}
          else if(co2>=1300 && co2<1700 && monitor_state != 6){
            document.getElementById('indexIframe').contentWindow.document.getElementById("Robert").src="./img/mascot/6.svg"; monitor_state=6;liveLanguage(monitor_state);}
          else if(co2>=1700 && co2<2500 && monitor_state != 7){
            document.getElementById('indexIframe').contentWindow.document.getElementById("Robert").src="./img/mascot/7.svg"; monitor_state=7;liveLanguage(monitor_state);}
          else if(co2>=2500 && co2<5000 && monitor_state != 8){
            document.getElementById('indexIframe').contentWindow.document.getElementById("Robert").src="./img/mascot/8.svg"; monitor_state=8;liveLanguage(monitor_state);}
          else if(co2>=5000 && monitor_state != 9){
            document.getElementById('indexIframe').contentWindow.document.getElementById("Robert").src="./img/blue.png"; monitor_state=9;liveLanguage(monitor_state);}
        }else{monitor_state = 0;}
      }
        document.getElementById("CO2_read").innerHTML = co2+" ppm";
        document.getElementById("tempC_read").innerHTML = tempC+" \xB0C";
        document.getElementById("hum_read").innerHTML = hum+" %";
    }
}

}
