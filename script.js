// Utility: Generate Random Normal Data
function randomNormal(mean, std) {
    return mean + std * Math.sqrt(-2 * Math.log(Math.random())) * 
           Math.cos(2 * Math.PI * Math.random());
}

// ---------------- MEDICAL PROJECT ----------------

let medicalData = [];
for (let i = 0; i < 100; i++) {
    let cluster = Math.floor(Math.random() * 3);

    let pulseMean = cluster === 0 ? 65 : cluster === 1 ? 80 : 95;
    let pulseVar = cluster === 0 ? 5 : cluster === 1 ? 7 : 10;

    medicalData.push({
        pulse: randomNormal(pulseMean, pulseVar),
        variability: randomNormal(10 + cluster*3, 2),
        cluster: cluster
    });
}

