
let projects = {
    'project1': {
        name: 'Gigify',
        state: true,
        technologies: ['html', 'bulma', 'jquery', 'javascript', 'firebase'],
        url: 'https://tzlomke.github.io/Project_1/',
        card_image_link: 'assets/images/Gigify.png',
    },
    'project2': {
        name: 'C.J. Frei Art Portfolio',
        state: false,
        technologies: ['html', 'materialize', 'javascript', 'jquery', 'sequelize', 'express', 'firebase', 'mysql'],
        url: 'https://thawing-ravine-93395.herokuapp.com/',
        card_image_link: 'assets/images/art_portfolio.PNG'
    },
    'project3': {
        name: 'FRND-FNDR',
        state: false,
        technologies: ['html', 'css', 'javascript', 'node.js', 'express'],
        url: 'https://intense-inlet-81081.herokuapp.com/',
        card_image_link: 'assets/images/frnd-fndr.PNG'
    },
    'project4': {
        name: 'Bamazon',
        state: false,
        technologies: ['node.js', 'mysql'],
        url: 'https://github.com/BrantKeener/bamazon/blob/master/README.md',
        card_image_link: 'assets/images/bamazon.PNG'
    },
    'project5': {
        name: 'Burger Sequelized',
        state: false,
        technologies: ['html', 'css', 'javascript', 'mysql', 'express', 'sequelize', 'handlebars'],
        url: 'https://damp-escarpment-30359.herokuapp.com/',
        card_image_link: 'assets/images/burger.PNG'
    },
    'project6': {
        name: 'Life Saving Transfusion',
        state: false,
        technologies: ['html', 'css', 'javascript'],
        url: 'https://brantkeener.github.io/Word_Guess_Game/',
        card_image_link: 'assets/images/LifeSavingTransfusion.png'
    }
};

let portfolioPosition = 0;

// Ensure that the document is loaded
document.addEventListener('DOMContentLoaded', function() {

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