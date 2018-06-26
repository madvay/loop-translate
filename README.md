## loop-translate

Translates something repeatedly.  Currently uses Microsoft's translation API - and you'll need your own API key.

If you don't want the default list of languages, add all the languages you want to translate as command line arguments.

Also available as a library with function `showTranslateSequence(apiKey, text, from, toLangs)`.

### Usage

Text to translate is in stdin.  The API key is in environment variable TRANSLATION_API_KEY, or otherwise in file `./.subkey.txt`.
If no arguments are provided, the input text is assumed to be in `en` and the output sequence is `fr de ja es` (and back to `en`).
Thus the default execution is equivalent to arguments of `en fr de ja es`.

```
# With the API key in .subkey.txt
./cli.js
```

### Example

```sh
| => yarn start en hi he ko th yua zh-Hant ja
yarn run v1.6.0
$ node cli.js en hi he ko th yua zh-Hant ja
Please do not step on the grass. No dogs allowed.
⟨+AA⟩ Translations provided by Microsoft Translator
⟨en⟩ Please do not step on the grass. No dogs allowed.

⟨hi⟩ कृपया घास पर कदम नहीं है । कोई कुत्तों की अनुमति दी ।

⟨*en⟩ Please don't step on the grass. No dogs allowed.

⟨he⟩ . בבקשה אל תדרוך על הדשא . אין כניסה לכלבים

⟨*en⟩ . Please don't step on the lawn. No dogs allowed.

⟨ko⟩ . 제발 잔디밭에 단계를 하지 않습니다. 아니 개 들 허용.

⟨*en⟩ . Please do not step on the lawn. No dogs allowed.

⟨th⟩ . กรุณาอย่าก้าวบนสนามหญ้า ไม่อนุญาตให้ใช้สุนัข

⟨*en⟩ Please do not progress on the lawn. Dogs are not allowed.

⟨yua⟩ Much ma' progresar ti' le césped. Ma' u permiten peek'.

⟨*en⟩ Return not to progress on the lawn. No dogs allowed.

⟨zh-Hant⟩ 返回不在草坪上的進展。不允許狗。

⟨*en⟩ Return not on the lawn on the progress.
Dogs are not allowed.
⟨ja⟩ 進行中の芝生の上に戻ります。 犬は不可。

⟨*en⟩ Go back on the grass in progress.
Dogs are not allowed.
⟨+XX⟩ Characters used: 575
✨  Done in 16.23s.

```

### License

```
Copyright (c) 2018 Advay Mengle - https://github.com/madvay/loop-translate

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
