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
function language(){
    return new Promise((resolve)=>{
        function lang(){
            let lan=document.createElement('script');
            lan.src="site/js/language.js";
            document.querySelector('main').append(lan);
        }
        resolve(lang());
    })
}
function languageSmall(){
    return new Promise((resolve)=>{
        function langs(){
            let lans=document.createElement('script');
            lans.src="site/js/languageSmall.js";
            document.querySelector('main').append(lans);
        }
        resolve(langs());
    })
}
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
    if(window.innerWidth<700){ await languageSmall()};
    await menuOk();
    await language();
    await firstAllOk();
    await second();
//  await 
}
