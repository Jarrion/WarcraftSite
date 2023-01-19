const track = document.getElementById("expansion-list");
const images = document.querySelectorAll("#expansion-option > .image");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(){
        const expansion = this.dataset.expansion;
        location.href = "selection.php?expansion=" + expansion;
    });
}

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

    //track.style.transform = `translate(${restrainedPercentage}%, -50%)`;

    track.animate({
        transform: `translate(${restrainedPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
        //image.style.objectPosition = `${restrainedPercentage + 100}% 50%`;

        image.animate({
            objectPosition: `${restrainedPercentage + 100}% 50%`
        }, { duration: 1200, fill: "forwards"});
    }
}