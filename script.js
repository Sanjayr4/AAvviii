
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("flower-container");
    const flowers = ["🌸","🐣"];
    const count = 100;

    for (let i = 0; i < count; i++) {
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = 5 + Math.random() * 5 + "s";
        flower.style.animationDelay = Math.random() * 1.5 + "s";
        flower.style.fontSize = 18 + Math.random() * 16 + "px";

        container.appendChild(flower);
    }

    setTimeout(() => {
        container.remove();
    }, 10000);
});