
let projects = {
    'project1': {
        name: 'Life Saving Transfusion',
        state: true,
        technologies: ['html', 'css', 'javascript']
    },
    'project2': {
        name: 'Star Wars Duel',
        state: false,
        technologies: ['html', 'css', 'javascript', 'jquery']
    },
    'project3': {
        name: 'Trivia Game',
        state: false,
        technologies: ['html', 'css', 'javascript', 'jquery']
    },
    'project4': {
        name: 'Rock Paper Scissors',
        state: false,
        technologies: ['html', 'css', 'javascript', 'jquery', 'firebase']
    },
    'project5': {
        name: 'Gigify',
        state: false,
        technologies: ['html', 'css', 'javascript', 'jquery', 'firebase']
    },
    'project6': {
        name: 'Star Wars Duel',
        state: false,
        technologies: ['html', 'css', 'javascript', 'jquery']
    }
};

let portfolioPosition = 0;

// Ensure that the document is loaded
document.addEventListener("DOMContentLoaded", function() {

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
        // Each project has a data-active state. 
        // If this state is true on either of the end cards, it prevents
        // Movement in that direction.
        let change = false;
        if(direction === 'right' && projects.project6.state !== true) {
            console.log(portfolioPosition);
            portfolioPosition -= 650;
            let positioner = `${portfolioPosition.toString()}px`;
            for(let i = 1; i <= Object.keys(projects).length; i++) {
                let cards = document.getElementById(`project${[i]}`);
                let projectCount = `project${[i]}`;
                cards.style.left = positioner;
                if(projects[projectCount].state === true && change === false) {
                    change = true;
                    projects[projectCount].state = false;
                    projects[`project${[i + 1]}`].state = true;
                };
            };
        } else if(direction === 'left' && projects.project1.state !== true) {
            portfolioPosition += 650;
            let positioner = `${portfolioPosition.toString()}px`;
            for(let i = 1; i <= Object.keys(projects).length; i++) {
                let cards = document.getElementById(`project${[i]}`);
                let projectCount = `project${[i]}`;
                cards.style.left = positioner;
                if(projects[projectCount].state === true && change === false) {
                    change = true;
                    projects[projectCount].state = false;
                    projects[`project${[i - 1]}`].state = true;
                };
            };
        };
    };
});