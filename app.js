
// Create canvas element

let canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas)
document.body.appendChild(canvas);


// Get canvas context 

const ctx = canvas.getContext("2d");

const particles = [];
for (let i = 0; i < 20; i++ ){
    particles.push({
        x : Math.random() * canvas.width,
        y : Math.random() * canvas.height,
        size : Math.random() * 5 + 1,
        speedX : Math.random() * 3 - 1.5,
        speedY : Math.random() * 3 - 1.5,
        color: `hsl(${Math.random() * 360}, 50%, 50%)`
    });
}

// Funtion to animate the particles 

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach( (particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        ctx.fillStyle = particle.color;
        ctx.font = "bold 20px arial";
        ctx.strokeText(index, particle.x, particle.y);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        if (particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height){
                particle.x = Math.random() * canvas.width
                particle.y = Math.random() * canvas.height
            }

    } )

    requestAnimationFrame(animate);
}

animate()