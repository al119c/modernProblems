const COLLECTION = document.querySelectorAll(".piano-button");
const PIANO = document.getElementById('piano');

const startSound = (event) => {
    event.target.classList.add('active');
};

const stopSound = (event) => {
    event.target.classList.remove('active');
};

const sartCorrespondOver = (event) => {
    if (event.target.classList.contains('piano-button')) {
        event.target.classList.add('active');

        COLLECTION.forEach((e) => {
            e.addEventListener('mouseover', startSound);
            e.addEventListener('mouseout', stopSound);
        });
    }
};

  

const stopCorrespondOver = () => {
    COLLECTION.forEach((e) => {
        e.classList.remove('active');
        e.removeEventListener('mouseover', startSound);
        e.removeEventListener('mouseout', stopSound);
    });
};

PIANO.addEventListener("mousedown", sartCorrespondOver, false);
PIANO.addEventListener("mouseup", stopCorrespondOver);