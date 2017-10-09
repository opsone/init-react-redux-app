#Initialize project react redux

init-react-redux-app is a suggestion to implement redux in a react / react-native.

##ReactJS - Installation

```
npm install -g create-react-app
// OR
yarn global add create-react-app
	
create-react-app AwesomeProject
	
npm install -g init-react-redux-app
// OR
yarn global add init-react-redux-app
	
cd AwesomeProject

irra init src
irra generate [entityReducerName]
```
##react-native-cli - Installation

```
npm install -g react-native-cli
// OR
yarn global add react-native-cli

npm install -g init-react-redux-app
// OR
yarn global add init-react-redux-app
 	
react-native init AwesomeProject
cd AwesomeProject
  	
irra init [dest]
irra generate [entityReducerName]
  	
react-native run-ios
```

##create-react-native-app - Installation

```
npm install -g create-react-native-app
// OR
yarn global add create-react-native-app
  	
npm install -g init-react-redux-app
// OR
yarn global add init-react-redux-app
	
create-react-native-app AwesomeProject
cd AwesomeProject

irra init [dest]
irra generate [entityReducerName]

npm start
```

## Commands

```
irra init [dest]
```

Initialise directories and libraries. Create Store
Libraries : *redux, redux-thunk, redux-persist, react-redux, redux-mock-store*

```
irra generate [entityReducerName]
```

Générate file reducers and files actions

### [Sample](https://github.com/opsone/init-react-redux-app/tree/master/sample) 

### Creators
[Jérémy Chaufourier](http://github.com/batosai)
[@chaufourier](https://twitter.com/chaufourier)
[@opsone](https://twitter.com/opsone)
