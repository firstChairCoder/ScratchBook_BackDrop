<h1 align="center">
  ScratchBook_BackDrop
</h1>

"Cat_Wiki" application using React Native and <a href="https://thecatapi.com">TheCatAPI</a>

<!-- Badges -->
<!-- Badges -->
<p align="center">
  <!-- if your  -->
  <a href="https://github.com/firstChairCoder/ScratchBook_BackDrop/graphs/commit-activity" alt="Maintenance">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-1EAE72.svg" />
  </a>

  <!-- codefactor -->
  <a href="https://www.codefactor.io/repository/github/firstChairCoder/ScratchBook_BackDrop" alt="CodeFactor">
    <img src="https://www.codefactor.io/repository/github/henry-ns/b.weather/badge" />
  </a>

  <br/>

  <!-- version -->
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/firstChairCoder/ScratchBook_BackDrop">

  <!-- GitHub repo size -->
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/henry-ns/b.weather">

  <br/>
  
  <a aria-label="made with expo" href="https://github.com/expo">
		<img src="https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20">
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
  - react-navigation for the tabs
  - redux + AsyncStorage for global state management and local caching.
  - lottie for handling custom animated loaders.

  ### Other Dev settings
  - Made with Expo :heart:
  - Static Typing with TypeScript.
  - .env files for development, staging, production environment configs
  - Unit and Coverage Tests with jest + RNTL

## Notes

- The API KEY that I put in .env is a free key for showing the usage of this test project only. In actual development, no API KEY should be stored on the client side, and no .env file should be committed.
