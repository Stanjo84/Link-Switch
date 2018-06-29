function btnFunc() {  
  var link = document.querySelector("a");
  if (link.textContent === "Google"){
  link.setAttribute("href", "https://www.yahoo.com");
  link.textContent = "Yahoo";
  link.classList.add("yahoo");

} else { 
  link.setAttribute("href", "https://www.google.com");
  link.textContent = "Google";
  link.classList.remove("yahoo");

}
}