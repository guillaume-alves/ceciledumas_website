document.getElementById('btn1').addEventListener('click', function(){displayFunction(event.target.id)})
document.getElementById('btn2').addEventListener('click', function(){displayFunction(event.target.id)})
document.getElementById('btn3').addEventListener('click', function(){displayFunction(event.target.id)})

function displayFunction(id) {
    var x = document.getElementsByClassName(id);
    for(var i = 0, length = x.length; i < length; i++) {
        if (x[i].style.display === 'none') {
        x[i].style.display = 'block';
        } else {x[i].style.display = 'none'} 
    }
}