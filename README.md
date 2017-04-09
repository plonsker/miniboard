# Miniboard
Quick reference for trending stories across multiple sites using the Chartbeat API

Clone this repo to a safe place on your machine. As of the most recent push, you will need to create your own config.js file to store your Chartbeat API key.

In public/js, create the config.js file and set your API key to the following:

```
var config = {
  cbKey : "YOUR API KEY HERE"
}
```

Once you have set your API key, go to chrome://extensions, turn on developer mode and select 'load unpacked extension'. Choose the Miniboard directory and you're all set to go.
