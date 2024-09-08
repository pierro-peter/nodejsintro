// Simulated sales data
const salesData = [];

// Function to record a new sale
function recordSale() {
    const produceName = document.getElementById('produce-name').value;
    const tonnage = document.getElementById('tonnage').value;
    const amountPaid = document.getElementById('amount-paid').value;
    const buyerName = document.getElementById('buyer-name').value;
    const salesAgent = document.getElementById('sales-agent').value;
    const dateTime = new Date().toLocaleString();

    if (produceName && tonnage && amountPaid && buyerName && salesAgent) {
        // Create a new sale object
        const newSale = {
            produceName,
            tonnage,
            amountPaid,
            buyerName,
            salesAgent,
            dateTime
        };

        // Add the sale to the salesData array
        salesData.push(newSale);

        // Update the sales table
        populateSalesTable();

        // Clear the form
        document.getElementById('sales-form').reset();
    } else {
        alert('Please fill in all the fields.');
    }
}

// Function to populate the sales table
function populateSalesTable() {
    const salesTableBody = document.getElementById('sales-table-body');
    salesTableBody.innerHTML = '';  // Clear existing table data

    // Iterate over salesData and create table rows
    salesData.forEach(sale => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${sale.produceName}</td>
            <td>${sale.tonnage} kg</td>
            <td>${sale.amountPaid} Ugx</td>
            <td>${sale.buyerName}</td>
            <td>${sale.salesAgent}</td>
            <td>${sale.dateTime}</td>
        `;

        salesTableBody.appendChild(row);
    });
}
