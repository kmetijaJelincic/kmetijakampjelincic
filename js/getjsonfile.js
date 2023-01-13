let url = String(window.location.href);
let check = url.includes('en');


function izpisgalerije (jezik, ) {
  let di = document.getElementById("div");

    obj.forEach(data => {
    var link = document.createElement("a");
    link.setAttribute("href", "assets/img/gallery_ivo/"+ data["naslovi"]);
    link.setAttribute("data-lightbox", "galerija-ivo");
    link.setAttribute("data-title", String(data[jezik]) + " " + String(data["mere_v_cm"]));

    var fig = document.createElement("figure");
    fig.setAttribute("class", "picture");
    fig.setAttribute("data-title", String(data[jezik]));
    fig.setAttribute("data-url", "assets/img/gallery_ivo/"+ data["naslovi"]);
    fig.setAttribute("class", "picture");
    
    link.append(fig);
    di.append(link);
    })
};


if (check === true){
    izpisgalerije("ang_naslov");

}
else{
    izpisgalerije("slo_naslov");

}


