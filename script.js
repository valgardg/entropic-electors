const states = {
	"MA": { "name": "Massachusetts", "population": 7029000, "electoralVotes": 11, "democratPercent": 64, "republicanPercent": 36 },
	"MN": { "name": "Minnesota", "population": 5744000, "electoralVotes": 10, "democratPercent": 54, "republicanPercent": 46 },
	"MT": { "name": "Montana", "population": 1104000, "electoralVotes": 3, "democratPercent": 40, "republicanPercent": 60 },
	"ND": { "name": "North Dakota", "population": 780000, "electoralVotes": 3, "democratPercent": 35, "republicanPercent": 65 },
	"HI": { "name": "Hawaii", "population": 1455000, "electoralVotes": 4, "democratPercent": 64, "republicanPercent": 36 },
	"ID": { "name": "Idaho", "population": 1972000, "electoralVotes": 4, "democratPercent": 35, "republicanPercent": 65 },
	"WA": { "name": "Washington", "population": 7905000, "electoralVotes": 12, "democratPercent": 58, "republicanPercent": 42 },
	"AZ": { "name": "Arizona", "population": 7640000, "electoralVotes": 11, "democratPercent": 49, "republicanPercent": 51 },
	"CA": { "name": "California", "population": 39250000, "electoralVotes": 54, "democratPercent": 65, "republicanPercent": 35 },
	"CO": { "name": "Colorado", "population": 5985000, "electoralVotes": 10, "democratPercent": 55, "republicanPercent": 45 },
	"NV": { "name": "Nevada", "population": 3317000, "electoralVotes": 6, "democratPercent": 52, "republicanPercent": 48 },
	"NM": { "name": "New Mexico", "population": 2134000, "electoralVotes": 5, "democratPercent": 54, "republicanPercent": 46 },
	"OR": { "name": "Oregon", "population": 4324000, "electoralVotes": 8, "democratPercent": 57, "republicanPercent": 43 },
	"UT": { "name": "Utah", "population": 3362000, "electoralVotes": 6, "democratPercent": 35, "republicanPercent": 65 },
	"WY": { "name": "Wyoming", "population": 581000, "electoralVotes": 3, "democratPercent": 30, "republicanPercent": 70 },
	"AR": { "name": "Arkansas", "population": 3034000, "electoralVotes": 6, "democratPercent": 37, "republicanPercent": 63 },
	"IA": { "name": "Iowa", "population": 3179000, "electoralVotes": 6, "democratPercent": 45, "republicanPercent": 55 },
	"KS": { "name": "Kansas", "population": 2938000, "electoralVotes": 6, "democratPercent": 41, "republicanPercent": 59 },
	"MO": { "name": "Missouri", "population": 6155000, "electoralVotes": 10, "democratPercent": 43, "republicanPercent": 57 },
	"NE": { "name": "Nebraska", "population": 1962000, "electoralVotes": 5, "democratPercent": 40, "republicanPercent": 60 },
	"OK": { "name": "Oklahoma", "population": 4016000, "electoralVotes": 7, "democratPercent": 35, "republicanPercent": 65 },
	"SD": { "name": "South Dakota", "population": 909000, "electoralVotes": 3, "democratPercent": 39, "republicanPercent": 61 },
	"LA": { "name": "Louisiana", "population": 4627000, "electoralVotes": 8, "democratPercent": 43, "republicanPercent": 57 },
	"TX": { "name": "Texas", "population": 29900000, "electoralVotes": 40, "democratPercent": 48, "republicanPercent": 52 },
	"CT": { "name": "Connecticut", "population": 3665000, "electoralVotes": 7, "democratPercent": 58, "republicanPercent": 42 },
	"NH": { "name": "New Hampshire", "population": 1374000, "electoralVotes": 4, "democratPercent": 52, "republicanPercent": 48 },
	"RI": { "name": "Rhode Island", "population": 1098000, "electoralVotes": 4, "democratPercent": 59, "republicanPercent": 41 },
	"VT": { "name": "Vermont", "population": 647000, "electoralVotes": 3, "democratPercent": 60, "republicanPercent": 40 },
	"AL": { "name": "Alabama", "population": 5073000, "electoralVotes": 9, "democratPercent": 35, "republicanPercent": 65 },
	"FL": { "name": "Florida", "population": 22220000, "electoralVotes": 30, "democratPercent": 47, "republicanPercent": 53 },
	"GA": { "name": "Georgia", "population": 10740000, "electoralVotes": 16, "democratPercent": 49, "republicanPercent": 51 },
	"MS": { "name": "Mississippi", "population": 2961000, "electoralVotes": 6, "democratPercent": 39, "republicanPercent": 61 },
	"SC": { "name": "South Carolina", "population": 5346000, "electoralVotes": 9, "democratPercent": 44, "republicanPercent": 56 },
	"IL": { "name": "Illinois", "population": 12570000, "electoralVotes": 19, "democratPercent": 58, "republicanPercent": 42 },
	"IN": { "name": "Indiana", "population": 6812000, "electoralVotes": 11, "democratPercent": 43, "republicanPercent": 57 },
	"KY": { "name": "Kentucky", "population": 4506000, "electoralVotes": 8, "democratPercent": 40, "republicanPercent": 60 },
	"NC": { "name": "North Carolina", "population": 10600000, "electoralVotes": 16, "democratPercent": 48, "republicanPercent": 52 },
	"OH": { "name": "Ohio", "population": 11700000, "electoralVotes": 17, "democratPercent": 46, "republicanPercent": 54 },
	"TN": { "name": "Tennessee", "population": 7003000, "electoralVotes": 11, "democratPercent": 39, "republicanPercent": 61 },
	"VA": { "name": "Virginia", "population": 8631000, "electoralVotes": 13, "democratPercent": 52, "republicanPercent": 48 },
	"WI": { "name": "Wisconsin", "population": 5870000, "electoralVotes": 10, "democratPercent": 50, "republicanPercent": 50 },
	"WV": { "name": "West Virginia", "population": 1766000, "electoralVotes": 4, "democratPercent": 37, "republicanPercent": 63 },
	"DE": { "name": "Delaware", "population": 1017000, "electoralVotes": 3, "democratPercent": 56, "republicanPercent": 44 },
	"DC": { "name": "District of Columbia", "population": 714000, "electoralVotes": 3, "democratPercent": 92, "republicanPercent": 8 },
	"MD": { "name": "Maryland", "population": 6067000, "electoralVotes": 10, "democratPercent": 63, "republicanPercent": 37 },
	"NJ": { "name": "New Jersey", "population": 9353000, "electoralVotes": 14, "democratPercent": 57, "republicanPercent": 43 },
	"NY": { "name": "New York", "population": 19380000, "electoralVotes": 28, "democratPercent": 60, "republicanPercent": 40 },
	"PA": { "name": "Pennsylvania", "population": 12900000, "electoralVotes": 19, "democratPercent": 51, "republicanPercent": 49 },
	"ME": { "name": "Maine", "population": 1356000, "electoralVotes": 4, "democratPercent": 53, "republicanPercent": 47 },
	"MI": { "name": "Michigan", "population": 10080000, "electoralVotes": 15, "democratPercent": 51, "republicanPercent": 49 },
	"AK": { "name": "Alaska", "population": 734000, "electoralVotes": 3, "democratPercent": 42, "republicanPercent": 58 }
};

// Function to update state colors based on larger party percent
function updateStateColors() {
    Object.keys(states).forEach(stateCode => {
        const stateData = states[stateCode];
        const stateElement = document.querySelector(`#${stateCode}`); // Assuming the state's ID in the SVG matches its code
        
        if (!stateElement) {
            console.warn(`State element with ID ${stateCode} not found in the SVG.`);
            return;
        }

        // Determine the color based on the higher percentage
        const color = stateData.democratPercent > stateData.republicanPercent ? 'blue' : 'red';
        stateElement.style.fill = color; // Update the fill color of the SVG element
    
        stateElement.addEventListener('mouseover', () => {
            document.querySelector('#info-box').innerText = `${stateData.name} - Electoral Votes: ${stateData.electoralVotes}`;
        });

        stateElement.addEventListener('mouseleave', () => {
            document.querySelector('#info-box').innerText = "";
        });
    });
}

// Call the function after the DOM has loaded
document.addEventListener('DOMContentLoaded', updateStateColors);

console.log("")