// ========== W01: WORKER MESSAGE ==========
// This file has no access to document. It receives numbers and returns a sum.
self.onmessage = function (event) {
  let total = 0;
  event.data.forEach(function (distance) { total += distance; });
  self.postMessage(total);
};
