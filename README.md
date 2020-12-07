# CinemaDev, search Movies here!

> Application that consumes the OMDB API









## 💡 About the project:

This project consists of an app made with react native that uses the OMDB API to list movies, games and series.

## 🔥 Techs:

- ReactNative
- TypeScript
- React-Navigation
- StyledComponents
- Hooks
- Tests

## 👀 Tools used to standardize the code:

- Conventional Commits
- ESLint
- Prettier
- EditorConfig

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/), [Android SDK](https://medium.com/surabayadev/setting-up-react-native-android-without-android-studio-35a496e1dfa3) first and then, in order to clone the project via HTTPS, run this command:**




**Install dependencies**

`yarn install`

**Install IOS native dependencies**

`cd ios && pod install`

# :runner: Getting Started

**Before running the app, you should:**

- Create your account on the [OMDB API](http://www.omdbapi.com/) and request your key to access the API
- Create a file in the root called "config.json" that contains your keys, in this format:
  ```
     {
      "API_KEY": "your key here from OMDB API",
     }
  ```

Make sure you have the emulator on or a physical device connected

Run the following command in order to start the application in a development environment:

```
  // Install the application in a Android device
  yarn android

  // Install the application in a IOS device
  yarn ios
```

After the build process, the metro bundler will start the app automatically but
in case you already have the app built, just run the following command to start it:

```
yarn start
```
