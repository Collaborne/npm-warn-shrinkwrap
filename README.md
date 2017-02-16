# npm-warn-shrinkwrap

[![Greenkeeper badge](https://badges.greenkeeper.io/Collaborne/npm-warn-shrinkwrap.svg)](https://greenkeeper.io/)

Check whether a `npm-shrinkwrap.json` exists in the current directory, and warn if so.

This is intended for environments where the shrinkwrapping process only happens on CI steps, but where developers should _not_ use `npm shrinkwrap`.

## Install

~~~~
npm install --save-dev npm-warn-shrinkwrap
~~~~

## Usage

Configure this in `package.json` in the `install` script:

```js
{
  ...,
  "scripts": {
    "install": "npm-warn-shrinkwrap"
  }
}

