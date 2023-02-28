function googleSearch() {

    var text=document.getElementById("search").value;
    
    var cleanQuery = text.replace(" ","+",text);
    
    var url='http://www.google.com/search?q='+cleanQuery;
    
    window.location.href=url;

}

const script = document.createElement("script");

script.src = "https://kit.fontawesome.com/1ee8f271b9.js";

document.body.appendChild(script);