const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');
let opened = false;

dropdownButton.addEventListener('click', () => {
    if(opened == false){
        opened = true;
        dropdownContent.style.maxHeight = '100%'
        dropdownContent.style.border = 'solid 1px #ffffff'
    } else {
        opened = false;
        dropdownContent.style.maxHeight = '0px'
        dropdownContent.style.border = '0'
    }
})