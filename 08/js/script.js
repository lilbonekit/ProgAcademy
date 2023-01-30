const togglePopUp = () => {
    const popUp = document.getElementById('burgerPopUp');
    if (popUp.style.display === 'none') {
        popUp.style.display = 'block';

        setTimeout(() => {
            popUp.style.right = '0px';
            popUp.style.opacity = '1';
            popUp.style.transform = 'rotateZ(0)';
        }, 1);
        
        
    } else {
        setTimeout(() => {
            popUp.style.display='none';
        }, 300);
        
        popUp.style.right = '-600px';
        popUp.style.opacity = '0';
        popUp.style.transform = 'rotateZ(-90deg)';
    }
}