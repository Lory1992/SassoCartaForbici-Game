function playGame(playerChoice) {
    const choices = ['sasso', 'carta', 'forbici'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    // Logica del gioco
    if (playerChoice === computerChoice) {
        result = 'Pareggio! Entrambi avete scelto ' + playerChoice;
    } else if (
        (playerChoice === 'sasso' && computerChoice === 'forbici') ||
        (playerChoice === 'forbici' && computerChoice === 'carta') ||
        (playerChoice === 'carta' && computerChoice === 'sasso')
    ) {
        result = 'Hai vinto! Il computer ha scelto ' + computerChoice;
    } else {
        result = 'Hai perso! Il computer ha scelto ' + computerChoice;
    }

    // Mostra il risultato
    document.getElementById('result').textContent = result;
}
