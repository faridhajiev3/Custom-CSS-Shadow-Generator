const hOffset = document.getElementById("hOffset");
const vOffset = document.getElementById("vOffset");
const rBlur = document.getElementById("rBlur");
const spread = document.getElementById("spread");
const color = document.getElementById("color");
const opacity = document.getElementById("opacity");

const previewBox = document.getElementById("previewBox");
const cssCode = document.getElementById("cssCode");

function updateShadow() {
    const rgbaColor = hexToRgba(color.value, opacity.value);
    const shadow = `${hOffset.value}px ${vOffset.value}px ${rBlur.value}px ${spread.value}px ${rgbaColor}`;

    previewBox.style.boxShadow = shadow;
    cssCode.value = `box-shadow: ${shadow};`;
}

function hexToRgba(hex, port) {
    const a = parseInt(hex.substr(1, 2), 16);
    const b = parseInt(hex.substr(3, 2), 16);
    const c = parseInt(hex.substr(5, 2), 16);
    return `rgba(${a}, ${b}, ${c}, ${port})`;
}

function copyCSS() {
    document.execCommand("copy");
    
}

[hOffset, vOffset, rBlur, spread, color, opacity].forEach(input => {
    input.addEventListener("input", updateShadow);
});
