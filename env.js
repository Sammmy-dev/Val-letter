let envelope = document.querySelector(".adaptcont");

let content = document.querySelector(".letter-content");

let cover = document.querySelector(".closed");





envelope.addEventListener(`click`, ()=>{

    content.style.animationPlayState=`running`;

    envelope.style.animationPlayState=`paused`;

    cover.style.opacity=`0`;

    setTimeout(function() {

        cover.style.backgroundColor=`pink`;

        cover.style.opacity=`1`;

    }, 2300);

})



