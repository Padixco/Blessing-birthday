document.getElementById("startButton").addEventListener("click", function() {
    const name = prompt("Are you Blessing? (Yes/No)");
    if (name && name.toLowerCase() === "yes") {
        document.getElementById("birthdayMusic").play();
        startConfetti();
    } else {
        alert("That's okay! Have a great day!");
    }
});

function startConfetti() {
    document.getElementById("confetti").style.display = "block";
    var confettiCanvas = document.createElement("canvas");
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    document.getElementById("confetti").appendChild(confettiCanvas);

    var ctx = confettiCanvas.getContext("2d");
    var particles = [];
    var colors = ["#ff0", "#0f0", "#00f", "#f00", "#ff00ff", "#00ffff"];

    for (var i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            radius: Math.random() * 5 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 2 * Math.PI,
            speed: Math.random() * 5 + 2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        particles.forEach(function(p) {
            p.y += p.speed;
            p.x += Math.sin(p.rotation) * 0.5;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}
