console.log("WELCOME TO SPOTIFY");

//initialize the variable
let songIndex=0;
let audioElement=new Audio('./songs/Toxic.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[
    {songName:"Excuses",filePath:"./song/Excuses_1.mp3",coverPath:"./cover/cover.jpg"},
    {songName:"Toxic",filePath:"./song/Toxic.mp3",coverPath:"./cover/cover1.jpg"},
    {songName:"Arrogant",filePath:"./song/Arrogant.mp3",coverPath:"./cover/cover2.jpg"},
    {songName:"Desires",filePath:"./song/Desires.mp3",coverPath:"./cover/cover3.jpg"},
    {songName:"Feels",filePath:"./song/Feels.mp3",coverPath:"./cover/cover4.jpg"},
    {songName:"Goat",filePath:"./song/Goat.mp3",coverPath:"./cover/cover5.jpg"},
    {songName:"Insane",filePath:"./song/Insane.mp3",coverPath:"./cover/cover6.jpg"},
    {songName:"Ma Belle",filePath:"./song/Ma Belle.mp3",coverPath:"./cover/cover7.jpg"},
    {songName:"Sadda Pyar",filePath:"./song/Saada Pyar.mp3",coverPath:"./cover/cover8.jpg"},
    {songName:"Droptop",filePath:"./song/Droptop.mp3",coverPath:"./cover/cover9.jpg"},
]

/*songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})*/
 


//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

    }

})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

/*const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})*/