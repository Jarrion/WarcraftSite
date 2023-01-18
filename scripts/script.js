const track = document.getElementById("expansion-list");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    const restrainedPercentage = Math.max(Math.min(nextPercentage, 0), -100);

    track.dataset.percentage = restrainedPercentage;

    track.style.transform = `translate(${restrainedPercentage}%, -50%)`;
}