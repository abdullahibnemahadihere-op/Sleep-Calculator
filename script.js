/**
 * Sleep Calculator Application
 * Calculates ideal bedtime based on wake-up time and sleep cycles
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const wakeUpTimeInput = document.getElementById('wakeUpTime');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsSection = document.getElementById('resultsSection');
    const resultsContainer = document.getElementById('resultsContainer');
    
    // Set default time to current time + 8 hours
    const now = new Date();
    const defaultWakeTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const hours = String(defaultWakeTime.getHours()).padStart(2, '0');
    const minutes = String(defaultWakeTime.getMinutes()).padStart(2, '0');
    wakeUpTimeInput.value = `${hours}:${minutes}`;
    
    // Add event listener to calculate button
    calculateBtn.addEventListener('click', calculateSleepTimes);
    
    // Also calculate when pressing Enter in the time input
    wakeUpTimeInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            calculateSleepTimes();
        }
    });
    
    /**
     * Calculate sleep times based on wake-up time
     */
    function calculateSleepTimes() {
        // Get the wake-up time from input
        const wakeUpTime = wakeUpTimeInput.value;
        
        // Validate input
        if (!wakeUpTime) {
            alert('Please select a wake-up time');
            return;
        }
        
        // Parse hours and minutes
        const [wakeHours, wakeMinutes] = wakeUpTime.split(':').map(Number);
        
        // Create date object for wake-up time
        const wakeDate = new Date();
        wakeDate.setHours(wakeHours, wakeMinutes, 0, 0);
        
        // Clear previous results
        resultsContainer.innerHTML = '';
        
        // Generate sleep cycle options (3 to 6 cycles)
        const sleepCycles = [];
        for (let cycles = 6; cycles >= 3; cycles--) {
            // Calculate total sleep time in minutes (cycles * 90 minutes + 15 minutes to fall asleep)
            const totalSleepMinutes = (cycles * 90) + 15;
            
            // Calculate bedtime by subtracting total sleep time from wake-up time
            const bedTime = new Date(wakeDate.getTime() - totalSleepMinutes * 60 * 1000);
            
            // Format bedtime to 12-hour format
            const formattedTime = formatTime12Hour(bedTime);
            
            // Determine if this is the recommended option (5-6 cycles)
            const isRecommended = cycles === 5 || cycles === 6;
            
            // Add to sleep cycles array
            sleepCycles.push({
                cycles: cycles,
                hours: cycles * 1.5,
                bedtime: formattedTime,
                isRecommended: isRecommended,
                date: bedTime
            });
        }
        
        // Display results
        displayResults(sleepCycles);
        
        // Show results section
        resultsSection.classList.remove('hidden');
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    /**
     * Format time in 12-hour format
     * @param {Date} date - Date object to format
     * @returns {string} Formatted time string (e.g., "9:30 PM")
     */
    function formatTime12Hour(date) {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
        
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        
        return `${hours}:${minutesStr} ${ampm}`;
    }
    
    /**
     * Display sleep cycle results
     * @param {Array} sleepCycles - Array of sleep cycle objects
     */
    function displayResults(sleepCycles) {
        // Create result cards for each sleep cycle
        sleepCycles.forEach((cycle, index) => {
            // Create card element
            const card = document.createElement('div');
            
            // Add classes for styling
            card.className = `bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 card-animation`;
            
            // Add highlight for recommended options
            if (cycle.isRecommended) {
                card.classList.add('highlight-card');
            }
            
            // Add animation delay for staggered effect
            card.style.animationDelay = `${index * 0.1}s`;
            
            // Set card content
            card.innerHTML = `
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-xl font-bold text-gray-100 mb-2">
                            ${cycle.cycles} Cycles (${cycle.hours} hours)
                        </h3>
                        <p class="text-2xl font-bold text-cyan-400 mb-4">
                            ${cycle.bedtime}
                        </p>
                    </div>
                    ${cycle.isRecommended ? 
                        '<span class="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>' : 
                        ''}
                </div>
                
                <p class="text-gray-300">
                    ${cycle.isRecommended ? 
                        'Optimal for feeling refreshed and energized in the morning 😴' : 
                        'Good option for shorter sleep periods ⏰'}
                </p>
                
                <div class="mt-4 flex justify-between text-sm text-gray-400">
                    <span>${cycle.cycles} × 90 min cycles</span>
                    <span>+ 15 min to fall asleep</span>
                </div>
            `;
            
            // Add card to container
            resultsContainer.appendChild(card);
        });
    }
    
    // Calculate times on initial load
    calculateSleepTimes();
});