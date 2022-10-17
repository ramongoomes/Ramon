const menuEl = document.getElementById('menu');
const menuMobileEl = document.getElementById("mobile");



menuEl.addEventListener('click' , handleMenu);

function handleMenu(){
    const menuMobileClassList = Array.from(menuMobileEl.classList);
    const isActive = menuMobileClassList.find(el => el === 'active');

    if(isActive){
        menuMobileEl.classList.remove('active');
        return;
    }

    menuMobileEl.classList.add('active');
}