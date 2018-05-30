
var mainIframe = document.getElementById('indexIframe');

document.getElementById("lang-switch").innerHTML = '<option value="en" selected>English</option><option value="da">Dansk</option>';

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
      case 'da':
        dansk();
        break;
      default:
        english();
    }
    liveLanguage();   //will be called once on every iFrame load
}

function liveLanguage(a){
  var lang = document.getElementById("lang-switch").value;
  if(typeof mainIframe.contentWindow.document.getElementsByTagName("body")[0] != "undefined"){ //Checks if iframe content is loaded (to prevent errors that cause breaks when comparing iframe elements)
      switch (lang) {
        case 'en':
          liveEnglish(a);
          break;
        case 'da':
          liveDansk(a);
          break;
        default:
          liveEnglish(a);
      }
  }
}
