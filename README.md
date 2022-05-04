
  

# console-data

  

A console log is show in block line width start and end, you see:

  

1. data file URL and name

2. Check data type

3. Check type if data is array

4. show data width `console.dir` method

  

## Install

Install via **npm**

``` javascript

npm i -D nodejs-clg

```

  

## Usage

  

``` javascript

const { mode ,logger } =  require('./logger.js');
mode('dev');

const foo = [{name: 'foo',age: 32, active: true}]

logger(foo)

```

## Result

``` javascript

--------------------- Start log ------------------------------
 
- Type is:  object
- Is this an Array? Yes
- Array Length:  2
- Data return: 
[ 'hello', 'world' ]
 
---------------------  End log  ------------------------------


```



## License

MIT

  

## Keywords

  

- Node.js
- Node.js console log
- log
- logger
- debugger