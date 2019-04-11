
let projects = [
    {
        name: 'Re:invent',
        state: true,
        technologies: ['materialize', 'react', 'mongodb', 'node.js', 'express', 'passport', 'redux'],
        url: 'http://reinvent-io.herokuapp.com/',
        card_image_link: 'assets/images/reinvent_cap.PNG'
    },
    {
        name: 'Gigify',
        state: false,
        technologies: ['html', 'bulma', 'jquery', 'javascript', 'firebase'],
        url: 'https://tzlomke.github.io/gigify/',
        card_image_link: 'assets/images/Gigify.png',
    },
    {
        name: 'C.J. Frei Art Portfolio',
        state: false,
        technologies: ['html', 'materialize', 'javascript', 'jquery', 'sequelize', 'express', 'firebase', 'mysql'],
        url: 'https://thawing-ravine-93395.herokuapp.com/',
        card_image_link: 'assets/images/art_portfolio.PNG'
    },
    {
        name: 'FRND-FNDR',
        state: false,
        technologies: ['html', 'css', 'javascript', 'node.js', 'express'],
        url: 'https://intense-inlet-81081.herokuapp.com/',
        card_image_link: 'assets/images/frnd-fndr.PNG'
    },
    {
        name: 'Bamazon',
        state: false,
        technologies: ['node.js', 'mysql'],
        url: 'https://github.com/BrantKeener/bamazon/blob/master/README.md',
        card_image_link: 'assets/images/bamazon.PNG'
    },
    {
        name: 'Burger Sequelized',
        state: false,
        technologies: ['html', 'css', 'javascript', 'mysql', 'express', 'sequelize', 'handlebars'],
        url: 'https://damp-escarpment-30359.herokuapp.com/',
        card_image_link: 'assets/images/burger.PNG'
    }
];

let portfolioPosition = 0;

// Ensure that the document is loaded
document.addEventListener('DOMContentLoaded', function() {

    (cardDeckBuild = () => {
        const cardBin = document.getElementById('card_bin');
        projects.forEach((project, index) => {
            const card = document.createElement('a');
            const img = document.createElement('img');
            img.src = project.card_image_link;
            img.alt = project.name;
            img.className = 'cards';
            if(index === 0 || index === 5) {
                card.setAttribute('data-active', project.state);
            };
            card.href = project.url;
            card.className = 'project_card';
            card.id = `project${index}`;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.style.left ='0px';
            card.append(img);
            cardBin.appendChild(card);
        });
    })();


    const moveCards = (direction) => {
        // Each project has a data-active state. 
        // If this state is true on either of the end cards, it prevents
        // Movement in that direction.
        const startProject = document.getElementById('project0');
        const startProjActive = startProject.getAttribute('data-active');
        const endProject = document.getElementById('project5');
        const endProjActive = endProject.getAttribute('data-active');
        const projectCards = document.getElementsByClassName('project_card');
        console.log(direction === 'left');
        console.log(startProjActive !== 'true');

        if(direction === 'right' && endProjActive !== 'true') {
            startProject.setAttribute('data-active', false);
            portfolioPosition -= 650;
            let positioner = `${portfolioPosition.toString()}px`;
            for (let card of projectCards) {
                card.style.left = positioner;
            };
        } else if(direction === 'left' && startProjActive !== 'true') {
            endProject.setAttribute('data-active', false);
            portfolioPosition += 650;
            let positioner = `${portfolioPosition.toString()}px`;
            for (let card of projectCards) {
                card.style.left = positioner;
            };
        };
        if(portfolioPosition === 0) {
            startProject.setAttribute('data-active', true);
        };
        if(portfolioPosition === -3250) {
            endProject.setAttribute('data-active', true);
        };
    };

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




});