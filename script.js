// Initialize count variables
let APcount = 0;
let Hcount = 0;
let SPcount = 0;
let FRPcount = 0;
let MDGcount = 0;

// Get user input element
const userInput = document.getElementById('userInput');

// Function to display user name
function displayName() {
  let inputValue = userInput.value;
  if (inputValue) {
    let displayUserName = document.getElementById('displayUserName');
    displayUserName.innerHTML = inputValue;
    localStorage.setItem('userName', inputValue);
    return true;
  }
}

// Load user name from local storage on page load
window.onload = function () {
  let storedName = localStorage.getItem('userName');
  if (storedName) {
    let displayUserName = document.getElementById('displayUserName');
    displayUserName.innerHTML = 'Bruker: ' + storedName;
  }
};

// Get stored counts from local storage
let storedAPcount = localStorage.getItem('APcount');
if (storedAPcount !== null) {
  APcount = parseInt(storedAPcount);
}

let storedHcount = localStorage.getItem('Hcount');
if (storedHcount !== null) {
  Hcount = parseInt(storedHcount);
}

let storedSPcount = localStorage.getItem('SPcount');
if (storedSPcount !== null) {
  SPcount = parseInt(storedSPcount);
}

let storedFRPcount = localStorage.getItem('FRPcount');
if (storedFRPcount !== null) {
  FRPcount = parseInt(storedFRPcount);
}

let storedMDGcount = localStorage.getItem('MDGcount');
if (storedMDGcount !== null) {
  MDGcount = parseInt(storedMDGcount);
}

// Update count labels
document.getElementById('APcountLabel').innerHTML = 'AP: ' + APcount;
document.getElementById('HcountLabel').innerHTML = 'H: ' + Hcount;
document.getElementById('SPcountLabel').innerHTML = 'SP: ' + SPcount;
document.getElementById('FRPcountLabel').innerHTML = 'FRP: ' + FRPcount;
document.getElementById('MDGcountLabel').innerHTML = 'MDG: ' + MDGcount;

// Get context for the chart
const ctx = document.getElementById('myChart').getContext('2d');

// Create a new chart object
const myChart = new Chart(ctx, {
  // Set the chart type to bar
  type: 'bar',
  data: {
    // Set the labels for the chart
    labels: ['AP', 'H', 'SP', 'FRP', 'MDG'],
    datasets: [
      {
        // Set the label for the dataset
        label: 'Antall Stemmer',
        // Set the data for each label
        data: [APcount, Hcount, SPcount, FRPcount, MDGcount],
        // Set the background color for each bar
        backgroundColor: [
          'rgba(255, 0, 0)',
          'rgba(2, 164, 245)',
          'rgb(6, 182, 0)',
          'rgba(1, 12, 125)',
          'rgba(9, 105, 2)',
        ],
        // Set the border width for each bar
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        // Set the y-axis to start at zero
        beginAtZero: true,
      },
    },
  },
});

// Add a click event listener to the AP button
document.getElementById('APbtn').onclick = function () {
  let storedName = localStorage.getItem('userName');

  if (storedName) {
    // Check if the user has already voted
    let hasVoted = localStorage.getItem(`${storedName}_voted`);
    if (hasVoted) {
      alert('Du kan bare stemme en gang');
    } else {
      // Increment the AP count
      APcount++;

      // Update the AP count label
      document.getElementById('APcountLabel').innerHTML = 'AP: ' + APcount;

      // Update the chart data for the AP count
      myChart.data.datasets[0].data[0] = APcount;
      myChart.update();

      // Save the AP count to local storage
      localStorage.setItem('APcount', APcount);

      // Mark the user as voted to prevent multiple votes
      localStorage.setItem(`${storedName}_voted`, true);
    }
  } else {
    alert('Registrer deg for å stemme');
  }
};

// Add a click event listener to the H button
document.getElementById('Hbtn').onclick = function () {
  let storedName = localStorage.getItem('userName');

  if (storedName) {
    // Check if the user has already voted
    let hasVoted = localStorage.getItem(`${storedName}_voted`);
    if (hasVoted) {
      alert('Du kan bare stemme en gang');
    } else {
      // Increment the H count
      Hcount++;

      // Update the H count label
      document.getElementById('HcountLabel').innerHTML = 'H: ' + Hcount;

      // Update the chart data for the H count
      myChart.data.datasets[0].data[1] = Hcount;
      myChart.update();

      // Save the H count to local storage
      localStorage.setItem('Hcount', Hcount);

      // Mark the user as voted to prevent multiple votes
      localStorage.setItem(`${storedName}_voted`, true);
    }
  } else {
    alert('Registrer deg for å stemme');
  }
};

