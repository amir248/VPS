function firstAllOk(){
    return new Promise((resolve)=>{
        function firstFunction(){
            const firstBlock=document.createElement('script');
            firstBlock.src="site/js/first.js";
            document.querySelector('main').append(firstBlock);
        }
        setTimeout(()=>{

            resolve(firstFunction());
        },999);
    });
};//firstAllOk
function second(){
    return new Promise((resolve)=>{
        function okAllGreat(){
            console.log('great');
        }
        setTimeout(()=>{
            resolve(okAllGreat());
        },0);
    });
};//second
function menuOk(){
    return new Promise((resolve)=>{
       function openMenuAndClose(){
        const menu=document.createElement('script');
        menu.src="site/js/menuOk.js";
        document.querySelector('main').append(menu);
    }
        resolve(openMenuAndClose());
    });
}

window.addEventListener('DOMContentLoaded',mainFunction);
async function mainFunction(){
    await firstAllOk();
    await second();
    await menuOk();
//  await 
}
console.log('second console.llog!!!');
