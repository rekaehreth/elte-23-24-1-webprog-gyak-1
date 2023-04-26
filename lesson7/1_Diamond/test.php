<?php
$alphabet = array(
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z",
);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="diamond.css" />
</head>
<body>
    <label for="diamondInput">The widest point of the diamond: </label>
    <input type="text" id="diamondInput" name="name">
    <button id="generateButton">Generate</button>
    
    <p id="diamondText"></p>
    <div id="diamondContainer" style="white-space: pre-wrap;font-family: monospace, monospace;" hidden></div>
    <script>
      const alphabet = <?php echo(json_encode($alphabet)) ?>;

      const generateButton = document.querySelector("#generateButton");
      const diamondInput = document.querySelector("#diamondInput");
      const diamondContainerDiv = document.querySelector("#diamondContainer");
      const textContainer = document.querySelector("#diamondText");

      function isInputValid() {
          const input = diamondInput.value;
          const isCorrectLength = input.length === 1;
          const isInputCapital = input.toUpperCase() === input; 
          return isCorrectLength && isInputCapital;
      }

      function createDiamondRow(index, maxWidth) {
        const isFirstLetter = index === maxWidth;
        const letterIndex = maxWidth - index;
        const letter = alphabet[letterIndex];
        let row = " ".repeat(index) + letter;

        if (!isFirstLetter) {
          const spaceBetween = 2 * letterIndex - 1;
          row += " ".repeat(spaceBetween) + letter;
        }

        row += " ".repeat(index) + "\n";
        return row;
      }

      function printDiamond(lastLetter) {
        let diamond = "";
        const width = alphabet.findIndex((letter) => letter === lastLetter);

        for (let i = width; i >= 0; --i) {
          diamond += createDiamondRow(i, width);
        }

        for (let i = 1; i <= width; ++i) {
          diamond += createDiamondRow(i, width);
        }

        return diamond;
      }

      generateButton.addEventListener('click', () => {
          diamondContainerDiv.setAttribute("hidden", true);

          if(!isInputValid()) {
              textContainer.removeAttribute("hidden");
              textContainer.innerText = "Please provide a valid input!";
              return;
          }

          textContainer.removeAttribute("hidden");
          textContainer.innerText = "The generated diamond is: \n";
          diamondContainerDiv.removeAttribute("hidden");
          diamondContainerDiv.innerText = printDiamond(diamondInput.value);
      });
    </script>
</body>
</html>