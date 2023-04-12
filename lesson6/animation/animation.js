const context = document.getElementById("animatedCanvas").getContext("2d");
let circles = [];

function getRandomInteger(minValue, maxValue) { 
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function drawCircle(context, center, radius, color) {
    context.beginPath();
    context.fillStyle = `rgba(${color.R}, ${color.G}, ${color.B}, 0.6)`;
    context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
    context.fill();
}

function drawRandomCircle() {
    let radius = getRandomInteger(10, 30);
    let center = {
        x: getRandomInteger(0 + radius, context.canvas.width - radius), 
        y: getRandomInteger(0 + radius, context.canvas.height - radius),
    };
    let color = {
        R: getRandomInteger(0, 255),
        G: getRandomInteger(0, 255),
        B: getRandomInteger(0, 255),
    };
    
    drawCircle(context, center, radius, color);
    circles.push({radius, center, color});
}

function enlargeAllCircles() {
    circles = circles.map(({radius, center, color}) => {return {radius: radius + 0.1, center, color}});

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    circles.forEach(circle => drawCircle(context, circle.center, circle.radius, circle.color));
    requestAnimationFrame(enlargeAllCircles);
}

setInterval(drawRandomCircle, 1000);

enlargeAllCircles();