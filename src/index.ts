import { join } from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Change me to reload'], ' ');

  return element;
}

console.log('test11');

let nums: number[] = [];

nums.push(2);

document.body.appendChild(component());
