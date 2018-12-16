
let projects = {'project1': true, 
'project2': false, 
'project3': false, 
'project4': false, 
'project5': false, 
'project6': false};

let portfolioPosition = 0;

// Event delegator for mouse clicks
document.addEventListener('click', event => {
    let listen = '';
    if(event.target.className.baseVal) {
        listen = event.target.className.baseVal;
    } else {
        listen = event.target.id;
    };
    switch(listen) {
        case 'primary right_arrow':
        case 'secondary right_arrow':
        moveCards('right');
        break;
        case 'primary left_arrow':
        case 'secondary left_arrow':
        moveCards('left');
        break;
    };
});

function moveCards(direction) {
    let change = false;
    if(direction === 'right' && projects.project6 !== true) {
        portfolioPosition -= 650;
        let positioner = `${portfolioPosition.toString()}px`;
        for(let i = 1; i <= Object.keys(projects).length; i++) {
            let cards = document.getElementById(`project${[i]}`);
            let projectCount = `project${[i]}`;
            cards.style.left = positioner;
            if(projects[projectCount] === true && change === false) {
                change = true;
                projects[projectCount] = false;
                projects[`project${[i + 1]}`] = true;
            };
        };
    } else if(direction === 'left' && projects.project1 !== true) {
        portfolioPosition += 650;
        let positioner = `${portfolioPosition.toString()}px`;
        for(let i = 1; i <= Object.keys(projects).length; i++) {
            let cards = document.getElementById(`project${[i]}`);
            let projectCount = `project${[i]}`;
            cards.style.left = positioner;
            if(projects[projectCount] === true && change === false) {
                change = true;
                projects[projectCount] = false;
                projects[`project${[i - 1]}`] = true;
            };
        };
    };
    hideShowCards();
};

function hideShowCards() {
    for(let prop in projects) {
        if(!projects[prop]) {
            document.getElementById(prop).style.visibility = 'hidden';
        } else {
            document.getElementById(prop).style.visibility = 'visible';
        }
    };
};