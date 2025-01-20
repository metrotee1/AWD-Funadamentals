document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.querySelector(".title");
    const text = "FUNDAMENTALS";
    const typingSpeed = 200;
    const cursorBlinkSpeed = 700;
    const delayBeforeStart = 500;

    let index = 0;

    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.style.color = "var(--color-accent-1)";
    cursor.style.fontWeight = "bold";
    cursor.style.fontSize = "6rem";
    cursor.style.animation = `blink ${cursorBlinkSpeed}ms step-end infinite`;
    titleElement.innerHTML = "";
    titleElement.appendChild(cursor);

    const typeText = () => {
        if (index < text.length) {
            titleElement.insertBefore(
                document.createTextNode(text[index]),
                cursor
            );
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            cursor.style.display = "none";
        }
    };

    setTimeout(typeText, delayBeforeStart);
});

const style = document.createElement("style");
style.textContent = `
@keyframes blink {
    50% {
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