// Add a click event listener to the SP button
document.getElementById('SPbtn').onclick = function () {
  let storedName = localStorage.getItem('userName');

  if (storedName) {
    // Check if the user has already voted
    let hasVoted = localStorage.getItem(`${storedName}_voted`);
    if (hasVoted) {
      alert('Du kan bare stemme en gang');
    } else {
      // Increment the SP count
      SPcount++;

      // Update the SP count label
      document.getElementById('SPcountLabel').innerHTML = 'SP: ' + SPcount;

      // Update the chart data for the SP count
      myChart.data.datasets[0].data[2] = SPcount;
      myChart.update();

      // Save the SP count to local storage
      localStorage.setItem('SPcount', SPcount);

      // Mark the user as voted to prevent multiple votes
      localStorage.setItem(`${storedName}_voted`, true);
    }
  } else {
    alert('Registrer deg for å stemme');
  }
};

// Add a click event listener to the FRP button
document.getElementById('FRPbtn').onclick = function () {
  let storedName = localStorage.getItem('userName');

  if (storedName) {
    // Check if the user has already voted
    let hasVoted = localStorage.getItem(`${storedName}_voted`);
    if (hasVoted) {
      alert('Du kan bare stemme en gang');
    } else {
      // Increment the FRP count
      FRPcount++;

      // Update the FRP count label
      document.getElementById('FRPcountLabel').innerHTML = 'FRP: ' + FRPcount;

      // Update the chart data for the FRP count
      myChart.data.datasets[0].data[3] = FRPcount;
      myChart.update();

      // Save the FRP count to local storage
      localStorage.setItem('FRPcount', FRPcount);

      // Mark the user as voted to prevent multiple votes
      localStorage.setItem(`${storedName}_voted`, true);
    }
  } else {
    alert('Registrer deg for å stemme');
  }
};

// Add a click event listener to the MDG button
document.getElementById('MDGbtn').onclick = function () {
  let storedName = localStorage.getItem('userName');

  if (storedName) {
    // Check if the user has already voted
    let hasVoted = localStorage.getItem(`${storedName}_voted`);
    if (hasVoted) {
      alert('Du kan bare stemme en gang');
    } else {
      // Increment the MDG count
      MDGcount++;

      // Update the MDG count label
      document.getElementById('MDGcountLabel').innerHTML = 'MDG: ' + MDGcount;

      // Update the chart data for the MDG count
      myChart.data.datasets[0].data[4] = MDGcount;
      myChart.update();

      // Save the MDG count to local storage
      localStorage.setItem('MDGcount', MDGcount);

      // Mark the user as voted to prevent multiple votes
      localStorage.setItem(`${storedName}_voted`, true);
    }
  } else {
    alert('Registrer deg for å stemme');
  }
};

// Add a click event listener to the clear all button
document.getElementById('clearAll').onclick = function () {
  // Reset all counters
  APcount = 0;
  Hcount = 0;
  SPcount = 0;
  FRPcount = 0;
  MDGcount = 0;

  localStorage.clear();
  let displayUserName = document.getElementById('displayUserName');
  displayUserName.innerHTML = 'Bruker: Ikke registrert';

  //Update labels
  document.getElementById('APcountLabel').innerHTML = 'AP: ' + APcount;
  document.getElementById('HcountLabel').innerHTML = 'H: ' + Hcount;
  document.getElementById('SPcountLabel').innerHTML = 'SP: ' + SPcount;
  document.getElementById('FRPcountLabel').innerHTML = 'FRP: ' + FRPcount;
  document.getElementById('MDGcountLabel').innerHTML = 'MDG: ' + MDGcount;

  //Update chart data
  myChart.data.datasets[0].data[0] = APcount;
  myChart.data.datasets[0].data[1] = Hcount;
  myChart.data.datasets[0].data[2] = SPcount;
  myChart.data.datasets[0].data[3] = FRPcount;
  myChart.data.datasets[0].data[4] = MDGcount;

  myChart.update(); // Refresh chart
};
