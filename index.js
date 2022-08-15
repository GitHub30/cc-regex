if (String.prototype.match.toString().includes("[native code]")) {
    const email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    const url = /[a-z]([a-z]|[0-9]|[+\-.])*:(\/\/((([a-z]|[0-9]|[-._~])|%[0-9a-f][0-9a-f]|[!$&'()*+,;=]|:)*@)?(\[((([0-9a-f]{1,4}:){6}([0-9a-f]{1,4}:[0-9a-f]{1,4}|([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3})|::([0-9a-f]{1,4}:){5}([0-9a-f]{1,4}:[0-9a-f]{1,4}|([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3})|([0-9a-f]{1,4})?::([0-9a-f]{1,4}:){4}([0-9a-f]{1,4}:[0-9a-f]{1,4}|([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3})|(([0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::([0-9a-f]{1,4}:){3}([0-9a-f]{1,4}:[0-9a-f]{1,4}|([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3})|(([0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::([0-9a-f]{1,4}:){2}([0-9a-f]{1,4}:[0-9a-f]{1,4}|([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3})|(([0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:([0-9a-f]{1,4}:[0-9a-f]{1,4}|([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3})|(([0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::([0-9a-f]{1,4}:[0-9a-f]{1,4}|([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3})|(([0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(([0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+\.(([a-z]|[0-9]|[-._~])|[!$&'()*+,;=]|:)+)]|([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3}|(([a-z]|[0-9]|[-._~])|%[0-9a-f][0-9a-f]|[!$&'()*+,;=])*)(:\d*)?(\/((([a-z]|[0-9]|[-._~])|%[0-9a-f][0-9a-f]|[!$&'()*+,;=]|[:@]))*)*|\/(((([a-z]|[0-9]|[-._~])|%[0-9a-f][0-9a-f]|[!$&'()*+,;=]|[:@]))+(\/((([a-z]|[0-9]|[-._~])|%[0-9a-f][0-9a-f]|[!$&'()*+,;=]|[:@]))*)*)?|((([a-z]|[0-9]|[-._~])|%[0-9a-f][0-9a-f]|[!$&'()*+,;=]|[:@]))+(\/((([a-z]|[0-9]|[-._~])|%[0-9a-f][0-9a-f]|[!$&'()*+,;=]|[:@]))*)*|)(\?((([a-z]|[0-9]|[-._~])|%[0-9a-f][0-9a-f]|[!$&'()*+,;=]|[:@])|[\/?])*)?(#((([a-z]|[0-9]|[-._~])|%[0-9a-f][0-9a-f]|[!$&'()*+,;=]|[:@])|[\/?])*)?/i
    const 都道府県 = /(東京都|北海道|(?:京都|大阪)府|.{2,3}県)/
    const ip = /((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}/
    const fqdn = /([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}/
    const match = String.prototype.match
    String.prototype.match = function (regexp) {
        regexp = new RegExp(regexp.source.replaceAll(/\x{email}/.source, email.source), regexp.flags + email.flags)
        regexp = new RegExp(regexp.source.replaceAll(/\x{url}/.source, url.source), regexp.flags + url.flags)
        regexp = new RegExp(regexp.source.replaceAll(/\x{都道府県}/.source, 都道府県.source), regexp.flags + 都道府県.flags)
        regexp = new RegExp(regexp.source.replaceAll(/\x{ip}/.source, ip.source), regexp.flags + ip.flags)
        regexp = new RegExp(regexp.source.replaceAll(/\x{fqdn}/.source, fqdn.source), regexp.flags + fqdn.flags)
        return match.call(this, regexp)
    }
}

var token
fetch("https://api.ce-cotoha.com/v1/oauth/accesstokens", {
  "headers": {
    "content-type": "application/json; charset=utf-8",
  },
  "body": "{\"grantType\":\"client_credentials\",\"clientId\":\"JZc2IvWQJMELY8tHDzKBvkDQhK2Ln9tl\",\"clientSecret\":\"UMGa5E3MruOr66fV\"}",
  "method": "POST"
}).then(r=>r.json()).then(r=>token = r.access_token)

String.prototype.matchAsync = function (regexp) {
    const classes = {
        [/\x{日付}/.source]: 'DAT',
        [/\x{時間}/.source]: 'TIM',
        [/\x{人物}/.source]: 'PSN',
        [/\x{場所}/.source]: 'LOC',
        [/\x{お金}/.source]: 'MNY',
        [/\x{組織}/.source]: 'ORG',
        [/\x{アート}/.source]: 'ART',
        [/\x{％}/.source]: 'PCT',
        [/\x{数}/.source]: 'NUM',
        [/\x{その他}/.source]: 'OTH',
    }
    return fetch("https://api.ce-cotoha.com/api/dev/nlp/v1/ne", {
      "headers": {
        "authorization": "Bearer " + token,
        "content-type": "application/json"
      },
      "body": JSON.stringify({sentence: this}),
      "method": "POST"
    }).then(r=>r.json()).then(resp => resp.result.filter(r=>r.class===classes[regexp.source]).map(r=>r.form))
}
