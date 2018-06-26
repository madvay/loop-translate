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
| => yarn start
yarn run v1.6.0
$ node cli.js
You have qualified for a free timeshare in Florida! Please come to our eye-popping presentation next Wednesday at 7am where we will provide you with free donut holes while you listen to us convince you that $10000 a month is cheap for an underwater cabin you will never use.
⟨+AA⟩ Translations provided by Microsoft Translator
⟨en⟩ You have qualified for a free timeshare in Florida! Please come to our eye-popping presentation next Wednesday at 7am where we will provide you with free donut holes while you listen to us convince you that $10000 a month is cheap for an underwater cabin you will never use.

⟨fr⟩ Vous avez qualifié pour une multipropriété libre en Floride! S'il vous plaît venir à notre présentation eye-popping mercredi prochain à 7H, où nous allons vous fournir des trous de beignet gratuit pendant que vous nous écoutez vous convaincre que $10000 par mois est bon marché pour une cabine sous-marine que vous n'utiliserez jamais.

⟨*en⟩ You have qualified for a free timeshare in Florida! Please come to our eye-popping presentation next Wednesday at 7am, where we will provide you with free donut holes while you listen to us convince you that $10000 per month is cheap for an underwater cabin that you will only use Never.

⟨de⟩ Sie haben sich für einen kostenlosen Timeshare in Florida qualifiziert! Bitte kommen Sie zu unserem Eye-knallen Präsentation nächsten Mittwoch um 7 Uhr, wo wir Sie mit kostenlosen Donut Löcher bieten, während Sie uns zu überzeugen, dass $10000 pro Monat ist billig für eine Unterwasser Kabine, die Sie nur verwenden Nie.

⟨*en⟩ You have qualified for a free timeshare in Florida! Please come to our eye-popping presentation next Wednesday at 7am, where we will provide you with free donut holes while you convince us that $10000 per month is cheap for an underwater cabin that you will only never use.

⟨ja⟩ フロリダの自由な時分割のために修飾した!してください私たちの目を見張るようなプレゼンテーションを次の水曜日午前7時、ここで私たちを説得しながら、無料のドーナツの穴を提供する $1万1ヶ月あたりの安価な水中キャビンの場合にのみ使用することはありません。

⟨*en⟩ You've qualified for a free timeshare in Florida! Please give us an eye-popping presentation next Wednesday at 7:00 a.m., here's a free donut hole while convincing US $
10001 is not to be used only in the case of cheap underwater cabins per month.
⟨es⟩ ¡ Usted ha calificado para un tiempo compartido libre en la Florida! por favor, danos una presentación con los ojos el próximo miércoles a las 7:00 a.m., aquí hay un agujero de Donut gratis mientras convence US $
10001 no debe ser utilizado solamente en el caso de cabinas subacuáticas baratas por mes.
⟨*en⟩ You have qualified for a free share time in Florida! Please give us a presentation with your eyes next Wednesday at 7:00 a.m., here is a free Donut hole while convincing US $10001 should not be used only in the case of cheap underwater cabins per month.
⟨+XX⟩ Characters used: 2143
✨  Done in 84.43s.
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
