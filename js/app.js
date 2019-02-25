document.addEventListener('DOMContentLoaded', () => {
const plantList = document.querySelector('#garden-list');
const form = document.querySelector('#plant_input_form');



const handleDeleteAllClick = function (event) {
  plantList.innerHTML = '';
}
const deleteAllButton = document.querySelector('#delete-all');
deleteAllButton.addEventListener('click', handleDeleteAllClick);


  form.addEventListener('submit', (event) => {

    event.preventDefault();

    const latinName = event.target.latin_name.value;
    const commonName = event.target.common_name.value;
    const sunSelect = event.target.sun_select.value;



    const newContainer = document.createElement('div');
    newContainer.classList.add('container');

    const newCommonName = document.createElement('p');
    newCommonName.textContent = commonName;
    newCommonName.classList.add('common');

    const newLatinName = document.createElement('p');
    newLatinName.textContent = latinName;
    newLatinName.classList.add('latin');

    const newSunSelect = document.createElement('p');
    newSunSelect.textContent = sunSelect;
    newSunSelect.classList.add('sun');




    plantList.appendChild(newContainer);

    const soilSelectList = document.plant_input_form.soilSelect
    const moistSelectList = document.plant_input_form.moistSelect

    const getOptionals = function(options){
      for (let i=0; i<options.length;i++){
        if (options[i].checked === true){
          const value = options[i].value; //assign a variable to the value
          const group = options[i].name; //assign a variable to the name/class
          const newEl = document.createElement('p'); //create a new p element
          newEl.textContent = value;
          newEl.classList.add(group);
          newContainer.appendChild(newEl);
        }
      }

    }


    newContainer.appendChild(newCommonName);
    newContainer.appendChild(newLatinName);
    newContainer.appendChild(newSunSelect);
    getOptionals(soilSelectList);
    getOptionals(moistSelectList);



  });




});
