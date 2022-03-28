
// Shared Scripts
pageMarker();

if (window.location.pathname == '/index.html' || window.location.pathname == '/'){
  fetchProjects();
  activeLink()
  filterInit();
  projectFetchButtonInit();
}

if (window.location.pathname == '/sobre.html'){
  includeFooter();
  showAboutMe();
  flipCard();
  initPdfButton();
  slideInit();
}

if (window.location.pathname == '/contatos.html'){
  // includeHead();
  includeFooter();
}