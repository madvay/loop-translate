## tloop

Translates something repeatedly.  Currently uses Microsoft's translation API - and you'll need your own API key, which you can put in a file named `.subkey.txt` along side this package.

If you don't want the default list of languages, add all the languages you want to translate as command line arguments.

Also available as a library with function `showTranslateSequence(text, from, toLangs)`.

````sh
| => yarn start
yarn run v1.6.0
$ node cli.js
How would you like us to process your refund this year? We can send you a check or we can transmit the funds via direct deposit to your bank.
⟨en⟩ How would you like us to process your refund this year? We can send you a check or we can transmit the funds via direct deposit to your bank.

⟨fr⟩ Comment voulez-vous que nous traitions votre remboursement cette année? Nous pouvons vous envoyer un chèque ou nous pouvons transmettre les fonds via le dépôt direct à votre banque.

⟨*en⟩ How do you want us to treat your rebate this year? We can send you a cheque or we can forward the funds via direct deposit to your bank.

⟨de⟩ Wie sollen wir Ihren Rabatt in diesem Jahr behandeln? Wir können Ihnen einen Scheck schicken, oder wir können die Mittel über Direkteinzahlung an Ihre Bank weiterleiten.

⟨*en⟩ How should we treat your discount this year? We can send you a cheque, or we can forward the funds to your bank via direct deposit.

⟨ja⟩ 今年の割引はどのように扱われますか?我々はあなたに小切手を送ることができる、または我々は直接預金を介してあなたの銀行に資金を転送することができます。

⟨*en⟩ How is this year's discount handled? We can send you a check, or we can transfer funds to your bank via direct deposit.

⟨es⟩ ¿Cómo se maneja el descuento de este año? podemos enviarle un cheque, o podemos transferir fondos a su banco vía depósito directo.

⟨*en⟩ How is this year's discount handled? We can send you a check, or we can transfer funds to your bank via direct deposit.

⟨XX⟩ Characters used: 1127
✨  Done in 4.85s.
````
