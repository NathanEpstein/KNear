kNear
==========

## Install
`npm install knear --save`

## About

kNear is a javascript implementation of the k-nearest neighbors algorithm. It is a supervised machine learning algorithm.

Numeric points are assigned a classification and 'learned' by the machine. New points are classified based on their proximity to points which have been 'learned' by the machine.

## Usage
```javascript
var generator = require('knear');

var k = 3; //k can be any integer
var machine = new generator.kNear(k);

machine.learn([-1,2,3],'good');
machine.learn([0,0,0],'good');
machine.learn([10,10,10],'bad');
machine.learn([9,12,9],'bad');

machine.classify([1,0,1]);
//returns 'good'

machine.classify([11,11,9]);
//returns 'bad'

```
## License

**The MIT License (MIT)**

> Copyright (c) 2014 Nathan Epstein
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.