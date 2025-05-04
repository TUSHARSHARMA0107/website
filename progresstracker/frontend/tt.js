$(document).ready(function() {
      // Initialize calendar
      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'Event',
            start: '2022-01-01',
            end: '2022-01-01'
          }
        ]
      });
    
      // Handle form submission
      $('#progress-form').submit(function(e) {
        e.preventDefault();
        const weightInput = $('#weight');
        const dateInput = $('#date');
        const weight = parseFloat(weightInput.val());
        const date = dateInput.val();
        $.ajax({
          type: 'POST',
          url: '/submit-progress',
          data: JSON.stringify({ weight, date }),
          contentType: 'application/json',
          success: function(data) {
            displayProgressList(data);
          },
          error: function(xhr, status, error) {
            console.error('Error submitting progress:', error);
          }
        });
      });
    
      // Function to display progress list
      function displayProgressList(data) {
        const progressList = $('#progress-list');
        progressList.empty();
        data.forEach((item) => {
          const listItem = $('<li>');
          listItem.text(`Weight: ${item.weight} kg on ${item.date}`);
          const deleteBtn = $('<button class="delete-btn">Delete</button>');
          deleteBtn.data('date', item.date);
          listItem.append(deleteBtn);
          progressList.append(listItem);
        });
      }
    
      // Handle delete button click
      $('#progress-list').on('click', '.delete-btn', function() {
        const date = $(this).data('date');
        $.ajax({
          type: 'DELETE',
          url: `/delete-progress/${date}`,
          success: function(data) {
            displayProgressList(data);
          },
          error: function(xhr, status, error) {
            console.error('Error deleting progress item:', error);
          }
        });
      });
    
      // Handle reset button click
      $('#reset-btn').click(function() {
        $.ajax({
          type: 'DELETE',
          url: '/reset-progress',
          success: function(data) {
            displayProgressList(data);
          },
          error: function(xhr, status, error) {
            console.error('Error resetting progress:', error);
          }
        });
      });
    
      // Initialize progress list
      $.ajax({
        type: 'GET',
        url: '/get-progress',
        success: function(data) {
          displayProgressList(data);
        },
        error: function(xhr, status, error) {
          console.error('Error retrieving progress:', error);
        }
      });
    });
    