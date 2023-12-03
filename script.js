//I have just added the playing button only as a working function but I will work on it soon to make it fully functional
console.log("welcome to spotify")
let songindex = 0;
let audioElement= new Audio('Rahmatun Lil Alameen-(Mr-Jat.in).mp3')
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "rahmatun lil alamieen", filepath: "spotifyproj/Rahmatun Lil Alameen-(Mr-Jat.in).mp3"},
    {songName: "rahmatun lil alamieen", filepath: "spotifyproj/Rahmatun Lil Alameen-(Mr-Jat.in).mp3"},
    {songName: "rahmatun lil alamieen", filepath: "spotifyproj/Rahmatun Lil Alameen-(Mr-Jat.in).mp3"},
    {songName: "rahmatun lil alamieen", filepath: "spotifyproj/Rahmatun Lil Alameen-(Mr-Jat.in).mp3"},
    {songName: "rahmatun lil alamieen", filepath: "spotifyproj/Rahmatun Lil Alameen-(Mr-Jat.in).mp3"},
    {songName: "rahmatun lil alamieen", filepath: "spotifyproj/Rahmatun Lil Alameen-(Mr-Jat.in).mp3"},
    {songName: "rahmatun lil alamieen", filepath: "spotifyproj/Rahmatun Lil Alameen-(Mr-Jat.in).mp3"},
    {songName: "rahmatun lil alamieen", filepath: "spotifyproj/Rahmatun Lil Alameen-(Mr-Jat.in).mp3"},
    {songName: "rahmatun lil alamieen", filepath: "spotifyproj/Rahmatun Lil Alameen-(Mr-Jat.in).mp3"},
    {songName: "rahmatun lil alamieen", filepath: "spotifyproj/Rahmatun Lil Alameen-(Mr-Jat.in).mp3"}
]
// audioElement.play();
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause')
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play')
    }
})
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timrupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);  
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

