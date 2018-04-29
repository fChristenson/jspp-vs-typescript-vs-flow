### JS++ DOM Drag & Drop (with Modules)

This example demonstrates drag & drop using the DOM API. This example also uses
JS++ modules. In order to use modules in JS++, you will need to specify at least
one main file:

https://docs.onux.com/en-US/Developers/JavaScript-PP/Language-Guide/main-file

In order to compile modular code, just add all the files containing your modules
as arguments to the JS++ compiler:

    js++ file1.jspp file2.jspp

In order to compile this particular example, use the following command:

    js++ src/main.jspp src/Events.jspp -o compiled/main.jspp.js

The order of the files inputted to the compiler does not matter. The compiler
will automatically resolve the correct order for the modules. Additionally, all
unused functions and module code will not be compiled. Therefore, it is possible
to create very large libraries and only ship the functions of the library you
actually used. This optimization is known as "dead code elimination".