//----- Bài tâp 1---------//
function EX01()
{
    const valueInput = document.querySelector("#tbx_EX01");
    const arrayString =  document.querySelector("#lbl_EX011");
   const printString =  document.querySelector("#lbl__EX012");
     let str1 = valueInput.value;
     let str2 = " ";
     for(let i = str1.length; i>=0; i--)
     {
          str2+= str1[i];
     }
     arrayString.innerHTML= str1;
     printString.innerHTML = str2;
} 


//----- Bài tâp 2---------//
function EX02()
{
     const valueInput = document.querySelector("#tbx_EX02").value;
     let convertToArray = valueInput.toLowerCase().split(" ");
     let result = convertToArray.map(function (val) 
     {
     return val.replace(
         val.charAt(0),
         val.charAt(0).toUpperCase()
     );
     });
     const valueresult = document.querySelector("#lbl_EX02");
     valueresult.innerHTML = result.join(" ");
}

function Ex03()
{
     const valueInput = document.querySelector("#tbx_EX03").value;
     let convertToArray = valueInput.split(" ");
     let resultArr = convertToArray.filter(
       (item, index) => convertToArray.indexOf(item) == index
     );
     const valueresult = document.querySelector("#lbl_EX03");
     valueresult.innerHTML = resultArr;
}