/**
 * localhost check
 * @returns true is webpage running on localhost
 */
function isRunningOnLocalhost() {
  return (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  );
}

if (isRunningOnLocalhost()) {
  console.log('web page running in localhost');
}

// from https://codepen.io/jlengstorf/pen/rNMpJNy
function handleFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const formJSON = Object.fromEntries(data.entries());

  // for multi-selects, we need special handling
  //formJSON.snacks = data.getAll('snacks');

  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('.question-form');
form.addEventListener('submit', handleFormSubmit);
