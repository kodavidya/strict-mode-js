'use strict';

const log = (message) => {
  console.log(message);
  document.getElementById('log').innerHTML += `<p>${message}</p>`;
};

// 1) Prevents Undeclared Variables
try {
  myVar = 10;
} catch (e) {
  log('Error: ' + e.message);
}

// 2) Disallows Duplicate Parameters Names
function duplicateParam(a, b) {
  log("This function doesn't use strict mode, soduplicates are allowed.");
}

function strictDuplicateParam(a, a) {
  'use strict';
  return a;
}

try {
  strictDuplicateParam(1, 2);
} catch (e) {
  log('Error: ' + e.message);
}

// 3) Prevents Deleting Variables
let x = 42;
try {
  delete x;
} catch (e) {
  log('Error: ' + e.message);
}

// 4) Avoid Global 'this' context
function showThis() {
  return this;
}
log("Globale 'this' in strict mode: " + showThis());

// 5) Disallows Octal Numbers
try {
  let octal = 010;
} catch (e) {
  log('Error: ' + e.message);
}

// 6) Real-life example
function calculateArea(length, width) {
  'use strict';
  if (!length || !width) {
    throw new Error('Both length and width must be provided');
  }
  return length * width;
}

try {
  const area = calculateArea(10);
  log('Area: ' + area);
} catch (e) {
  log('Error: ' + e.message);
}
