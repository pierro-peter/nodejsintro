document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#logout-button').addEventListener('click', () => {
        window.location.href = '/index.html'; // Redirect to the home page on logout
    });

    
    const salesData = {
        totalSales: "30,000,000 UgX",
        todaysSales: "2,000,000 UgX",
        totalTransactions: "150",
        pendingPayments: "4,500,000 UgX"
    };

    
    function updateSalesDashboard() {
        document.getElementById('total-sales').innerText = salesData.totalSales;
        document.getElementById('todays-sales').innerText = salesData.todaysSales;
        document.getElementById('total-transactions').innerText = salesData.totalTransactions;
        document.getElementById('pending-payments').innerText = salesData.pendingPayments;
    }

    window.onload = updateSalesDashboard;
});
