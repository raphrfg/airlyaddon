function saveOptions(e) {
  e.preventDefault();
  opt = {
	mode: document.querySelector("input[name=setmode]:checked").value,
    lat: document.querySelector("#lat").value,
	lon: document.querySelector("#lon").value
  }
  browser.storage.local.set({
	  mangeo: opt
	
  });
  console.log( document.querySelector("input[name=setmode]:checked").value)
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#" + result.mangeo.mode).checked = true;
	document.querySelector("#lat").value = result.mangeo.lat;
	document.querySelector("#lon").value = result.mangeo.lon;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("mangeo");
  getting.then(setCurrentChoice, onError);
  
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);