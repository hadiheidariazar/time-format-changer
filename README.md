## About This Project
This project is made to convert seconds to minutes or hours or days so that we can convert time much more easily.

You can do this time conversion in React JS or Vue JS projects and even in raw JavaScript, and there are no restrictions.

## Installation
#### Just add the Time.js file to your project and that's it
## Learning
The `timeFormatChanger(secondsValue, language)` function takes two inputs. In the first entry, you must enter the amount of time in seconds of the number type, and in the second entry, which is optional, you must select the written language of the numbers.
#### language The default Value is `'en-US'`
## Usage
#### How to use in `raw JavaScript`:
HTML page:
```html
<body>
   <h1></h1>

   <script src='./app.js' type='module'></script>
</body>
```
JS page:
```javascript
import timeFormatChanger from './Time.js'
Or
import { timeFormatChanger } from './Time.js'

document.querySelector('h1').innerHTML = timeFormatChanger(100000, 'en-US') // Result: 01:03:46:40
document.querySelector('h1').innerHTML = timeFormatChanger(100000) // Result: 01:03:46:40
document.querySelector('h1').innerHTML = timeFormatChanger(9129, 'fa-IR') // Result: ۰۲:۳۲:۰۹
```
##
#### How to use in `React JS`:
JSX page:
```javascript
import timeFormatChanger from './Time.js'
Or
import { timeFormatChanger } from './Time.js'

export default function App() {
  return (
    <>
       <h1> { timeFormatChanger(100000, 'en-US') } </h1> // Result: 01:03:46:40
       <h1> { timeFormatChanger(100000) } </h1> // Result: 01:03:46:40
       <h1> { timeFormatChanger(9129, 'fa-IR') } </h1> // Result: ۰۲:۳۲:۰۹
    </>
  )
}
```
##
#### How to use in `Vue JS`:
vue page:
```vue
<template>
  <div>
    <h1>{{ timeFormatChanger(100000, 'en-US') }}</h1> // Result: 01:03:46:40
    <h1>{{ timeFormatChanger(100000) }}</h1> // Result: 01:03:46:40
    <h1>{{ timeFormatChanger(9129, 'fa-IR') }}</h1> // Result: ۰۲:۳۲:۰۹
  </div>
</template>

<script>
import timeFormatChanger from './Time.js';
Or
import { timeFormatChanger } from './Time.js';

export default {
  name: 'App',
  methods: {
    timeFormatChanger,
  },
};
</script>
```

#### Made with ❤ by Hadi Heidariazar