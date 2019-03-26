function randomizeClassColor(id) {
    // random float between 0-1 * big prime modulo 4
    switch (Math.floor(Math.random() * 9929) % 4) {
        case 0:
            document.getElementById(id).style.color = 'var(--orange)';
            break;
        case 1:
            document.getElementById(id).style.color = 'var(--green)';
            break;
        case 2:
            document.getElementById(id).style.color = 'var(--purple)';
            break;
        case 3:
            document.getElementById(id).style.color = 'var(--linkedin-blue)';
            break;
    }

}