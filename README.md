# Reliability Score: front end

You can view this project live on [https://traindelays.be](https://traindelays.be)

## Build status

| `develop` | `master` |
| --------- | -------- |
| [![Build Status](https://travis-ci.org/oSoc19/reliability-score-frontend.svg?branch=develop)](https://travis-ci.org/oSoc19/reliability-score-frontend) | [![Build Status](https://travis-ci.org/oSoc19/reliability-score-frontend.svg?branch=master)](https://travis-ci.org/oSoc19/reliability-score-frontend) |



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# TrainDelay

With TrainDelays you won't arrive too late at that important meeting again. Thanks to our application, you can predict the possible delays of your train trip in advance. Predictions tell you when to take a train earlier.

## File structure

	├── _src                    # Source files
	 ├── _Component             # All components (CSS Included)
		 ├── Header         # Header components (CSS Included)
		 ├── PlannerPanel   # All components
	 ├── Fonts                  # Fonts folder
	 ├── Images                 # Images folder
    ├── LICENSE

**Fonts & Images:** Resources folders
**Index.js:** Only page that loaded → used to root file (React Router)
**Util.js:** Utilities functions (String & number conversion, etc)
**LoadingDirectionsButtonHOC:** Simulate inheritance in React for Earlier/laterDirections.js
**PlannerPanel folder:** All files about journey displaying
**Header folder:** All files about header
**Layout:** This component is used to embed the content (to avoid reload every time the header) but also to do the request to the API

## API Documentation
API Documentation can be found at https://github.com/oSoc19/reliability-score-backend/blob/develop/README.md

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
