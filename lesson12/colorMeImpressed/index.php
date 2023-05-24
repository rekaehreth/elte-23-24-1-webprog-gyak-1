<script type="module">
    const colorButton = document.querySelector('#colorButton');
    colorButton.addEventListener('click', async () => {
        const response = await fetch("color.php");
        const data = await response.json();
        colorButton.style.backgroundColor = data.color;
    });
</script>

<button id="colorButton">Color Me Impressed</button>