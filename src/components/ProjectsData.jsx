const projects = [
    {
        id: 1,
        name: "Portfolio",
        description: "Created a portfolio website which presents me as a dev and IT professional. The purpose was to provide an online portfolio that provides information about me, my skills, interests, professional knowledge and a showcase of my work.",
        deliverables: ["Developed semantically and syntactically valid and almost complete HTML/XHTML documents.", "Developed wireframes which address the design brief and components required.", "Outlined a sitemap which conforms with the design brief.", "Utilised HTML and CSS to create components which communicates text and graphical content with clarity.", "Developed a website using HTML documents which conform with the design brief.", "Utilised HTML5 semantic elements to add meaning and cater for accessibility.", "Utilised Flexbox to create a range of functional web page elements.", "Outlined how planned pages, components of pages, and styling of pages meets the goals of the website within the context of the intended website’s audience."],
        techStack: ["CSS", "diagrams.net", "Figma", "Git", "GitHub", "HTML", "Markdown", "Netlify", "Visual Studio Code"],
        image: "src/assets/project1.png",
        link: "",
        gitHubLink: "https://github.com/kimnle/T1A2-Portfolio",
        deployedLink: "https://kimle.netlify.app/",
    },
    {
        id: 2,
        name: "Terminal Application",
        description: "Designed, implemented and tested a terminal application and throughout the process demonstrated that I am able to use a range of developer tools.",
        assignment: "I designed a Number Guessing Game that begins by greeting the player after they input their name. Players choose from multiple difficulty levels, each defining a speficic range for the random number and a limited number of attempts. Players input guesses within the selected range and the game provides real-time feedback, indicating whether their guess is too high, too low, or correct. It also tracks the number of attempts used, keeping players informed of their remaining attempts. Upon guessing the correct number, the player wins, and their score is saved to a CSV file for future reference.",
        deliverables: ["Created an application which handles errors.", "Utilised variables and variable scope by declaring them correctly, assigning values to them, and utilising variable scope in block coding with control structures.", "Utilised loops and conditional control structures by using them correctly to manage control flow of an application.", "Utilised a library by including an appropriate import statement in the code.", "Utilised functions significantly from an imported library.", "Wrote simple functions and used them in code.", "Utilised standard input and output in a simple program.", "Applied DRY (Don't Repeat Yourself) coding principles to most of the code.", "Applied established code style and conventions in the specified programming language consistently in all code produced.", "Created an application which runs and has features that are consistent with the development plan.", "Designed appropriate documentation or help file for a user to utilise the features of the application.", "Demonstrated algorithmic thinking applied to programming by explaining logic in a program.", "Utilised source control to version and trace the development of an application.", "Utilised project management software to track the development of an application.", "Wrote a simple script which facilitate the execution of the application."],
        techStack: ["diagrams.net", "Git", "GitHub", "Markdown", "Python", "Trello", "Visual Studio Code"],
        image: "src/assets/project2.png",
        link: "",
        gitHubLink: "https://github.com/kimnle/T1A3-TerminalApp",
    },
    {
        id: 3,
        name: "API Webserver",
        description: "In order to demonstrate my understanding of fundamental programming concepts and database design, I was required to develop an API that works with a database, implementing functionality suitable for a realistic API concept.",
        assignment: "I developed a Book Club API to serve as a centralised platform for accessing book club information, including their selections and the reasoning behind their choices. The rise of new book clubs has grown with the surge in reading popularity, which has made it increasingly difficult to navigate multiple websites to find relevant details. This API streamlines the process, allowing users to access all the necessary information in one convenient location.",
        deliverables: ["Jusitfied briefly the purpose and goal of the developed application.", "Described the way tasks are planned and tracked in the project.", "Described the third party services, packages or dependencies that are used in the developed application.", "Identified and described the benefits and drawbacks of a chosen database system.", "Explained the features and functionalities of an object-relational mapping (ORM) system.", "Explained briefly a plan for basic normalised database relations.", "Described briefly the project’s models in terms of the relationships they have with each other.", "Identified and described most of the application’s API endpoints.", "Implemented a normalised database design with a little duplication.", "Implemented an adequate database design that appropriately addresses the requirements of the planned scenario.", "Implemented database queries that provide mostly correct data for the given scenario.", "Wrote code comments that demonstrate how the queries implemented correctly represent the database structure.", "Implemented validation techniques on majority of user input to maintain data integrity."],
        techStack: ["diagrams.net", "Flask", "Git", "GitHub", "Insomnia", "Markdown", "PostgreSQL", "Python", "Trello", "Visual Studio Code"],
        image: "src/assets/project3.png",
        link: "",
        gitHubLink: "https://github.com/kimnle/T2A2-APIWebServer",
    },
    {
        id: 4,
        name: "Full Stack App",
        description: "I was to design a web application (app) built for a real world customer, or design a web application (app) built for a hypothetical customer with a realistic problem.",
        assignment: "In a team of three, we designed MeetMyRoute to connect travelers with others who share similar travel itineraries, whether they're fellow travelers or locals at the destination. Users create a profile to share details about themselves, plan upcoming trips by adding destination and dates (shared publicly), and keep other details private. The platform allows users to explore the community through search filters, fostering connection and enhancing travel experiences by linking like-minded individuals.",
        deliverables: ["Demonstrated DRY (Don’t Repeat Yourself) principles in all code.", "Libraries used excellently in the app.", "Demonstrated code flow control.", "Applied excellent use of Object oriented principles/patterns in most of the application.", "Employed and utilised proper source control methodology.", "Employed and utilised project management methodology.", "Built an outstanding application, that meets client and user needs and exceeds expectations.", "Successfully deployed to a cloud hosting service, used environment variables, used same database type in development/testing as production, used custom domain name.", "Highly intuitive user interface, with minimal impediments to user flow.", "Extensive user-testing of development site.", "Extensive user-testing of production site, including by client.", "Integration tests and unit tests written correctly, with tests across both backend and frontend.", "Excellently delegated tasks with Kanban board.", "Presented software code and explained its functionality.", "Presented software code and explained how challenges related to that code were overcome during a project’s development."],
        techStack: ["CSS", "digrams.net", "Express", "Figma", "Git", "GitHub", "HTML", "JavaScript", "Markdown", "MongoDB", "Mongoose", "Netlify", "Node.js", "React", "Render", "Trello", "Visual Studio Code"],
        image: "src/assets/project4.png",
        link: "",
        gitHubLink: "https://github.com/MeetMyRoute",
        deployedLink: "https://meetmyroute.netlify.app/",
    }
]

export default projects;