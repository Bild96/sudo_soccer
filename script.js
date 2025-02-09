
function predictMatch() {
  const homeTeam = document.getElementById('homeTeam').value;
  const awayTeam = document.getElementById('awayTeam').value;
  
  if (!homeTeam || !awayTeam) {
    alert('Please enter both team names');
    return;
  }

  // Simple prediction logic based on random numbers and team names
  const homeStrength = Math.random() * 5;
  const awayStrength = Math.random() * 5;
  
  const homeGoals = Math.floor(homeStrength);
  const awayGoals = Math.floor(awayStrength);
  
  const predictionDiv = document.getElementById('prediction');
  predictionDiv.textContent = `Predicted Score: ${homeTeam} ${homeGoals} - ${awayGoals} ${awayTeam}`;
  predictionDiv.style.background = '#e8f5e9';
}
