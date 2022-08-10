const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream(params) {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play();
        }

    } catch (error) {
        
    }
}
button.addEventListener("click",async () => {
   button.disabled = true;

   await videoElement.requestPictureInPicture();
});

selectMediaStream();