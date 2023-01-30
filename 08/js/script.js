const togglePopUp = () => {
    const popUp = document.getElementById('burgerPopUp');
    const popUpBtn = document.getElementById('hamburger__btn');
    const overlayPopUp = document.getElementById('overlayPopUp');
    if (popUp.style.display === 'none') {
        popUp.style.display = 'block';
        overlayPopUp.style.display = 'block';
        popUpBtn.src = "img/hero/close.svg";
        setTimeout(() => {
            popUp.style.right = '0px';
            popUp.style.opacity = '1';
            popUp.style.transform = 'rotateZ(0)';
        }, 1);
    } else {
        setTimeout(() => {
            popUp.style.display='none';
        }, 300);
        overlayPopUp.style.display = 'none';
        popUpBtn.src = "img/hero/charm_menu-hamburger.svg"
        popUp.style.right = '-600px';
        popUp.style.opacity = '0';
        popUp.style.transform = 'rotateZ(-90deg)';
    }
}