let envelope = document.querySelector(".adaptcont");
let content = document.querySelector(".letter-content");


envelope.addEventListener(`click`, ()=>{
    content.style.animationPlayState=`running`;
})

