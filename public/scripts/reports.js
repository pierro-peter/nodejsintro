document.addEventListener('DOMContentLoaded', function() {
    console.log('Reports page loaded');

    // Sample data for Stock Report Chart
    const stockData = {
        labels: ['Beans', 'Maize', 'Cowpeas', 'G-Nuts', 'Rice', 'Soybeans'],
        datasets: [{
            label: 'Stock Levels (in kg)',
            data: [1200, 1500, 800, 600, 700, 900], // Replace with actual data
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 1
        }]
    };

    // Sample data for Sales Report Chart
    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales (in UGX)',
            data: [5000000, 7000000, 6000000, 8000000, 9000000, 10000000], // Replace with actual data
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: 'rgba(33, 150, 243, 1)',
            borderWidth: 1
        }]
    };

    // Create Stock Report Chart
    const ctxStock = document.getElementById('stockChart').getContext('2d');
    new Chart(ctxStock, {
        type: 'bar',
        data: stockData,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Create Sales Report Chart
    const ctxSales = document.getElementById('salesChart').getContext('2d');
    new Chart(ctxSales, {
        type: 'line',
        data: salesData,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
