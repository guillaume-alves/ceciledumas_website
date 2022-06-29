function loadNavbar() {
    $( "#navbar" ).load( "navbar.html" );
}

function displayHide() {
    let list = document.getElementById("sidebar_films_list");
    let arrow_down = document.getElementById("arrow_down");
    let arrow_up = document.getElementById("arrow_up");
    if (list.style.display === "none") {
        list.style.display = "block";
        arrow_down.style.display = "none";
        arrow_up.style.display = "inline";

    } else {
        list.style.display = "none";
        arrow_down.style.display = "inline";
        arrow_up.style.display = "none";
    }
}


function PopupImage(img) {
	w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=510, height=210');	
	w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='"+img+"'>");
	w.document.write("</BODY></HTML>");
	w.document.close();
}
