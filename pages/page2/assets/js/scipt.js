document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.querySelector(".title");
    const text = "Fundamentals Demo";
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

function runDemo() {
    let number = parseInt(document.getElementById('userInput').value);
    let output = '';

    if (isNaN(number) || number <= 0) {
        output = 'Please enter a positive number.';
    } else {
        output += `You entered: ${number}\n`;

        output += 'Even numbers from 1 to your number:\n';
        for (let i = 1; i <= number; i++) {
            if (i % 2 === 0) {
                output += `${i} `;
            }
        }
    }

    document.getElementById('output').innerText = output;
}
