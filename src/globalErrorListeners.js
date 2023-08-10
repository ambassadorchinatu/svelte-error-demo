// Global Error Listener for Uncaught Exceptions
window.onerror = function (message, source, lineno, colno, error) {
  console.log("Global error:", { message, source, lineno, colno, error });
  // You can add additional error handling or reporting logic here
};

// Global Listener for Unhandled Promise Rejections
window.onunhandledrejection = function (event) {
  console.log("Unhandled rejection:", event.reason);
  // You can add additional error handling or reporting logic here
};
