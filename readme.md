
# Web Development Key Words and Topics

## Internet
    * Client-Server
    * Web Browser
        - Browser Engine
            - Chromium
            - Firefox
        - Browser Developer Tools
        - Webpage
        - Website
        - Webapp
        - APIs/Services/Backend
        - Address Bar
            - URL(Uniform Resource Locator)
                - PROTOCOL
                - DOMAIN NAME
                - PATH
            - DNS
        - Protocol
            - HTTP
                - HTTP Request-Response
                - HTTP Message
                    - Verb
                        - GET, PUT, POST, DELETE
                    - URL
                    - HTTP Status Code
                    - HTTP Headers
            - HTTPS(HTTP Secure)
                - Digital Certificate
                - SSL/TSL
    * Network
        - Router
        - Switch
    * The Internet, The World-Wide Web
        - Internet protocols
            - IP
                - IP Address
                - IPv4
                - IPv6
            - TCP/UDP
    * Data Centers
        - Content
        - Server Racks
        - VPS(Virtual Private Server)

### Documentation
[What is a browser](https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/)

[Who invented the internet](https://youtu.be/21eFwbb48sE)

[What is cloud computing by Amazon](https://www.youtube.com/watch?v=mxT233EdY5c)

[What is a browser engine](https://en.wikipedia.org/wiki/Browser_engine)

[Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

[Overview of HTTP Status codes](https://http.dev/status)

[HTML Meta Tags](https://www.dofactory.com/html/metatags)

[Semantic Elements Explained - HTML5](https://www.freecodecamp.org/news/semantic-html5-elements/)

[Social Media Card - Open Graph Protocol](https://www.digitalocean.com/community/tutorials/how-to-add-twitter-card-and-open-graph-social-metadata-to-your-webpage-with-html)

[Essential social media tags](https://css-tricks.com/essential-meta-tags-social-media/)

[Bootstrap with HTML5](https://www.bootstrapdash.com/blog/use-bootstrap-with-html)

[Email marketing](https://www.vandelaydesign.com/ultimate-guide-email-marketing/)

[Coding a barebones newsletter](https://www.vandelaydesign.com/newsletter-tutorial/)

Book: `Introduction to Networking by Dr.Charles R Severance`

## HTML(Hyper-Text Markup Language)
    * HTML Document
    * HTML5
    * Markup Tags
        - Structure(html, head, body, div)
        - Text related(h1, p, br, itallic, bold, emph)
        - Data tables(table, tr, td)
        - Forms(form)
        - Links(a, img)
        - Input types(input, textarea)
        - Action types(button)
    * DOM(Document Object Model)
    * Elements
        - Attribute
        - Semantic Tags
            - header, nav, main , footer
            - article, section
    * Metadata Tags
        - SEO
            - <meta name="title" content="your Site Name">
        - Open Graph Protocol - Social Media Cards
            - <meta property="og:title" content="your Site Name">
    * Web accessibility
        - WAI(Web accessibility initiative)
        - ARIA Specification
    * Forms
        - input types
        - required, minlenght, maxlenght keywords
        - fieldset, input type="radio"

### Documentation
[Overview of HTML Elements](https://web.dev/learn/html/overview)

[HTML Forms by Mozila](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

[Client-Side Forms validation](https://www.sitepoint.com/client-side-form-validation-html5/)

[Form validation examples](https://www.the-art-of-web.com/html/html5-form-validation/)

[Sending form data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)

[DOM(Document Object Model) RFC Document](https://www.w3.org/TR/WD-DOM/introduction.html)

[ARIA](https://w3c.github.io/html-aria/)

[Sample audio and video](https://sample-videos.com/index.php#sample-mp4-video)

[Embeding modern media](https://html.com/media/)

[iFrames](https://studio.support.brightcove.com/publish/publishing/choosing-correct-embed-code.html)

[HTML Canvas](https://www.tutorialrepublic.com/html-tutorial/html5-canvas.php)

Book: `HTML and CSS: Design and build websites by Jon Duckett` 

## CSS(Cascading-Style Sheets)
    * Declaration block Style Declaration
        - Selector
            - Element
            - ID
            - Class
            - Child
            - Pseudo-Class
        - Property
    * Text and Color
        - RGB, HSV
        - HUE and Saturation
        - Color Hex values
        - Alpha and RGBA
        - Font Family
        - Text Decoration
    * Box Model
        - Padding Box
        - Border Box
        - Margin Box
    * Document Flow or Layout
        - Block Elements
            - Div, Form, Heading
        - Inline Elements
            - Anchor, Image
        - Alignament
            - Display
            - Float
    * Responsive Design
        - Media Queries
        - Logical Pixel
        - Flexbox
            - Good for simple 1D alignament
            - Either rows(main axis) or columns(cross axis)
            - justify-content, align-content
            - Flex direction
            - Flex grow, shrink, basis
            - Flex wrap, align-content
            - Align-self
        - Fluid Images
        - Responsive Grid
            - Good for complex page layout using a 2D alignament
            - Both rows and columns
            - Line is Grid track, Area is Grid Area
            - 12 or 6 track layout frameworks
            - Cell
            - Gutter
    * Bootstrap
        - Reusable Components
        - Infixes
            - Responsive Breakpoints(sm, md, lg, xl, xxl)
        - Modifiers
            - alert-primary => `primary` key-word is the modifier
        - 12-Columns Grid-System
            - Fluid or Fixed
        - `Container` root element

### Documentation

[Selectors](https://www.geeksforgeeks.org/10-css-selectors-every-developer-should-know/)

[Box Model](https://web.dev/learn/css/box-model)

[Document Flow and CSS Layout](https://web.dev/learn/css/layout)

[Flexbox terminology](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology)

[Flexbox visual guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Flexbox video overview](https://www.youtube.com/watch?v=phWxA89Dy94)

[Grid visual guide](https://learncssgrid.com/)

[Grid video overview](https://www.youtube.com/watch?v=EiNiSFIPIQE)

[Grid podcast](https://web.dev/learn/css/grid/)

[Bootstrap](https://getbootstrap.com/docs)

[Foundation](https://get.foundation/)

[Tailwind](https://tailwindcss.com/)

[UI KIT](https://getuikit.com/)

Book: `CSS: The Definitive Guide: Visual Presentation for the Web by Eric Meyer`

Book: `Bootstrap 5 Foundations by Daniel Foreman`

Book: `Responsive Web Design with HTML5 and CSS  by Ben Frain`

## Javascript

    * European Computer Manufacturers Association and ECMAScript
	* VSCode Code Runner
	* Data types(string, number, boolean, biging, symbol)
        - Iterable: Array and Strings
        - Template Literals/String interpolation/Variable interpolation
	* Operators(=, +, !)
	    - Operator precedence
		- Operator associativity
		- Strict Equality Operator(===) checks both type and value
        - typeof
	* Conditional statements
        - Truthy, Falsy
        - Ternary operator(?)
    * Arrays
        - Spread operator
        - Rest operator
    * Functions
        - arrow function
	* Loops(for, while)
        - for-of
        - for-in
        - .forEach
        - filter
        - map
    * Data structures
        - Set
        - Map
        - Queue
        - Linked lists
        - Trees
        - Graphs
    * Objects
        - Dot notation
        - Bracket notation
        - Comma-delimited key-value pairs
        - Classes
        - new keyword
        - Prototype
        - Destructuring
        - Object.keys(), Object.entries()
    * Error Handling
        - try catch
        - throw keyword
    * DOM Manipulation
        - document object
            - getElementById
            - querySelector
            - innerText
            - appendChild
        - Event handlers
    * Modules(ES6)
        - CommonJs(NodeJs)
	* Automatic Semi-colon Insertion
    * Regular expressions
    * JSON.parse
    * XHR
    * Node.js & npm
    * Testing
        - testing paradigms
            - Red-green-refactor cycle
            - Test-driven development
        - Testing types
            - e2e testing(Webdriverjs, Protractor, Cypress)
            - integration testing(React testing library, Enzyme)
            - unit testing(Jest, Jasmine, Mocha, Karma, qUnit)
        - Jest by Meta
            - code coverage
            - mocking
            - snapshot testing

### Documentation

[Learn Javascript](https://web.dev/learn/javascript)

[Javascript operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

[Javascript primiteves](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

[Javascript strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

[Javascript operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

[Ecmascript reference](https://tc39.es/ecma262/)

[Official Unicode emoji list](https://unicode.org/emoji/charts/full-emoji-list.html#1f600)

[Javascript comparison operators](https://www.javascripttutorial.net/javascript-comparison-operators/)

[Javascript truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

[Javascript falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

[Javascript conditional statements](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

[Javascript ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

[Javascript arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

[Javascript functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

[Javascript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

[Javascript try catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

[Javascript iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

[Javascript Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

[Javascript null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

[Javascript undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

[Javascript scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

[Javascript functional programming](https://www.toptal.com/javascript/functional-programming-javascript)

[Javascript oop](https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/)

[Javascript regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

[Javascript template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

[Javascript arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[Javascript spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[Javascript rest operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

[Javascript dynamic and weak types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

[Javascript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

[Javascript DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

[Javascript event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

[Javascript working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

[Jest javascript testing library](https://jestjs.io/)

[Cypress javascript testing library](https://www.cypress.io/)

## Web Libraries and Frameworks

    * SPA(Single-Page Application)

### JQuery

### React

    * A library
    * Components
        - Component hierarchy
    * Virtual-DOM

### Documentation

[ReactJs](https://reactjs.org/)

[Introduction to React by Facebook](https://youtu.be/XxVg_s8xAms)

[Web pages vs SPAs](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/choose-between-traditional-web-and-single-page-apps)

## Browser 

### Documentation
[Chrome Developer tools](https://developer.chrome.com/docs/devtools/overview/)

[Firefox Developer tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)

Book: `You Don't Know JS Yet - Kyle Simpson`