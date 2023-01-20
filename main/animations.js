function expandList() {
    var list = document.querySelector('.list');
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("email").innerText="ondrasihonda@gmail.com";    
});