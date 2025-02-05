const langSmall=document.createElement('label');
langSmall.innerHTML=`
                  <legend>Language</legend>
                  <input type="checkbox" id="languageSmall" checked="">
                  <span id=langU>Eng</span>
                `;
document.querySelector('.logo').insertAdjacentElement('afterend',langSmall);
console.log(document.querySelectorAll('#eng').length);
console.log(document.querySelectorAll('#rus').length);
function changeLanguage(){
    console.log('oK');
    if(document.querySelector('#languageSmall').checked==true){
        console.log('chiecek True');
        for(let i=0;i<=document.querySelectorAll('#eng').length-1;i++){
            document.querySelectorAll('#eng')[i].style.display="none";
            document.querySelectorAll('#rus')[i].style.display="";  
        }
        langU.innerHTML='Change on Eng';
    }else if(document.querySelector('#languageSmall').checked==false){
        console.log('chiecek False');

        for(let i=0;i<=document.querySelectorAll('#rus').length-1;i++){
            document.querySelectorAll('#eng')[i].style.display="";
            document.querySelectorAll('#rus')[i].style.display="none";  
        }
        langU.innerHTML='Change on Rus';
    }else{
        console.log('else')
    }
}
changeLanguage();
document.querySelector('#languageSmall').addEventListener('click',changeLanguage);



// if(i==13){
//     console.log('checked true');
// }else{
//     console.log('Checked false');
// //     document.querySelectorAll('#rus')[i].style.display="";
// // document.querySelectorAll('#eng')[i].style.display="none";
// }
