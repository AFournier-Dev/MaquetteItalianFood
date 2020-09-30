var mymap = L.map('mapid', {
    scrollWheelZoom: false,
    zoomControl: false
}).setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWZvdXJuaWVyLWRldiIsImEiOiJja2ZwMnhsNDMwaGxkMnFsaGRvaTYxNHcxIn0.DVj-JmaNuORh4lhWwiE77Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);