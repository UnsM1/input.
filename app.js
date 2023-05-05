const txtDay = document.querySelector('#txtDay');
const BTN = document.querySelector('#btnOk');
const tip= document.querySelector('#tip');



btnOk.addEventListener('click', ()=>{
    switch(txtDay.value){
        case 'pon': tip.innerHTML='Ponedjeljak';
        break;
        case 'uto': tip.innerHTML='Utorak';
        break;
        case 'sri': tip.innerHTML='Srijeda';
        break;
        case 'cet': tip.innerHTML='Četvrtak';
        break;
        case 'pet': tip.innerHTML='Petak';
        break;
        case 'sub': tip.innerHTML='Subota';
        break;
        case 'ned': tip.innerHTML='Nedjelja';
        break;
    }
    
})










/*
btnOk.addEventListener('click', ()=>{
    if(txtDay.value==='pon')
        tip.innerHTML='Ponedjeljak'

    if(txtDay.value==='uto')
        tip.innerHTML='Utorak'
    if(txtDay.value==='sri')
        tip.innerHTML='Srijeda'
    if(txtDay.value==='cet')
        tip.innerHTML='Četvrtak'
    if(txtDay.value==='pet')
        tip.innerHTML='Petak'
    if(txtDay.value==='sup')
        tip.innerHTML='Subota'
    if(txtDay.value==='ned')
        tip.innerHTML='Nedjelja'
})*/