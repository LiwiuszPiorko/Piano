const keys = document.querySelectorAll('.key');

keys.forEach(key=>{
    key.addEventListener('click', () => playNote(key))
})
document.addEventListener('keydown',e=>{

})

function playNote(key){
    const noteAudio=document.getElementById(key.dataset.note)
    noteAudio.currentTime=0
    noteAudio.play()
    key.classList.add('active','shadow')
    noteAudio.addEventListener('ended', ()=>{
        key.classList.remove('active','shadow')
    })
}