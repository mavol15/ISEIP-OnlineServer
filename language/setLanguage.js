
var mainIframe = document.getElementById('indexIframe');
var liveStorageVar = 0;

mainIframe.addEventListener("load", setLanguage);

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
    liveLanguage();   //will be called on every iFrame load
    if(document.getElementById('indexIframe').contentWindow.document.getElementsByTagName("body")[0].id == "learningBody"){
    document.getElementById('indexIframe').contentWindow.scanFolder();
  }
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
  }else{setTimeout('liveLanguage()',100);}
}
