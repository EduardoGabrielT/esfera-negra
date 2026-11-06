// Arquivo para gerenciar cenas e eventos extras na galáxia

export function checkExtraGalacticEvents(playerScore, shipShields) {
    // Exemplo de evento baseado na pontuação ou tempo de jogo
    if (score > 500 && score % 500 === 0) {
        console.log("Alerta: Tempestade de Matéria Escura se aproximando!");
    }
}

export function spawnSpecialAlienEncounter() {
    // Aqui você pode adicionar novas naves ou chefões para interagir com o index.html
    return {
        type: "Mothership",
        dangerLevel: "High"
    };
}