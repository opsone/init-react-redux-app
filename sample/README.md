This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Init react redux App](https://github.com/opsone/init-react-redux-app)

# Sample

## Installation create-react-app

```
npm install -g create-react-app
// OR
yarn global add create-react-app

create-react-app sample
```

## Folder Structure

After creation, your project should look like this:

```
sample/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
```

## Installation init-react-redux-app

```
npm install -g init-react-redux-app
// OR
yarn global add init-react-redux-app

cd sample

irra init src
```

## Folder Structure

After init, your project should look like this:

```
sample/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    App.css
    App.js
    App.test.js
    __tests__
    	actions
    	reducers
    actions
    	index.js
    index.css
    index.js
    logo.svg
    reducers
    	index.js
    registerServiceWorker.js
    store
    	index.js
    utils.js
```
Note : Move App.test.js in __tests__ folder

## Generation action/reducer

```
irra generate todo
```

## Folder Structure

After generate, your project should look like this:

```
sample/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    App.css
    App.js
    __tests__
    	App.test.js
    	actions
    		todo
    			create.test.js
    			fetch.test.js
    			remove.test.js
    			update.test.js
    	reducers
    		todos.js
    actions
    	index.js
    	todo
    		create.js
    		fetch.js
    		index.js
    		remove.js
    		update.js
    index.css
    index.js
    logo.svg
    reducers
    	index.js
    	todos.js
    registerServiceWorker.js
    store
    	index.js
    utils.js
```

### Creators
[Jérémy Chaufourier](http://github.com/batosai)
[@chaufourier](https://twitter.com/chaufourier)
[@opsone](https://twitter.com/opsone)