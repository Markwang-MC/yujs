# YUTJS, the least-amount-of-codes JS template

YUTJS was developed with only 31 rows of codes, making it not only easy to use in your developing, but also for you to read its source codes for study or something eles.

# Easyly transform from EJS to YUTJS

It need little work for transforming from EJS to YUTJS, because they has almost the same member functions and usages. See "Basic usage" part below for detailed examples.

## Installation

```bash
$ npm install yutjs
```

## Completely based on the JS built-in templates

So, for any JS programmers, writing a template dosen't need study new knowledages.

```html
<div>${name}</div>
```

## Basic usage
  ```js
  let Yutjs = require('yutjs')
  let templateString = 'I love ${name}'
  let yu = new Yutjs(templateString)
  let html = yu.run({'name':'you'})
  console.log(html)
  //'I love you'
  ```

## Render file

```js
let Yutjs = require('yutjs')
let fs = require('fs')
let template  = fs.readFileSync('template.yu')
let yu = new Yutjs(template)
let html = yu.run({'name':'you'})
```

