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

function renderMedical() {

    let traces = [0,1,2].map(c => ({
        x: medicalData.filter(d=>d.cluster===c).map(d=>d.pulse),
        y: medicalData.filter(d=>d.cluster===c).map(d=>d.variability),
        mode: "markers",
        type: "scatter",
        name: "Cluster " + (c+1)
    }));

    Plotly.newPlot("medicalCluster", traces, {
        title: "Pulse vs Variability Clustering",
        xaxis: {title: "Pulse Rate"},
        yaxis: {title: "Pulse Variability"}
    });

    document.getElementById("medicalInsight").innerHTML =
    "<strong>Interpretation:</strong> Three physiological clusters were identified. " +
    "Cluster 1 shows lower resting pulse and stable variability. Cluster 3 indicates higher pulse rates " +
    "with increased variability, potentially reflecting stress or cardiovascular response differences.";
}

// ---------------- PSYCHOLOGICAL PROJECT ----------------

let psychData = [];
for (let i = 0; i < 120; i++) {
    let cluster = Math.floor(Math.random() * 3);

    let relatives = cluster === 0 ? 5 : cluster === 1 ? 15 : 25;
    let socialScore = cluster === 0 ? 40 : cluster === 1 ? 65 : 80;

    psychData.push({
        relatives: randomNormal(relatives, 3),
        socialScore: randomNormal(socialScore, 5),
        cluster: cluster
    });
}

function renderPsych() {

    let traces = [0,1,2].map(c => ({
        x: psychData.filter(d=>d.cluster===c).map(d=>d.relatives),
        y: psychData.filter(d=>d.cluster===c).map(d=>d.socialScore),
        mode: "markers",
        type: "scatter",
        name: "Cluster " + (c+1)
    }));

    Plotly.newPlot("psychCluster", traces, {
        title: "Social Environment vs Behavioral Score Clustering",
        xaxis: {title: "Number of Relatives / Social Exposure"},
        yaxis: {title: "Behavioral/Social Score"}
    });

    document.getElementById("psychInsight").innerHTML =
    "<strong>Interpretation:</strong> Behavioral clustering suggests environmental exposure correlates with " +
    "social conduct patterns. Higher exposure groups demonstrate increased social engagement metrics.";
}

// Render Both
renderMedical();
renderPsych();