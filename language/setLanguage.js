
var mainIframe = document.getElementById('indexIframe');
var liveStorageVar = 0;

mainIframe.addEventListener("load", setLanguage);

function reloadPage(){
  document.getElementById('indexIframe').contentWindow.location.reload(true);
}

function setLanguage(){
    var lang = document.getElementById("lang-switch").value;
    switch (lang) {
      case 'en':
        english();
        break;
      case 'dk':
        dansk();
        break;
      default:
        english();
    }
    console.log('setLanguage');
    liveLanguage();   //will be called on every iFrame load
}

function liveLanguage(a){
  var lang = document.getElementById("lang-switch").value;
  if(typeof mainIframe.contentWindow.document.getElementsByTagName("body")[0] != "undefined"){ //Checks if iframe content is loaded (to prevent errors that cause breaks when comparing iframe elements)
      switch (lang) {
        case 'en':
          liveEnglish(a);
          break;
        case 'dk':
          liveDansk(a);
          break;
        default:
          liveEnglish(a);
      }
  }//else{setTimeout('liveLanguage()',100);}
}
