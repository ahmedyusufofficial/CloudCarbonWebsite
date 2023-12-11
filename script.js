document.addEventListener('DOMContentLoaded', function() {
    // Sample data for the chart
    var data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Sample Data',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56]
      }]
    };
  
    // Chart configuration
    var config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  
    // Get the canvas element and create the chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, config);
  });
  