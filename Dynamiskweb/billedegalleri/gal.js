// Variabler der peger på HTML elementerne
const overlay = document.querySelector(".modal-outer");
const btn = document.querySelector("#close");
const imgView = document.querySelector("#modal-img");

// Klik-event på lukke-knappen
btn.onclick = function () {
  // Vi skifter klasse på overlay/model, så den bliver usynlig
  overlay.classList.add("hidden");
};

// En funktion, som bliver kaldt på link-elementerne
function imgClick(element) {
  // Src-attributten på img-tag skal svare til href-attribut fra linket (link = elemt)
  imgView.setAttribute("src", element.href);
  // Vi skifter klasse på overlay/modal, så den bliver synlig
  overlay.classList.remove("hidden");
}
