chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.highlight) {
      highlightText();
    }
  });
  
    function highlightText() {
        var elements = document.querySelectorAll("p");
        elements.forEach(function(element) {
          element.style.backgroundColor = "pink"; 
        });
      }
      
   