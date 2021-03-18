// Function to switch players
const switchPlayer = function() {
    // Switching to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = (activePlayer === 0 ? 1 : 0);
    // Players' background-color change
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}