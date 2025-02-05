const stateOfSite={};
stateOfSite.countClick=+0;

document.querySelector('#menuOpen').addEventListener('click',openMenuFunc);
function openMenuFunc(){

    // console.log('o_O');
    const menuSh=document.createElement('div');
    // menuSh.style.cssText=`top:0;height:0;`;
    menuSh.classList.add('openMenu');
    
    menuSh.setAttribute('id','menuSh');
    menuSh.innerHTML=`<h3><a href="#oK"> oK</a></h3><h3><a href="tel:+77004145901"> tel:+77004145901</a></h3><label>`;
    document.querySelector('body').prepend(menuSh);
    document.querySelector('body').style.overflow="hidden";
    setTimeout(()=>{
        document.querySelector('.openMenu').style.cssText=`
            font-size:20px;
            height:100vh;
            opacity:1; 
            transition:all ease-out 1s;
      `;
    },100);

    closeMenu();
};

function closeMenu(){
    document.querySelector('#menuSh').addEventListener('click',()=>{
        document.querySelector('.openMenu').style.cssText=`
        fotn-size:0;
        height:0;
        bottom:0;
        top:100vh;
        opacity:0;
        transition:all ease-out 1s;
        `;
    document.querySelector('body').style.overflow="auto";
    setTimeout(()=>{
            document.querySelector('#menuSh').remove();
        },1700);
        console.log('close');
    }
    );
}