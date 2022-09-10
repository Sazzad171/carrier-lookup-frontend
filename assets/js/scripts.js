// submenu toggle
document.getElementById('submenu').addEventListener('click', function (e) {
	e.preventDefault();
	var element1 = document.getElementById("submenu");
	element1.classList.toggle("active");

	var element2 = document.getElementById("submenuItems");
	element2.classList.toggle("active");
});

// toggle side bar on small screen
document.getElementById('mobileMenuIcon').addEventListener('click', function (e) {
	e.preventDefault();
	var sidebar = document.getElementById("leftSidebar");
	sidebar.classList.toggle("active");

	var bodyOverlay = document.getElementById("bodyOverlay");
	bodyOverlay.classList.toggle("active");
});

document.getElementById('bodyOverlay').addEventListener('click', function (e) {
	e.preventDefault();
	var hideSidebar = document.getElementById("leftSidebar");
	hideSidebar.classList.toggle("active");

	var hideBodyOverlay = document.getElementById("bodyOverlay");
	hideBodyOverlay.classList.toggle("active");
});

// js for tab show/hide
var tabLabels = document.querySelectorAll("#tabs li");
var tabPanes = document.getElementsByClassName("tab-contents");

function activateTab(e) {
	e.preventDefault();

	// Deactivate all tabs
	tabLabels.forEach(function (label) {
		label.classList.remove("active");
	});
	[].forEach.call(tabPanes, function (pane) {
		pane.classList.remove("active");
	});

	// Activate current tab
	e.target.parentNode.classList.add("active");
	var clickedTab = e.target.getAttribute("href");
	document.querySelector(clickedTab).classList.add("active");
}

// Apply event listeners
tabLabels.forEach(function (label) {
	label.addEventListener("click", activateTab);
});
