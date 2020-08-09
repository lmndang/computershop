/* 
--------------------------------------------------------
Student Name:       Le Minh Nhat Dang
Student Number:     138205190
Seneca Email:       lmndang@myseneca.ca
Assignment:         Finall Assessment
File Name:          contact.js
Course  :           WEB222NBB
Date Completed:     08/08/2020 (DD/MM/YYYY)
-------------------------------------------------------- 
*/

let radioForm = document.querySelector('#form-radio');
let radioOther = document.querySelector('#other-type');
let otherForm = document.querySelector('#other');
let otherInput = document.createElement('input');
let otherLabel = document.createElement('label');

otherLabel.classList.add('col-4');
otherLabel.setAttribute('for', 'other-name');
otherLabel.innerText = '* Other problem:';

otherInput.classList.add('col-8');
otherInput.setAttribute('type', 'text');
otherInput.setAttribute('tabindex', '7');
otherInput.setAttribute('name', 'other-problem');
otherInput.setAttribute('required', '');
otherInput.id = 'other-name';

radioForm.addEventListener('change', function() {
  if (radioOther.checked === true) {
    otherForm.classList.add('row');
    otherForm.appendChild(otherLabel);
    otherForm.appendChild(otherInput);
  } else {
    otherForm.classList.remove('row');
    otherForm.innerHTML = '';
  }
});
