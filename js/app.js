document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#plant-input-form');
form.addEventListener('submit', (event) => {

  event.preventDefault();

  const latinName = event.target.ltnnameinput.value;
  const commonName = event.target.cmnnameinput.value;
  const sunSelect = event.target.sunselect.value;
  const soilSandy = event.target.soilsandy.value;
  const soilLoam = event.target.soilloam.value;
  const soilChalk = event.target.soilchalk.value;
  const soilClay = event.target.soilclay.value;
  const moistPoor = event.target.moistpoor.value;
  const moistWell = event.target.moistwell.value;
  const moistMoist = event.target.moistmoist.value;

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

  const newSoilSandy = document.createElement('p');
  newSoilSandy.textContent = soilSandy;
  newSoilSandy.classList.add('soil');

  const newSoilLoam = document.createElement('p');
  newSoilLoam.textContent = soilLoam;
  newSoilLoam.classList.add('soil');

  const newSoilChalk = document.createElement('p');
  newSoilChalk.textContent = soilChalk;
  newSoilChalk.classList.add('soil');

  const newSoilClay = document.createElement('p');
  newSoilClay.textContent = soilClay;
  newSoilClay.classList.add('soil');

  const newMoistPoor = document.createElement('p');
  newMoistPoor.textContent = moistPoor;
  newMoistPoor.classList.add('moist');

  const newMoistWell = document.createElement('p');
  newMoistWell.textContent = moistWell;
  newMoistWell.classList.add('moist');

  const newMoistMoist = document.createElement('p');
  newMoistMoist.textContent = moistMoist;
  newMoistMoist.classList.add('moist');

  const plantList = document.querySelector('#garden-list');
  plantList.appendChild(newContainer);

  newContainer.appendChild(newCommonName);
  newContainer.appendChild(newLatinName);
  newContainer.appendChild(newSunSelect);
  newContainer.appendChild(newSoilSandy);
  newContainer.appendChild(newSoilLoam);
  newContainer.appendChild(newSoilChalk);
  newContainer.appendChild(newSoilClay);
  newContainer.appendChild(newMoistPoor);
  newContainer.appendChild(newMoistWell);
  newContainer.appendChild(newMoistMoist);

});
});
