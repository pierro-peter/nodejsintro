// Simulated stock data
const stockData = [
    { name: "Beans", type: "Legume", tonnage: 500, branch: "Maganjo", lowStock: false },
    { name: "Maize", type: "Grain", tonnage: 2000, branch: "Matugga", lowStock: false },
    { name: "Cowpeas", type: "Legume", tonnage: 150, branch: "Maganjo", lowStock: true },
    { name: "Rice", type: "Grain", tonnage: 1000, branch: "Matugga", lowStock: false },
    { name: "Soybeans", type: "Legume", tonnage: 80, branch: "Maganjo", lowStock: true }
];

// Function to populate the stock table
function populateStockTable() {
    const stockTableBody = document.getElementById('stock-table-body');
    stockTableBody.innerHTML = ''; // Clear existing table data

    stockData.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>${item.tonnage} kg</td>
            <td>${item.branch}</td>
            <td class="${item.lowStock ? 'low-stock' : ''}">
                ${item.lowStock ? 'Low Stock' : 'In Stock'}
            </td>
        `;
        
        stockTableBody.appendChild(row);
    });
}

// Function to filter stock by produce name
function filterStock() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredStock = stockData.filter(item => item.name.toLowerCase().includes(query));

    const stockTableBody = document.getElementById('stock-table-body');
    stockTableBody.innerHTML = ''; // Clear existing table data

    filteredStock.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>${item.tonnage} kg</td>
            <td>${item.branch}</td>
            <td class="${item.lowStock ? 'low-stock' : ''}">
                ${item.lowStock ? 'Low Stock' : 'In Stock'}
            </td>
        `;
        
        stockTableBody.appendChild(row);
    });
}

// Load stock data on page load
window.onload = populateStockTable;
