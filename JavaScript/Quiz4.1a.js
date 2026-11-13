 
        // Initialize dashboard data
        let currentOutput = 4.2; // kilowatts
        let monthlySavings = 127.50;
        let deviceStatus = 'Online';

        // STEP 1: Update solar panel output display (add 1 line)
        // WHAT THIS DOES: Uses getElementById to select element by unique ID, updates with textContent
        // getElementById is fastest method for targeting specific elements with unique identifiers
        // textContent safely updates text content without HTML injection risks
        // Perfect for displaying numerical data and simple text updates
        
        // INSTRUCTION: Add this line exactly:
        // document.getElementById('solarOutput').textContent = currentOutput + ' kW';
        
        document.getElementById('solarOutput').textContent = currentOutput + ' kW';
        

        // STEP 2: Display formatted monthly energy savings (add 1 line)
        // WHAT THIS DOES: Uses querySelector to select by CSS selector, updates with innerHTML
        // querySelector provides flexible element selection using CSS-style targeting
        // innerHTML allows rich HTML content with styling, colors, and formatting
        // Perfect for customer-facing displays that need professional formatting
        
        // INSTRUCTION: Add this line exactly:
        // document.querySelector('.savings-display').innerHTML = '<span style="color: #2e7d32; font-weight: bold;">$' + monthlySavings + '</span> saved this month';
        
       document.querySelector('.savings-display').innerHTML = '<span style="color: #2e7d32; font-weight: bold;">$' + monthlySavings + '</span> saved this month';
        

        // STEP 3: Update all connected smart device status indicators (add 3 lines)
        // WHAT THIS DOES: Uses querySelectorAll to select multiple elements, loops to update each
        // querySelectorAll returns NodeList of all matching elements for batch operations
        // Loop applies same update to multiple similar elements efficiently
        // Perfect for managing multiple devices or repeated interface elements
        
        // INSTRUCTION: Add these 4 lines exactly:
        // let devices = document.querySelectorAll('.device-status');
        // for (let i = 0; i < devices.length; i++) {
        //     devices[i].textContent = deviceStatus;
        // }
        
        let devices = document.querySelectorAll('.device-status');
        for (let i = 0; i < devices.length; i++) {
        devices[i].textContent = deviceStatus;
        }
        

        // Simulate real-time updates (for demo purposes)
        setInterval(function() {
            // Update solar output with slight variations
            currentOutput = (4.0 + Math.random() * 0.8).toFixed(1);
            if (document.getElementById('solarOutput').textContent !== 'Loading...') {
                document.getElementById('solarOutput').textContent = currentOutput + ' kW';
            }
            
            // Update savings with slight variations
            monthlySavings = (120 + Math.random() * 20).toFixed(2);
            if (document.querySelector('.savings-display').innerHTML !== 'Loading...') {
                document.querySelector('.savings-display').innerHTML = '<span style="color: #2e7d32; font-weight: bold;">$' + monthlySavings + '</span> saved this month';
            }
        }, 3000);
    