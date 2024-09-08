
const stockData = {
    totalStock: "12,000 kg",
    lowStockAlerts: "5 items",
    totalSales: "30,000,000 UgX",
    todaysSales: "2,000,000 UgX",
    pendingCredit: "4,500,000 UgX"
};

function updateDashboard() {
    document.getElementById('total-stock').innerText = stockData.totalStock;
    document.getElementById('low-stock-alerts').innerText = stockData.lowStockAlerts;
    document.getElementById('total-sales').innerText = stockData.totalSales;
    document.getElementById('todays-sales').innerText = stockData.todaysSales;
    document.getElementById('pending-credit').innerText = stockData.pendingCredit;
}

window.onload = updateDashboard;

document.querySelector('#logout-button').addEventListener('click', () => {
    localStorage.removeItem('userRole');
    window.location.href = '/index.html';
});
