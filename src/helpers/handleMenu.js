// Toggles Menu
let isActive = false

export default function handleMenu(array) {
	const credits = document.querySelector('#credits')
	const menu = document.querySelector('#mobile-menu')
	const icon = document.querySelector('.fas')
	let rollBtn = document.querySelector('#roll-btn')

	// If roll button is clicked, hide menu
	rollBtn.addEventListener('click', hideMenu)

	// If menu is hidden, show - Else hide menu
	if(isActive === false) {
		showMenu()
	} else {
		hideMenu()
	}

	// Show Menu
	function showMenu() {
		credits.style.top = 0 + 'vh'
		icon.classList.remove('fa-bars')
		icon.classList.add('fa-times')
		isActive = true
	}
	// Hide Menu
	function hideMenu() {
		credits.style.top = -50 + 'vh'
		icon.classList.remove('fa-times')
		icon.classList.add('fa-bars')
		isActive = false
	}
}