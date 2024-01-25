// Initializing the Variables
let songIndex =0;
let audioElement = new Audio('/Songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let audioBar= document.getElementById('audioBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName: "Faded", filePath: "Songs/song1.mp3", coverPath: "Songs/song1.jpg"},
    {songName: "Alone", filePath: "Songs/song2.mp3", coverPath: "Songs/song2.jpg"},
    {songName: "Darkside", filePath: "Songs/song3.mp3", coverPath: "Songs/song3.jpg"},
    {songName: "On My Way", filePath: "Songs/song4.mp3", coverPath: "Songs/song4.jpg"},
    {songName: "All Falls Down", filePath: "Songs/song5.mp3", coverPath: "Songs/song5.jpg"},
    {songName: "The Spectre", filePath: "Songs/song6.mp3", coverPath: "Songs/song6.jpg"},
]

songItems.forEach((element,i )=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Play/Pause Click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

// Listen to the Events
audioElement.addEventListener('timeupdate', ()=>{
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
        audioBar.value=progress;
    })

audioBar.addEventListener('change', ()=>{
    audioElement.currentTime = audioBar.value * audioElement.duration/100;
})  
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/song${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

