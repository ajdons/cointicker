# cointicker
A teeny-tiny scraper to get quick price info about a cryptocurrency

## View all markets

```console
foo@bar: ajdons$ node cointicker VEN
Getting data for vechain
  
Bithumb VEN/KRW 
$2.36

Huobi VEN/USDT 
$2.34

Huobi VEN/BTC 
$2.35

Huobi VEN/ETH 
$2.35

BitMart VEN/BTC 
$2.35
.
.
.
````

## Filter by exchange

```console
foo@bar: ajdons$ node cointicker NEO -e binance
Getting data for neo
Binance NEO/USDT 
$29.95

Binance NEO/BTC 
$29.85

Binance NEO/ETH 
$30.00

Binance NEO/BNB 
$29.89
````
