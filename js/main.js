function randomizeClassColor(id) {
    // random float between 0-1 * 4 gives uniform distribution 0-3
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            document.getElementById(id).style.color = 'var(--orange)';
            break;
        case 1:
            document.getElementById(id).style.color = 'var(--spotify-green)';
            break;
        case 2:
            document.getElementById(id).style.color = 'var(--purple)';
            break;
        case 3:
            document.getElementById(id).style.color = 'var(--linkedin-blue)';
            break;
    }

}