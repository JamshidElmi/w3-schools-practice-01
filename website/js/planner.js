// ========== J01: READ LOCAL STORAGE ==========
// JSON turns an array into text and back. Storage can fail, so catch errors.
const itinerary = document.querySelector('#itinerary');
const statusText = document.querySelector('#planner-status');
let stops = [];
try {
  const saved = JSON.parse(localStorage.getItem('toronto-stops') || '[]');
  if (Array.isArray(saved)) stops = saved.filter(item => typeof item === 'string');
} catch (error) { statusText.textContent = 'Storage unavailable; your plan works for this visit.'; }
// ========== J02: DRAW AND SAVE ==========
function renderPlan() {
  itinerary.textContent = '';
  stops.forEach(function (stop) {
    const item = document.createElement('li');
    item.textContent = stop; // textContent inserts text, not HTML.
    itinerary.appendChild(item);
  });
}
function savePlan() {
  renderPlan();
  try {
    localStorage.setItem('toronto-stops', JSON.stringify(stops));
    statusText.textContent = stops.length + ' stops saved on this browser.';
  } catch (error) { statusText.textContent = 'Plan updated, but storage is unavailable.'; }
}
// ========== J03: BUTTON EVENTS ==========
document.querySelectorAll('[data-stop]').forEach(function (button) {
  button.addEventListener('click', function () { stops.push(button.dataset.stop); savePlan(); });
});
document.querySelector('#clear-plan').addEventListener('click', function () { stops = []; savePlan(); });
// ========== J04: DRAG AND DROP ==========
document.querySelector('#drag-stop').addEventListener('dragstart', function (event) {
  event.dataTransfer.setData('text/plain', 'Waterfront');
});
const dropZone = document.querySelector('#drop-zone');
dropZone.addEventListener('dragover', function (event) { event.preventDefault(); });
dropZone.addEventListener('drop', function (event) {
  event.preventDefault();
  if (event.dataTransfer.getData('text/plain') === 'Waterfront') { stops.push('Waterfront'); savePlan(); }
});
renderPlan();
if (stops.length) statusText.textContent = stops.length + ' saved stops restored.';
