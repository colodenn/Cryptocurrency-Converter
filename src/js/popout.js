


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('convert');
    // onClick's logic below:
    link.addEventListener('click', function() {
        document.getElementById("html").style.height = "500px";   
        document.getElementById("converted").style.display = "inline";   

    });
});