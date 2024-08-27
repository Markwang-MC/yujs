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

  - `render` function.

  ```js
  var templateString = 'I love ${name}'
  yutjs(templateString).run({'name':'you'})
  ```
