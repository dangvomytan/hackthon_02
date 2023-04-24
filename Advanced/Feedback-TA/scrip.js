

function localStorageGetItem(key)
    {
        const data = JSON.parse(localStorage.getItem(`${key}`))?? [];
        return data;
}
function localStorageSetItem(key,data)
{
    localStorage.setItem(`${key}`, JSON.stringify(data));
}

function handleClick(element, value)
{
     piont = value;
     element.classList.add("piontCardActive");
}
function renderFeedback()
{
     const feedbackData = localStorageGetItem("feedback");
     const elementRender = document.querySelector(".fbComment")
     let conmentRender ="";
     feedbackData.forEach((feedback,)=>
     {
          conmentRender += `
          <div class="fbComment">
          <div class="boxComment">
               <div class="boxIcon">
                    <i class='bx bx-edit' ></i>
                    <i class='bx bx-message-square-x' onclick="handleDelete(${feedback.piont})"></i>
               </div>
               <div class="piontCard">
                    <span>${feedback.piont}</span>
               </div>
               <div class="textComment">
                    <p>${feedback.comment}</p>
               </div>
               </div>
          </div>
          `
     })
     elementRender.innerHTML=conmentRender;
}
function handleDelete(value)
{
     const feedbackData = localStorageGetItem("feedback");
     feedbackData.forEach((feedback,index)=>
     {
          if(value==feedback.piont)
          {
               feedbackData.splice(index,1);
               localStorageSetItem("feedback",feedbackData)
          }
     })
     renderFeedback();
}
// =========================================
let piont=0;
const formElement = document.querySelector("#frFeedback");
renderFeedback();
formElement.addEventListener("submit",(e)=>
{
    e.preventDefault();
     console.log(piont);
    const feedbackData = localStorageGetItem("feedback");
    const tbxComment=document.querySelector("#tbx_comment");
    const feedback ={
     piont: piont,
     comment: tbxComment.value
    }
    feedbackData.push(feedback);
//     console.log("data",feedbackData);
//     console.log("hh",feedback);

    localStorageSetItem("feedback",feedbackData)
    renderFeedback();
});