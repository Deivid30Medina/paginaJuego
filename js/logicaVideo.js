let reproduciendo = true;
window.addEventListener('load', function() {
    if (document.readyState === 'complete') {
        let video = this.document.getElementById("idVideo");
        video.addEventListener('click', pausarVideo(video));
    }
});

function pausarVideo(video){
    if(reproduciendo){
        console.log("click");
    }else{

    }
}