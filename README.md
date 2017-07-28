# random scales
I needed a randomizer to exercise on scales during warmup, but also wanted to do a project in TS. So here it is.

If you use VSCode, tests have intellisense as well!

Visit @ http://scalesrandom.azurewebsites.net/ 

# how to run

## line commands

To tun locally on 4000 `gulp` or `npm start` (with livereload).

To run tests `gulp tests` or `npm tests`.

Run tests with livereload via `gulp tests-live`.

## prerequisites

Clone

Run `npm install` (and `typings install`, in case you want to open it with VS Code).

You may need to install node + npm + typings.

Also, you will need to install gulp globally, if not present (`npm install -g gulp`)


# upnext

* change deploy: from git to ftp (and minify)
* run a single test file
* private setters, public getters to improve tests for random scale
* add logic to figure out the accidents per each scale.
* structure folders for files
* modularize app
* concatenate / minify files
* selenium
* tsconfig.base does it work in gulp?