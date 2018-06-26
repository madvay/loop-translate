#!/usr/bin/env node
// Copyright (c) 2018 Advay Mengle - https://github.com/madvay/tloop
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
// associated documentation files (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial
// portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
// NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

const pkg = require('.');
const fs = require('fs');

const [,,...args] = process.argv
let from = 'en';
let toLangs = ['fr','de','ja','es'];
if (args && args.length > 0) {
  from = args.shift();
  toLangs = args;
}
const text = fs.readFileSync("/dev/stdin", "utf-8");

let azureApiKey = process.env.TRANSLATION_API_KEY;
if (!azureApiKey) {
  // Put your API key in this file, on one line (no newlines!)
  azureApiKey = fs.readFileSync('.subkey.txt', 'utf8');  
}


pkg.showTranslateSequence(azureApiKey, text, from, toLangs);
