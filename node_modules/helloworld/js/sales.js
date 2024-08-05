document.getElementById('recordSaleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const produceName = document.getElementById('produceName').value.trim();
    const tonnage = document.getElementById('tonnage').value.trim();
    const amountPaid = document.getElementById('amountPaid').value.trim();
    const buyerName = document.getElementById('buyerName').value.trim();
    const salesAgentName = document.getElementById('salesAgentName').value.trim();
    const saleDate = document.getElementById('saleDate').value;
    const saleTime = document.getElementById('saleTime').value;

    // Simple validation
    if (!produceName || !tonnage || !amountPaid || !buyerName || !salesAgentName || !saleDate) {
        alert('Please fill out all required fields.');
        return;
    }

    // Optionally, validate numerical inputs
    if (isNaN(tonnage) || isNaN(amountPaid)) {
        alert('Tonnage and Amount Paid must be valid numbers.');
        return;
    }

    // Create an object to represent the sale
    const saleRecord = {
        produceName,
        tonnage: parseFloat(tonnage),
        amountPaid: parseFloat(amountPaid),
        buyerName,
        salesAgentName,
        saleDate,
        saleTime
    };

    // Simulate form submission (e.g., log to console or send to server)
    console.log('Sale recorded:', saleRecord);

    // Show success message
    alert('Sale recorded successfully!');

    // Optionally, clear the form after submission
    document.getElementById('recordSaleForm').reset();
});

