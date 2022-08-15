# cc-regex
Regular expression for Character classes

## Usage

### Find an email address

```javascript
'foo@example.com'.match(/\x{email}/g)
// ['foo@example.com']
```

### Find a url

```javascript
'https://example.com/foo/bar'.match(/\x{url}/g)
// ['https://example.com/foo/bar']
```

### Find a 都道府県

```javascript
'島根県にパソコンなんてあるわけないじゃん'.match(/\x{都道府県}/g)
// ['島根県']
```

## Install

```bash
npm install cc-regex
```
