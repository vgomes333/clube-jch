// PROGRESSBAR NIVEIS
const progressbar = document.querySelector('.progress');
range.addEventListener('input', function(){
	const value = range.value;
    progressbar.style.setProperty('--progress', value)
});

// COLLAPSE MENU
// Active Item Menu
var menuItem = document.querySelectorAll(".menu-item");

menuItem.addEventListener('click', function () {
    alert("CLIQUEI!");
})