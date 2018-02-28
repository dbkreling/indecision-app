This is a project from The Complete React Web Developer Course (with Redux) course.

To install all the dependencies of this project, run:

  $ yarn install

The dependencies for this project (as of now) are

1) Nodejs (from the web)
2) Yarn (installed via npm
3) Preferably Visual Basic Studio (from the web)
4) live-server (installed via yarn. Make sure to add ~/.yarn to the PATH)
5) Babel - v.6.24.1 (via yarn global add babel-cli@6.24.1)
  5.0) yarn init
  5.1) locally install env preset via yarn
  5.2) locally install react preset via yarn

	$ yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

6) Create a new src/app.js file with the contents of public/scripts/app.js.
   Now the scripts/app.js will not be touched anymore.

  From a terminal session issue:

    - babel src/app.js --out-file public/scripts/app.js --presets=env,react --watch

  ... to watch what files have been automatically changed after the changes we made

  From another session, issue

    - live-server public

  ... to start serving up the public directory

   Do your changes in the src/app.js file from now on.

7) Visual Studio extension: Babel ES6/ES7

8) Browser addOn / Plugin: 'React Developer Tools'
    Installation directly via browser

9) On Lecture 49-Avoid Global Modules, we uninstall live-server and babel-cli[i] from the
global modules and reinstall them as local dependencies. The sequence of commands, for the
records, are:

   $ yarn global uninstall live-server babel-cli

   And then:

   $ yarn add live-server babel-cli@6.24.1