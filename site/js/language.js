console.log(document.querySelectorAll('#eng').length);
console.log(document.querySelectorAll('#rus').length);
function changeLanguage(){
    if(document.querySelector('#language').checked==true){
        console.log('chiecek True');
        for(let i=0;i<=document.querySelectorAll('#eng').length-1;i++){
            document.querySelectorAll('#eng')[i].style.display="none";
            document.querySelectorAll('#rus')[i].style.display="";  
        }
    }else if(document.querySelector('#language').checked==false){
        console.log('chiecek False');

        for(let i=0;i<=document.querySelectorAll('#rus').length-1;i++){
            document.querySelectorAll('#eng')[i].style.display="";
            document.querySelectorAll('#rus')[i].style.display="none";  
        }
    }else{
        console.log('else')
    }
}
changeLanguage();
document.querySelector('#language').addEventListener('click',changeLanguage);



// if(i==13){
//     console.log('checked true');
// }else{
//     console.log('Checked false');
// //     document.querySelectorAll('#rus')[i].style.display="";
// // document.querySelectorAll('#eng')[i].style.display="none";
// }
