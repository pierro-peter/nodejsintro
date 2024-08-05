
        document.getElementById('recordProduceForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const produceName = document.getElementById('produceName').value;
            const produceType = document.getElementById('produceType').value;
            const produceDate = document.getElementById('produceDate').value;
            const produceTime = document.getElementById('produceTime').value;
            const tonnage = document.getElementById('tonnage').value;
            const cost = document.getElementById('cost').value;
            const dealerName = document.getElementById('dealerName').value;
            const branchName = document.getElementById('branchName').value;
            const contact = document.getElementById('contact').value;
            const price = document.getElementById('price').value;

            // Simple validation
            if (!produceName || !produceType || !produceDate || !tonnage || !cost || !dealerName || !branchName || !contact || !price) {
                document.getElementById('message').textContent = 'Please fill out all required fields.';
                document.getElementById('message').style.color = 'red';
                return;
            }

            // Create a message for success
            document.getElementById('message').textContent = 'Produce recorded successfully!';
            document.getElementById('message').style.color = 'green';

            // Optionally, you can clear the form after submission
            document.getElementById('recordProduceForm').reset();
        });
    