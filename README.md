# YUJS, the least-amount-of-codes JS template

YUJS was developed with only 31 rows of codes, making it not only easy to use in your developing, but also for you to read its source codes for study or something eles.

# Easyly transform from EJS to YUJS

It need little work for transforming from EJS to YUJS, because they has almost the same member functions and usages. See "Basic usage" part below for detailed examples.

## Installation

```bash
$ npm install yujs
```

## Completely based on the JS built-in templates

So, for any JS programmers, writing a template dosen't need study new knowledages.

```html
<div>${name}</div>
```

## Basic usage

  - `compile` function.

  ```js
  var templateString = 'I love ${name}'
  var template = yu.compile(templateString)
  template({name:'you'})
  ```

  - `render` function.

  ```js
  var templateString = 'I love ${name}'
  yu.render(templateString,{'name':'you'})
  ```

  - `renderFileSync` function.

  ```js
  yu.renderFileSync(templatePath,{content:'you are a smart person'})
  ```

  - `renderFile` function.

  ```js
  yu.renderFile(templatePath,{content:'you are a smart person'},function (err,str) {
  })
  ```
