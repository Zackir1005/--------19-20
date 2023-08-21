// // var element = 1;
// // console.log(window);

// const openBtn=document.getElementById('btn-openWindow')

// openBtn.addEventListener('click', ()=>{
//     let win = window.open('addition.html', 'add', 'popup');
//     const winWidth=500;
//     const winHeight=400;
//     win.resizeTo(winWidth,winHeight);
//     win.moveTo(
//         (screen.availWidth-winWidth)/2,
//         (screen.availHeight-winHeight)/2
//     );
//     // openBtn.disabled=true // otkluchenie rabotosposobnosti button
// })

const modalWindow=document.getElementById('modal-window');
const blocks = document.getElementsByClassName('block');
const blckWdthStr=window.getComputedStyle(blocks[0]).width;
const blockWidth=Number(
    blckWdthStr.substring(
        0,
        blckWdthStr.indexOf('px')
    )
);

var currentBlock=undefined;

console.log(blockWidth);

for (let block of blocks) {
    // console.log(block);
    block.style.top=Math.round(Math.random() * (window.innerHeight*2/3))+'px';
    block.style.left=Math.round(Math.random() * (window.innerWidth-blockWidth))+'px';

    block.addEventListener('mousedown', e=>{
        currentBlock=e.target;
    });
}

window.addEventListener('mouseup',()=>{
    currentBlock=undefined
})

modalWindow.addEventListener('mousemove',e=>{
    if (currentBlock!==undefined) {
        currentBlock.style.top=e.clientY+'px';
        currentBlock.style.left=e.clientX+'px';
    }
})

document.getElementById('btn-openWindow').addEventListener('click',()=>{
    modalWindow.style.display='block';
})

closeModal.addEventListener('click',()=>{
    modalWindow.style.display='none';
})