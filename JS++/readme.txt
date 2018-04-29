JS++
--------------------------------------------------------------------------------
Copyright 2011-2017 Onux Corp. All Rights Reserved.
Patent(s) Pending.
--------------------------------------------------------------------------------

This is an EARLY ACCESS PREVIEW of the JS++® compiler. Several features are
either incomplete or unimplemented, and you may encounter bugs.

Installation
---
On Windows, run setup.exe

On Mac OS X, copy the js++ binary to the /usr/local/bin/ directory and chmod +x the binary file.

On Linux, copy the js++ binary to the /usr/local/bin/ directory and chmod +x the binary file.

--------------------------------------------------------------------------------

Getting Started
---
Visit the official JS++ website for the "Getting Started" guide:

https://www.onux.com/jspp/getting-started

--------------------------------------------------------------------------------

Usage:

Open your command-line interface and try one of the following commands:

For help and commands:
    > js++ --help

To compile a file:
    > js++ inputFile.jspp

    The outputted file will have the extension ".jspp.js"
    So the outputted file in this example will have the filename "inputFile.jspp.js"

To compile a file with arbitrary output path:
    > js++ inputFile.jspp -o path/to/outputFile.jspp.js

To compile modular code, specify multiple input files:
    > js++ main.jspp module1.jspp module2.jspp module3.jspp

To recursively compile all *.jspp files in a directory:
    > js++ dir/to/jspp/files

The file order does not matter. The JS++ compiler will automatically resolve the
correct file order. In order to compile code with modules, you will need to have
an application entry point via a main file:

https://docs.onux.com/en-US/Developers/JavaScript-PP/Language-Guide/main-file

--------------------------------------------------------------------------------

Type Annotations
---

You can write JS++ as "just JavaScript" with types. The supported types are as
follows:

Type                    Description
---                     ---
bool                    Boolean
string                  String
void                    'null' and 'undefined'
float                   [Unimplemented]
double                  IEEE-754 double-precision floating-point number
byte                    8-bit unsigned integer
signed byte             8-bit signed integer
short                   16-bit signed integer
unsigned short          16-bit unsigned integer
int                     32-bit signed integer
unsigned int            32-bit unsigned integer
long                    [Unimplemented]
unsigned long           [Unimplemented]
char                    A single 16-bit Unicode character

The types can be used to replace JavaScript's untyped "var" and "function" keywords.

Example usages:

```
int x = 1;
unsigned int y = 2;
string z = "abc";
```

```
void foo() {}
int bar() {
    return 1;
}
```

```
int add(int a, int b) {
    return a + b;
}
```

In addition, there are array types and callback types.

Examples:

```
int[] x = [ 1, 2, 3 ];
int[][] y = [ [], [ 1, 2, 3], [] ];
```

```
int(int, int) plus = int(int a, int b) {
    return a + b;
};
plus(1, 1); // 2
```

--------------------------------------------------------------------------------

External Statement
---

Use the 'external' statement to "import" JavaScript libraries.

1.  Example #1 - jQuery:

    ```
    external jQuery, $;

    bool boxHovered = $("#box").hasClass("hovered");
    if (boxHovered) {
        $("#box").hide();
    }
    ```

2.  Example #2 - Node.js:

    ```
    import System;

    external require;
    external http = require("http");

    string hostname = '127.0.0.1';
    int port = 1337;

    http.createServer(void(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    }).listen(port, hostname, void() {
        Console.log("Server running at http://" + hostname + ":" + port.toString() + "/");
    });
    ```

--------------------------------------------------------------------------------