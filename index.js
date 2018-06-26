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

const rp = require('request-promise');
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const merge = require('deepmerge');

// Put your API key in this file, on one line (no newlines!)
const azureApiKey = fs.readFileSync('.subkey.txt', 'utf8');

const azureApiUrl = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';

const azureRequestOptions = function() {
  return {
    method: 'POST',
    uri: azureApiUrl,
    headers : {
      'Ocp-Apim-Subscription-Key' : azureApiKey,
      'X-ClientTraceId' : uuidv4(),
    },
    json: true
  };
};

const azureCounters = {
  inputChars: 0
};

const azureTranslate = function(text, from, toLangs) {
  const options = merge(azureRequestOptions(), {
    qs: {
      to: toLangs,
      from: from
    },
    body: [
      {
        'Text': text
      }
    ]
  });
  azureCounters.inputChars += text.length;
  return rp(options);
};

// Maybe we'll add Google Translate as an option later
const translate = azureTranslate;
const attribution = 'Microsoft Translator';

const logText = function(src, text) {
  console.log('⟨%s⟩ %s', src, text);
};

const translateSeq = function(text, from, toLangs, alsoShow) {
  if (toLangs.length > 0) {
    const next = toLangs.shift();
    translate(text, from, [next]).then(function (body) {
      const out = body[0].translations[0].text;
      logText(next, out);
      if (alsoShow && alsoShow !== next) {
        translate(out, next, alsoShow).then(function (body) {
          const out2 = body[0].translations[0].text;
          logText('*' + alsoShow, out2);
          translateSeq(out, next, toLangs, alsoShow);
        });
      } else {
        translateSeq(out, next, toLangs, alsoShow);
      }
    }).catch(function (err) {
      console.error('Failure: ', err.message);
    });
  } else {
    logText('+XX', 'Characters used: ' + azureCounters.inputChars);
  }
}

const showTranslateSequence = function (text, from, toLangs) {
  logText('+AA', 'Translations provided by ' + attribution);
  logText(from, text);
  translateSeq(text, from, toLangs, 'en');
};

module.exports = {
  showTranslateSequence : showTranslateSequence
};
