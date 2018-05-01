# JS++ vs Typescript vs Flow

## What we will cover

* What is a type system?
* Why they are important
* Why Javascript is great at small scale
* Why Javascript fails at large scale
* 3 different ways to solve this problem

## Notes

What limitations can we find?
How easy is it to refactor code?
Are we locked in?

## Typescript

Pro
* Microsoft product
* Great VS code support
* Easy to get started
* Language server

Con
* Migration

## Flow

Pro
* Facebook product
* VS code plugin
* Language server
* Easy to get started
* Optional values

Con
* No window type
* unclear-type useless when using window
* Could pass Array<string> to parseInt
* Slow linting for some files
* Easy to forget @flow comment

## JS++

Pro
* VS code plugin

Con
* No npm package
* No VS code marketplace package
* No language server
* Too early stage for serious development

## Conclusion
