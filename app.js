import { VegaTree } from "./libraries/vegatree.js";
import { DecisionTree } from "./libraries/decisiontree.js";


// data

let csvFile = "./data/weather.csv";
let trainingLabel = "RainTomorrow";
let ignored = ["RainTomorrow", "Humidity9am","Humidity3pm","Pressure9am","Pressure3pm","Cloud9am","Cloud3pm","Temp9am","Temp3pm","RainToday","RISK_MM"];


let rainTomorrowPositive = 0;
let rainTomorrowNegative = 0;
let isPositive = 0;
let isNegative = 0;


// Laad CSV data op

function loadData() {
  Papa.parse(csvFile, {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: (results) => trainModel(results.data), // Gebruik deze data om te trainen
  });
}

// MACHINE LEARNING - Decision Tree
function trainModel(data) {
  let splitIndex = Math.floor(data.length * 0.8);
  let trainData = data.slice(0, splitIndex + 1);
  let testData = data.slice(splitIndex + 1);

  // Maak het algoritme aan
  let decisionTree = new DecisionTree({
    ignoredAttributes: ignored,
    trainingSet: trainData,
    categoryAttr: trainingLabel,
  });

  // Teken de boomstructuur - DOM element, breedte, hoogte, decision tree
  let visual = new VegaTree("#view", 800, 400, decisionTree.toJSON());

  // Voer een voorspelling uit op een voorbeeld uit de testdata
  let example = testData[56];
  let prediction = decisionTree.predict(example);
  if (prediction === "No") {
    console.log("Het zal morgen niet regenen.");
  } else {
    console.log("Het zal morgen regenen.");
  }

  // Bereken de nauwkeurigheid met behulp van alle testdata
  function accuracy(data, tree, label) {
    let correct = 0;
    for (const row of data) {
      const actualLabel = row[trainingLabel] !== undefined ? row[trainingLabel].toString() : "";
      const predictedLabel = tree.predict(row) !== undefined ? tree.predict(row).toString() : "";

      if (actualLabel === predictedLabel) {
        correct++;
      }
    }

    let element = document.getElementById("accuracy");
    element.innerText = `Nauwkeurigheid ${label}: ${correct / data.length}`;
    console.log(`Nauwkeurigheid ${label}: ${correct / data.length}`);
  }

  // Trainingsnauwkeurigheid
  accuracy(trainData, decisionTree, "train");

  // Testnauwkeurigheid
  accuracy(testData, decisionTree, "test");

  // Bereken het aantal correct geclassificeerde gevallen
  for (const row of data) {
    const actualLabel = row[trainingLabel] !== undefined ? row[trainingLabel].toString() : "";
    const predictedLabel = decisionTree.predict(row) !== undefined ? decisionTree.predict(row).toString() : "";

    if (actualLabel === "No" && predictedLabel === "Yes") {
      isPositive++;
    } else if (actualLabel === "Yes" && predictedLabel === "No") {
      isNegative++;
    } else if (actualLabel === "Yes" && predictedLabel === "Yes") {
      rainTomorrowPositive++;
    } else if (actualLabel === "No" && predictedLabel === "No") {
      rainTomorrowNegative++;
    }
  }

  // Update de tabel met resultaten
  let tablePositive = document.getElementById("isPositive");
  tablePositive.innerHTML = isPositive.toString();

  let tableNegative = document.getElementById("isNegative");
  tableNegative.innerHTML = isNegative.toString();

  let tableRainTomorrowPositive = document.getElementById("rainTomorrowPositive");
  tableRainTomorrowPositive.innerHTML = rainTomorrowPositive.toString();

  let tableRainTomorrowNegative = document.getElementById("rainTomorrowNegative");
  tableRainTomorrowNegative.innerHTML = rainTomorrowNegative.toString();

  let json = decisionTree.toJSON();
  let jsonString = JSON.stringify(json);
  console.log(jsonString);
  console.log(isPositive);
}

loadData();
