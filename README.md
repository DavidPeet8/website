
# Website

This is the source code for my personal website hosted at https://davidpeet8.github.io/website 
This project uses Angular CLI 9.1.1

## Setup
1. Clone this repository
2. Enter root project directory `cd <root path>`
3. Run `ng serve --open` to start the development server hosted at `http://localhost:4020/`
4. Run `npm run pbuild` to create a production build and store it in `/build`
5. Run `npm deploy` to deploy the contents of `/build` to production

## Running Unit Tests

- This project has virtually no tests due to a lack of backend data sources, few functions produce values, and those that do are trivial
- Should backend data sources be added, run `ng test` to execute unit tests and run `ng e2e` to execute the end-to-end tests 

## Future Improvements
- Look into server side routing instead of hash routing
- Code cleanup 
- Add unit tests for any worthwhile methods
- Add preview image for my resume
