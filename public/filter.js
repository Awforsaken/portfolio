$(document).ready(function() {
  // Function to filter posts
  function updateFilteredPosts() {
    // Get the values of all checked checkboxes
    const selectedTags = $("#tag-filters input:checked").map(function() {
      return $(this).val();
    }).get();

    // Loop through each bento-item and hide or show based on the selected tags
    $(".bento-container .bento-item").each(function() {
      const itemTags = $(this).data('tags').split(',');
      console.log(itemTags);
      // If the item's tags contain any of the selected tags, show it, otherwise hide it
      if (itemTags.some(tag => selectedTags.includes(tag))) {
        
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });

    updateNoResultsMessage();
  }

  // Function to update the no-results message visibility
  function updateNoResultsMessage() {
    const allItemsHidden = $('.bento-container .bento-item:visible').length === 0;
    
    if (allItemsHidden) {
      $('.no-results-message').removeClass('hidden');
    } else {
      $('.no-results-message').addClass('hidden');
    }
  }

  // Listen for changes on the checkboxes
  $("#tag-filters input").change(function() {
    updateFilteredPosts(); // Update posts based on selected tags
  });

  // Initial filter on page load
  updateFilteredPosts();


  
});

