const abilityScores = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    return [rollDie(), rollDie(), rollDie(), rollDie()];
}

const rollButton = document.querySelector("#roll");
const rollResultDiv = document.querySelector("#roll-result");

rollButton.addEventListener("click", onRollButtonClick);

function onRollButtonClick() {
    const rollResult = rollDice().sort();
    rollResult.shift();

    rollResultDiv.textContent = rollResult.reduce((sum, value) => sum + value, 0);
}

function renderAbilityScores(abilities) {
    return abilities
        .map(renderAbilityScore)
        .join("");
}

function renderAbilityScore(ability) {
    return `
        <div class="stats__stat">
            <div class="stats__name">${ability}</div>
            <div class="stats__score"></div>
            <div class="stats__modifier"></div>
        </div>
    `;
}

const abilityScoreContainer = document.querySelector(".stats");
abilityScoreContainer.innerHTML = renderAbilityScores(abilityScores);

abilityScoreContainer.addEventListener("click", onAbilityScoreClick);

function onAbilityScoreClick(event) {
    if (!event.target.closest(".stats__stat")) { 
        return; 
    }

    const statContainer = event.target.closest(".stats__stat");
    const statScoreContainer = statContainer.querySelector(".stats__score");

    statScoreContainer.textContent = rollResultDiv.textContent;
    rollResultDiv.textContent = "";
}

const calculateModifiersButton = document.querySelector("#calculate-modifiers");
calculateModifiersButton.addEventListener("click", onCalculateModifiersClick);

function onCalculateModifiersClick() {
    const statContainers = abilityScoreContainer.querySelectorAll(".stats__stat");
    
    statContainers.forEach(container => {
        const scoreElement = container.querySelector(".stats__score");
        if (scoreElement.textContent === "") {
            return;
        }
        const modifierElement = container.querySelector(".stats__modifier");

        const calculatedModifier = Math.floor((parseInt(scoreElement.textContent) - 10) / 2);
        const modifierString = calculatedModifier > 0 ? `+${calculatedModifier}` : calculatedModifier
        modifierElement.textContent = modifierString;
    })
}