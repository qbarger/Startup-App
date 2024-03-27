# EXPEDITION EXTRATERRESTRIAL!
## Description Deliverable

### Elevator Pitch
##### Have you ever thought about the grandeur of our solar system? How does everything connect, and work together? What do the different planets look like, and how do they move? What are the newest discoveries in our little pocket of outer space? Expedition Extraterrestrial is the interactive map of our solar system that can answer all of your questions! Create an account, login, and begin exploring the beauty of space! See what Mercury, Venus, Mars, and the Gas Giants look like, and learn about how the planets and Sun interact. Do you have new info about our solar system? Expedition Extraterrestrial allows for users to add new info about our solar system, and then stores what they said and who said it. This allows for the program to keep up to date, and to be an ever-expanding source of knowledge about the planetary neighborhood in which we live!

### Design


![Expedition Extraterrestrial](https://github.com/qbarger/Startup-App/assets/54420597/b0ae911d-75c0-48ef-b48e-eeb2bcd0a135)

![Expedition Extraterrestrial-2](https://github.com/qbarger/Startup-App/assets/54420597/97b3387f-496b-4ec8-90ef-d626fabfae90)


### Key Features
##### * Displays the solar system with relative orbits of planets.
##### * Allows users to select a planet and view facts about that planet (or star in the case of the Sun).
##### * Users can add information to a specific object's database to keep the system up to date.
##### * Information input by users is stored and displayed for others to see.
##### * Secure login over HTTPS.

### Technologies
##### * HTML: I will use HTML for the structure of the application. It will have one page for login and a page displaying the solar system as a whole. It will also have a page displaying facts about a planet when the user selects one.
##### * CSS: I am going to use CSS to display the solar system and show the orbit paths of the planets.
##### * JavaScript: Allows for account creation and login. It will also display inputs added by other users.
##### * Service: It will use back end service for login and retrieving input from users.
##### * DB/Login: Database will store the input received from users. Allows for secure login and saves users' credentials. Can not view application without login.
##### * WebSocket: Whenever a user adds input for an object, it will be added to the related facts and displayed.
##### * React: Application will be updated to use the React web framework.

### HTML Deliverable
##### * HTML pages: 13 HTML pages consisting of a login, account, and about page. 1 page each for The Sun and all 9 of the planets.
##### * Links: The login links to either a create an account page or the main application page via a form element. On the main page each star/planet links to its own page.
##### * Text: Each element is represented by text.
##### * Images: Each page has images depicting either the planet, star, or space in general. The background for the main page is also an image.
##### * DB/Login: There is an initial login page that accepts a username and password. The ability to see new information added to the page is pulled from the database.
##### * Websocket: The page will inform you in real time when information is being added.

### CSS Deliverable
##### * Header, footer, and main body content for each page.
##### * Navigation Elements: I added buttons to the solar system page to easily get to information about each planet. The button to the About page is contrasted in color to the other buttons. I kept anchor elements white to match the rest of the pages.
##### * Responsive to window sizing: Sun stays centered and distances are consistent as window is resized.
##### * Application Elements: Good contrast of colors and the atmosphere of space is represented well.
##### * Application Text Context: Consistent text type and sizing used throughout the whole application.
##### * Application Images: Same space image from the about page. I also added an image of each planet to it's respective page.

### JavaScript Deliverable
##### * login: When you enter your login information it stores the it and takes you to the solar system page.
##### * database: Username is displayed on every page. Currently it is stored in localstorage, but it will be replaced with the database.
##### * WebSocket: A setInterval function was used to intermittently display what planets other users had visited. This will be replaced by WebSocket.
##### * Application logic: Application will track which planets you visit during your exploration.

### Service Deliverable
##### * Node.js/Express HTTP Service: Done.
##### * Static Middleware for Frontend: Done.
##### * Calls to Third-Party Endpoints: Calls to third-party endpoint to retrieve a quote for the about page.
##### * Backend Service Endpoints: Calls to the backend to keep track of which planets the user has visited.
##### * Frontend Calls Service Endpoints: I accomplished this using the fetch function.
