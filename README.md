[![npm version](https://badge.fury.io/js/cc-regex.svg)](https://badge.fury.io/js/cc-regex)

# cc-regex
Regular expression for Character classes

## Usage

### Find an email address

```javascript
'foo@example.com'.match(/\x{email}/g)
// ['foo@example.com']
```

### Find a URL

```javascript
'https://example.com/foo/bar'.match(/\x{url}/g)
// ['https://example.com/foo/bar']
```

### Find a 都道府県

```javascript
'島根県にパソコンなんてあるわけないじゃん'.match(/\x{都道府県}/g)
// ['島根県']
```

### Find a IP address

```javascript
'127.0.0.1'.match(/\x{ip}/g)
// ['127.0.0.1']
```

### Find a FQDN

```javascript
'example.com sub.example.com'.match(/\x{fqdn}/g)
// ['example.com', 'sub.example.com']
```

## Install

```bash
npm install cc-regex
```

### for browser

```html
<script src="https://github30.github.io/cc-regex/index.js">
```

