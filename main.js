// Get the file upload button by id.
const logInput = document.getElementById("log");

// Detect file uploads and start operations.
logInput.addEventListener('change', async (event) => {
    console.log("Updating...");

    // If at least one file received...
    if(event.target.files.length > 0) {
        // Grab it and send a log that it was received...
        const logFile = event.target.files[0];
        console.log(`File ${logFile.name} received.`);

        // Extract file contents and report length...
        const contents = await logFile.text();
        const logLines = contents.split(/\r?\n/);
        console.log(`File contains ${logLines.length} lines.`);
        
        // And send lines to be processed.
        processInput(logLines);
    }
});

// Function that processes console log input data.
function processInput(logLines) {
    // Movement abilities to look for in data by name.
    const movement = [
        "Panther", 
        "Float",
        "Backdash",
        "DoubleJump",
        "Kicker",
        "Slide",  
        "Undine", 
        "Skula", 
        "GiantBat", 
        "HighJump",
        "TimeStop"
    ];

    // Define data storage structures.
    let seed = null;
    let transitions = [];
    let bosses = [];
    let bookLocations = [];
    let movementLocations = [];
    let itemsByArea = [];

    // Index for iteration (I prefer this method in this case).
    let lineIndex = 0;   

    // Iterate to find start of data (seed readout line).
    while (!logLines[lineIndex].includes("Seed:")) { lineIndex++; }
    console.log(`Found start of data on line ${lineIndex + 1}`);
    seed = logLines[lineIndex].trim().slice(logLines[lineIndex].lastIndexOf(" ") + 1);
    lineIndex++;

    // Continue to end of file, or until irrelevant data found.
    while (lineIndex < logLines.length && !logLines[lineIndex].includes("Seed:")) { 
        // Get cleaned line.
        let line = logLines[lineIndex].trim();

        // Detect area transition lines.
        if (line.includes("<=>")) {
            
        }

        // Detect book placement lines.
        if (line.includes("Placed Book")) {
            
        }

        // Detect movement progression placement lines.
        if (movement.some(mv => line.includes("Placed " + mv))) {

        }

        // Detect placed item/canister lines.
        if (line.includes("placed item")) {
            // Extract item and location numbers.
            let itemData = line.match(/.+ (.+) at (.+)/);
            
        }

        lineIndex++; 
    }

    // Output reason for termination (for debug).
    let terminationStmt = lineIndex < logLines.length ? "Reached EOF..." : "Reached end of relevant data...";
    console.log(terminationStmt);

    // Then put all the data together...
    let outputData = "Placeholder";

    // Send data to file and have it download.
    downloadFile(outputData, "aosrand_spoiler_" + seed);
}

// Function for outputting data to a .txt file that is downloaded to the user's computer.
function downloadFile(content, fileName) {
    // Create container for file data
    const blob = new Blob([content], { type: "text/plain" });

    // Generate temporary local URL pointing to data container...
    const url = URL.createObjectURL(blob);

    // Create a hidden anchor...
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.style.display = "none";

    // Inject, click, and clean up DOM...
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // And release memory.
    URL.revokeObjectURL(url);

    // Log success.
    console.log("Downloading finalized file.");
}