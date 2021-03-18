// Function to initialize a new game
const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player-winner');
    player1El.classList.remove('player-winner');
    player0El.classList.add('player-active');
    player1El.classList.remove('player-active');
}

// Function to switch players
const switchPlayer = function() {
    // Switching to next player
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = (activePlayer === 0 ? 1 : 0);
    // Players' background-color change
    player0El.classList.toggle("player-active");
    player1El.classList.toggle("player-active");
}