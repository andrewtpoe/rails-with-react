# Rails with React

This starter app is a Rails 4 project renders a React SPA. The target use for this sample application is to provide a demonstration of how to combine Rails with NPM, and all of the fancy cutting edge JavaScript tools.

## Getting started

This is a Rails app, at it's core. Start working with it much like any other new Rails project.

```
$ git clone < repo >

$ cd < repo >

$ bundle install

$ bundle exec rake db:setup
```

Now that Rails is set up we need to get the JavaScript running.

```
$ npm install
```

This application uses `foreman`, so starting the server isn't done with `rails s`, use `$ foreman start` instead. Foreman starts the Rails server and a Web Pack watch process the recompiles the SPA JavaScript any time a change is saved in the folder `app/client`. That compiled JavaScript is output to `app/assets/javascripts/client.js` and rendered for you when you visit the root path (localhost:3000).

## Developing in this project

Because this application renders an SPA, development is slightly different than a normal rails app. Rails should be used primarily as an API server. All pages in the app should be handled via the client JS. Any route that is not an API route should be sent to a view who's sole task is to render the SPA.

If you are using this project to follow a Node based tutorial, use `app/client/` as the source code folder. 
