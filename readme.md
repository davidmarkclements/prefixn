# Prefixn

> Small library for generated prefixed labels

This is useful for create reproducible labels throughout a piece of code.

## Usage

```js
import prefixn from 'prefixn'
const label = prefixn(':MY-PREFIX-')
label(0).toString() // :MY-PREFIX-0
label(1) + '' // :MY-PREFIX-1
label(2, 3) + '' // :MY-PREFIX-2
label(2, 3) + '' // :MY-PREFIX-3
label(4) `append to template string` // append to template string:MY-PREFIX-4
label(5, 7, 9) + ''  // :MY-PREFIX-5
label(5, 7, 9) + ''  // :MY-PREFIX-7
label(5, 7, 9) + ''  // :MY-PREFIX-9
label(1) // throws an error, 1 has aleady been used
```

The idea is to pass numbers directly to the returned `label` function. Using a variable (particular a counter variable) defeats the purpose, which is to reliably create the same label at **the same point in a piece of code**.

## API 

### `prefixn(prefix?:String) => label:Function`

The initializer function, call this with the desired prefix string and it will return a function (`label`). Optional.

### `label(...nn:Number) => String`

Call `label` with a number and it will output a string with the number prefixed according to the specified `prefix`.

Call `label` with multiple numbers, every time it's called it will pick the next number from the arguments.

## Test

```sh
npm test
```

```sh
# all tests passed
```

## License

MIT