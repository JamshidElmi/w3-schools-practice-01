// ========== J01: OUTPUT ELEMENT ==========
document.querySelector('#double-tickets').addEventListener('click', function () {
  const tickets = document.querySelector('#demo-number').valueAsNumber;
  document.querySelector('#ticket-output').value = Number.isFinite(tickets) ? tickets * 2 : 'Enter a number';
});
