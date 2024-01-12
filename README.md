# Timer.js

Timer plugin written in **JavaScript**.

## Technologies

- JavaScript

## Usage

```js
const timer = new Timer({
    time: {
        min: 10,
        sec: 0
    },
    onTick: (time) => {
        // Add code to perform on every second down.
    },
    onEnd: () => {
        // Add code to perform on the end of the timer.
    }
});
```
