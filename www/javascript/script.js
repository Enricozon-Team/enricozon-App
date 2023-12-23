document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.getElementById('gift-box');
  
    // Function to show the gift box
    function showGiftBox() {
      giftBox.style.display = 'block';
  
      // Set a timeout to hide the gift box after 2 seconds
      setTimeout(function() {
        giftBox.style.display = 'none';
      }, 2000);
    }
  
    // Event listener for when the user clicks on the page
    document.addEventListener('click', function(event) {
      // Show the gift box at the clicked position
      giftBox.style.left = `${event.clientX}px`;
      giftBox.style.top = `${event.clientY}px`;
  
      showGiftBox();
    });
  });
  