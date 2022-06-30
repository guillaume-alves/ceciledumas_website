function loadNavbarAndSidebar() {
    $( "#navbar" ).load( "navbar.html" );
    $("#sidebar").load("sidebar.html");
}

function displayHide(clickedList, arrowUpList, arrowDownList) {
    let list = document.getElementById(clickedList);
    let arrowDown = document.getElementById(arrowDownList);
    let arrowUp = document.getElementById(arrowUpList);
    if (list.style.display === "none") {
        list.style.display = "block";
        arrowDown.style.display = "none";
        arrowUp.style.display = "inline";
    } else {
        list.style.display = "none";
        arrowDown.style.display = "inline";
        arrowUp.style.display = "none";
    }
}

function PopupImage(img) {
	w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=510, height=210');	
	w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='"+img+"'>");
	w.document.write("</BODY></HTML>");
	w.document.close();
}
