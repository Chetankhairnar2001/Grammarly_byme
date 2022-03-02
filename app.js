const textarea = document.querySelector('#textarea')
const but = document.querySelector('button');
let total = document.querySelector('#total-char')
let remain = document.querySelector('#remain-char')

let char=0;

textarea.addEventListener('input', ()=>{
    char = textarea.value.length;
    total.innerText = char;
    remain.innerText = 150-char;
})

but.addEventListener('click',()=>{
    textarea.select();
    textarea.setSelectionRange(0,9999);
    navigator.clipboard.writeText(textarea.value);
});
