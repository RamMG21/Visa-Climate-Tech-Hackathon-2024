//Grafica de barras
    const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['USA', 'Germany', 'United Kindom', 'China', 'Canada', 'France', 'Australia', 'Netherlands', 'Russia', 'Japan', 'Mexico'],
        datasets: [{
          label: 'Number of Data Centers',
          data: [5381, 521, 514, 449, 336, 315, 307, 307, 297, 251, 219],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
            'rgb(54, 162, 235)'
            ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
 
    //grafica de red 
    