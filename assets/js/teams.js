'use strict';
//const btnAdmin = document.querySelector('.admissions-dep');
const modalAdmin = document.querySelector('.admissions')
//const btnHr = document.querySelector('.hr-dep');
const modalHr = document.querySelector('.human-resources')
//const btnFin = document.querySelector('.finance-dep');
const modalFin = document.querySelector('.finances')
//const btnTech = document.querySelector('.tech-dep');
const modalTech = document.querySelector('.technology');

const downAd = document.querySelector('.down-ad');
const upAd = document.querySelector('.up-ad')

const downHr = document.querySelector('.down-hr');
const upHr = document.querySelector('.up-hr')

const downFin = document.querySelector('.down-fin');
const upFin = document.querySelector('.up-fin')

const downTech = document.querySelector('.down-tech');
const upTech = document.querySelector('.up-tech')

//function to add hidden class
const addHidden = function(paraVal){
    paraVal.classList.add('hidden');
}

//function to remove hidden class
const removeHidden = function(paraVal){
    paraVal.classList.remove('hidden');
}

downAd.addEventListener('click', function(){
    removeHidden(upAd);
    removeHidden(modalAdmin);
    addHidden(downAd);
})
upAd.addEventListener('click', function(){
    removeHidden(downAd);
    addHidden(upAd);
    addHidden(modalAdmin);
})

downHr.addEventListener('click', function(){
    removeHidden(upHr);
    removeHidden(modalHr);
    addHidden(downHr);
})
upHr.addEventListener('click', function(){
    removeHidden(downHr);
    addHidden(upHr);
    addHidden(modalHr);
})

downFin.addEventListener('click', function(){
    removeHidden(upFin);
    removeHidden(modalFin);
    addHidden(downFin);
})
upFin.addEventListener('click', function(){
    removeHidden(downFin);
    addHidden(upFin);
    addHidden(modalFin);
})

downTech.addEventListener('click', function(){
    removeHidden(upTech);
    removeHidden(modalTech);
    addHidden(downTech);
})
upTech.addEventListener('click', function(){
    removeHidden(downTech);
    addHidden(upTech);
    addHidden(modalTech);
})
/*btnAdmin.addEventListener('click', function(){
  modalAdmin.classList.toggle('hidden');
});

btnHr.addEventListener('click', function(){
    modalHr.classList.toggle('hidden');
});

btnFin.addEventListener('click', function(){
    modalFin.classList.toggle('hidden');
});

btnTech.addEventListener('click', function(){
    modalTech.classList.toggle('hidden');
});*/
