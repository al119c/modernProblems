let input = document.querySelector('.input'),
  checkbox = document.querySelector('.case'),
  lgth = document.querySelector('.length'),
  substring = document.querySelector('.substring'),
  output = document.querySelector('.output');

let num = 20;

async function getData() {
  let response = await fetch('https://api.allorigins.win/raw?url=https://www.mrsoft.by/data.json');
  let responseObj = await response.json();
  let data = await responseObj.data;
  return data;
}

let x = getData();
x.then(value => {
 
  lgth.addEventListener('click', () => {
    output.innerHTML = '';
    
    let checked = [];
    
    if (input.value === '' ||  input.value === undefined ) {
      output.innerHTML = `<div class="text">wrong input data</div>`;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].length > input.value) {
          checked.push(value[i]);
        }
      }
    }
    
    checked.forEach(e => {
      output.innerHTML += `<div class="text">${e}</div>`;
    });
  });
  
  substring.addEventListener('click', () => {
    output.innerHTML = '';
    
    let result = [];

    if (input.value === '' ||  input.value === undefined ) {
      output.innerHTML = `<div class="text">wrong input data</div>`;
    } else  {

      if (checkbox.checked) {
        for (let i = 0; i < value.length; i++) {
          if (value[i].includes(input.value)) {
            result.push(value[i]);
          }
        }
      
      } else {
        for (let i = 0; i < value.length; i++) {
          if (value[i].toLowerCase().includes(input.value.toLowerCase())) {
          result.push(value[i]);
          }
        }
      }
    }
    result.forEach(e => {
      output.innerHTML += `<div class="text">${e}</div>`;
    });
  });
});