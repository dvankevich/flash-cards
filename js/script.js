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
