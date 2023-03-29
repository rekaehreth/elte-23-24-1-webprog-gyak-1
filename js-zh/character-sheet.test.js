const tests = [
    {
        testName: "rollDice function returns array containing 4 numbers between 1 and 6",
        points: 2,
        excerciseNumber: 1,
        assertion: () => {
            if (typeof rollDice === "undefined") {
                return false;
            }
            const rollResults = [rollDice(), rollDice()];

            const rollsAreDifferent = rollResults[0].join('') != rollResults[1].join('');
            const rollsAreValid = rollResults.every((rollResult) => {
                const numberOfRollsIsOK = rollResult.length === 4;
                const allNumbersAreInRange = rollResult.every((roll) => {
                    return Number.isInteger(roll) && roll >= 1 && roll <= 6;
                });
    
                return numberOfRollsIsOK && allNumbersAreInRange;
            });

            return rollsAreDifferent && rollsAreValid;
        }
    }, 
    {
        testName: "clicking on 'Roll 4d6 drop lowest' button writes roll result to roll-result div",
        points: 2,
        excerciseNumber: 2,
        assertion: () => {
            if (typeof rollDice === "undefined") {
                return false;
            }
            const rollDiceOriginal = rollDice;
            rollDice = () => [1, 2, 3, 6];

            const rollButton = document.querySelector("#roll");
            rollButton.click();

            const rollResultDiv = document.querySelector("#roll-result");
            const rollResultIsOK = rollResultDiv.textContent === "11";

            rollDice = rollDiceOriginal;
            rollResultDiv.textContent = "";

            return rollResultIsOK;
        }
    }, 
    {
        testName: "ability score containers are generated according to template",
        points: 2,
        excerciseNumber: 3,
        assertion: () => {
            if (typeof abilityScores === "undefined") {
                return false;
            }
            const abilityScoreContainer = document.querySelector(".stats");
            const abilityScoreContainers = [...abilityScoreContainer.querySelectorAll(".stats__stat")];

            const numberOfContainersIsOK = abilityScoreContainers.length === 6;
            const abilityScoreTitles = abilityScoreContainers.map((container) => 
                container.querySelector(".stats__name").textContent
            );
            const titlesAreOK = abilityScoreTitles.toString() === abilityScores.toString();
            const containersHaveAllRequiredElements = abilityScoreContainers.every((container) => {
                const hasScoreContainer = container.querySelector(".stats__score") !== null;
                const hasModifierContainer = container.querySelector(".stats__modifier") !== null;

                return hasScoreContainer && hasModifierContainer;
            });

            return numberOfContainersIsOK && titlesAreOK && containersHaveAllRequiredElements;
        }
    }, 
    {
        testName: "clicking the ability score container copies the roll result to the container",
        points: 3,
        excerciseNumber: 4,
        assertion: () => {
            const rollResult = "8";
            const rollResultDiv = document.querySelector("#roll-result");
            rollResultDiv.textContent = rollResult;
            
            const constitutionScoreContainer = document.querySelector(".stats__stat:nth-of-type(3)");

            if (constitutionScoreContainer === null) {
                return false;
            }

            constitutionScoreContainer.click();

            const constitutionScoreElement = constitutionScoreContainer.querySelector(".stats__score");
            const scoreIsCorrect = constitutionScoreElement.textContent === rollResult;
            
            rollResultDiv.textContent = "";
            constitutionScoreElement.textContent = "";
            return scoreIsCorrect;
        }
    }, 
    {
        testName: "clicking the ability score container empties the roll result container",
        points: 1,
        excerciseNumber: 4,
        assertion: () => {
            const rollResultDiv = document.querySelector("#roll-result");
            rollResultDiv.textContent = "16";
            const charismaScoreContainer = document.querySelector(".stats__stat:nth-of-type(6)");

            if (charismaScoreContainer === null) {
                rollResultDiv.textContent = "";
                return false;
            }

            charismaScoreContainer.click();

            const scoreIsCorrect = rollResultDiv.textContent === "";
            
            rollResultDiv.textContent = "";
            const charismaScoreElement = charismaScoreContainer.querySelector(".stats__score");
            charismaScoreElement.textContent = "";
            return scoreIsCorrect;
        }
    }, 
    {
        testName: "clicking the ability score container calculates the corresponding modifier",
        points: 2,
        excerciseNumber: 5,
        assertion: () => {
            const dexterityScoreContainer = document.querySelector(".stats__stat:nth-of-type(2)");

            if (dexterityScoreContainer === null) {
                return false;
            }

            const dexterityScoreElement = dexterityScoreContainer.querySelector(".stats__score");
            dexterityScoreElement.textContent = "15";

            const calculateButton = document.querySelector("#calculate-modifiers");
            calculateButton.click();

            const dexterityModifierElement = dexterityScoreContainer.querySelector(".stats__modifier");
            const modifierIsCorrect = dexterityModifierElement.textContent === "+2";
            
            dexterityScoreElement.textContent = "";
            dexterityModifierElement.textContent = "";
            return modifierIsCorrect;
        }
    }, 
];

tests.forEach(({ testName, points, excerciseNumber, assertion }) => {
    console.assert(assertion(), `Failing the following test-case for excercise ${excerciseNumber} results in losing ${points} point(s) out of 12. \n \n Test case: ${testName}`);
});
