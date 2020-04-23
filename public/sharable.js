const shareButton = document.querySelector('#sharebutton');

const title = window.document.title;
const url = window.document.location.href;

shareButton.addEventListener('click' , () => {
    if(navigator.share){
        navigator.share({
            title : `${title}`,
            url : `${url}`
        }).then( () => {
            console.log('Thanks for sharing!!!');
        })
        .catch(console.error);
    }
})