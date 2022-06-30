function loadNavbar() {
    $( "#navbar" ).load( "navbar.html" );
}

function loadSidebar() {
    $("#sidebar").load("sidebar.html");
}

function displayHide(clickedList, arrowUpList, arrowDownList) {
    let list = document.getElementById(clickedList);
    let arrowDown = document.getElementById(arrowDownList);
    let arrowUp = document.getElementById(arrowUpList);
    if (list.style.display === "block") {
        list.style.display = "none";
        arrowDown.style.display = "inline";
        arrowUp.style.display = "none";
    } else {
        list.style.display = "block";
        arrowDown.style.display = "none";
        arrowUp.style.display = "inline";
    }
}

function PopupImage(img) {
	w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=510, height=210');	
	w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='"+img+"'>");
	w.document.write("</BODY></HTML>");
	w.document.close();
}
