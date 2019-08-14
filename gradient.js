function changeColour(colors) {
    let len = colors.length;
    let bgChange = `linear-gradient(to ${changeOrientation()}`
    for (let i = 0; i < len; i++) {
        bgChange += `, ${colors[i]}`;
    }
    bgChange += ")";
    document.body.style.background = bgChange;
}

function changeOrientation() {
    const orients = ["left", "top", "right"];
    let randomOrient = Math.floor(Math.random() * orients.length);
    return orients[randomOrient];
}

function listCredentials(credit) {
    let uiTag = document.getElementById("Credentials");
    uiTag.innerHTML = `Credits: ${credit}`
    credit.replace(/\s/g, '');
    uiTag.href = `https://uigradients.com/#${credit}`
}

function pickGradient() {
    fetch('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(gradients) {
        let randomBg = gradients[Math.floor(Math.random() * gradients.length)]
        changeColour(randomBg.colors);
        listCredentials(randomBg.name)
    });
}

pickGradient();
