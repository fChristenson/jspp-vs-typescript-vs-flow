# JS++ vs Typescript vs Flow

## What we will cover

* What is a type system?
* Why are they important
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
* File extension
* Possible to set noImplicitAny
* Has Window type
* Complile error on parseInt(Array<string>)

Con
* Migration
* No optional values (Optional params is not good enough)

## Flow

Pro
* Facebook product
* VS code plugin
* Language server
* Easy to get started
* Optional values
* Compile error on returning undefined on a typed function

Con
* Migration
* No window type
* unclear-type useless when using window
* Could pass Array<string> to parseInt
* Easy to forget @flow comment

## JS++

Pro
* VS code plugin

Con
* No npm package
* No VS code marketplace package
* No language server
* No Webpack loader
* No es2015 support
* Incomplete documentation
* Too early stage for serious development

## Conclusion

I don't think I can be objective here but I think Microsoft has this
in the bag, no one does enterprise solutions like Microsoft.

Strict types do not equal enterprise level development 
but imo the big gains for a codebase using types comes 
when the codebase is large enough to be tricky to change 
without the devlopers being able to predict the impact of 
each change in an accurate way.

Flow has it's merits and it is very similar to Typescript but when the
race is this close I will bet my money on the biggest enterprise solution
provider in the world.

JS++ is the underdog in all of this and it is imo too early to say what
it will become but there is a tough fight ahead to beat the competition.

The key for JS++ imo is to figure out something that is so great that people
are willing to use this solution over the others, even with the "safety" big
companies provide a tool brand with.

Another approach would be to go with the Jest strategy and start by making
the compiler compatible with the other solutions, lowering the migration cost
to almost nothing and then provide a small additional value to nudge the
developers to their side.

For now I will stay with Typescript.
