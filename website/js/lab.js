// ========== J01: CANVAS ==========
const context = document.querySelector('#visitor-chart').getContext('2d');
context.fillStyle = '#174f7e';
context.fillRect(30, 60, 50, 60);
context.fillRect(120, 0, 50, 120);
// ========== J02: GEOLOCATION ==========
document.querySelector('#locate').addEventListener('click', function () {
  const result = document.querySelector('#location-result');
  if (!navigator.geolocation) { result.textContent = 'Geolocation is unavailable.'; return; }
  result.textContent = 'Waiting for permission and location…';
  navigator.geolocation.getCurrentPosition(function (position) {
    result.textContent = position.coords.latitude.toFixed(3) + ', ' + position.coords.longitude.toFixed(3);
  }, function () { result.textContent = 'Location unavailable or permission denied. You can still explore the site.'; }, {timeout: 10000});
});
// ========== J03: WEB WORKER ==========
document.querySelector('#worker-start').addEventListener('click', function () {
  const result = document.querySelector('#worker-result');
  try {
    const worker = new Worker('js/route-worker.js');
    worker.onmessage = function (event) { result.textContent = 'Total sample distance: ' + event.data + ' km'; worker.terminate(); };
    worker.onerror = function () { result.textContent = 'Worker unavailable. Open the project through a local web server.'; worker.terminate(); };
    worker.postMessage([2, 3, 4]);
  } catch (error) { result.textContent = 'Open this lesson through a local web server.'; }
});
// ========== J04: SERVER-SENT EVENTS ==========
let stream;
const streamResult = document.querySelector('#sse-result');
document.querySelector('#sse-start').addEventListener('click', function () {
  if (stream) stream.close();
  stream = new EventSource('/events');
  stream.onmessage = function (event) { streamResult.textContent = event.data; };
  stream.onerror = function () { streamResult.textContent = 'Stream unavailable. Run python server.py and open localhost:8000/lab.html.'; stream.close(); };
});
document.querySelector('#sse-stop').addEventListener('click', function () {
  if (stream) stream.close();
  streamResult.textContent = 'Stream stopped.';
});
