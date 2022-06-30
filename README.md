<h1 align="center">
  ScratchBook_BackDrop
</h1>

"Dog_Wiki" application using React Native and <a href="https://thedogapi.com">TheDogAPI</a>

<!-- Badges -->
<!-- Badges -->
<p align="center">
  <!-- if your  -->
  <a href="https://github.com/henry-ns/b.weather/graphs/commit-activity" alt="Maintenance">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-1EAE72.svg" />
  </a>

  <!-- License -->
  <a href="./LICENSE" alt="License: MIT">
    <img src="https://img.shields.io/badge/License-MIT-1EAE72.svg" />
  </a>

  <!-- codefactor -->
  <a href="https://www.codefactor.io/repository/github/henry-ns/b.weather" alt="CodeFactor">
    <img src="https://www.codefactor.io/repository/github/henry-ns/b.weather/badge" />
  </a>

  <br/>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/henry-ns/b.weather?color=blue">

  <!-- version -->
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/henry-ns/b.weather">

  <!-- GitHub repo size -->
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/henry-ns/b.weather">

  <br/>

  <!-- langs -->
  <a href="./README.md" alt="CodeFactor">
    <img alt="en" src="https://img.shields.io/badge/lang-en-red.svg">
  </a>

  <a href="./README.pt.md" alt="CodeFactor">
    <img alt="pt" src="https://img.shields.io/badge/lang-pt-green.svg">
  </a>
</p>

:white_check_mark: Expo

:white_check_mark: Typescript

:white_check_mark: Redux

<!-- summary -->
<p align="center">
  <a href="#commands">Commands</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-tooling">Tooling</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#notes">Notes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## Commands

| Command                                           | Note                                                                                   |
| ------------------------------------------------- | -------------------------------------------------------------------------------------- |
| git clone <git_url>                               | make a local copy of this repo on your machine.                                        |
| yarn                                              | install deps                                                                           |
| expo start                                        | run Metro Bundler                                                                      |
| yarn android                                      | install and run App in dev environment on Android Studio or connected device           |
| yarn android:staging                              | install and run App in staging environment on Android Studio or connected device       |
| yarn android:production                           | install and run App in production environment on Android Studio or connected device    |
| yarn test                                         | run all unit test cases                                                                |
| yarn test --coverage --verbose                    | run all unit tests and produce a comprehensive coverage report                         |

> Note: Please run Android Studio before installing using commands above

## :clipboard: Tooling

  ### Linting
  - [eslint w/ prettier](https://github.com/svbutko/eslint-config-react-strong)
  - [husky pre-commit hook](https://github.com/typicode/husky)
  - [lint staged](https://github.com/okonet/lint-staged)

  ### Key packages
  - react-navigation for the tabs and stack
  - redux + redux-persist for global state management and local caching.
  - [react-native-androw](https://github.com/folofse/androw/tree/master/react-native-androw) to enable better shadows on Android
  - react-native-image-colors for background color "mapping"
  - [react-native-design-utility](https://github.com/EQuimper/react-native-design-utility) as a mini UI design system with theming.
  - apisauce + swr for data fetching.

  ### Other Dev settings
  - Made with Expo :heart:
  - Static Typing with TypeScript.
  - .env files for development, staging, production environment configs
  - Absolute module path resolution with babel-plugin-module-resolver
  - Unit and Coverage Tests with jest + RNTL

## Notes

- The API KEY that I put in .env is a free key for showing the usage of this test project only. In actual development, no API KEY should be stored on the client side, and no .env file should be committed.
