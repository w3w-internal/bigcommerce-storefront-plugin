# BigCommerce store front plugin

This plugin adds w3w autocomplete to the BigCommerce store front. Should be used in conjunction with the [BigCommerce plugin](#not-yet).

## Build

To build the plugin, run the following command:

```bash
  npm install
  npm run build
```

this will generate a single file `build/index.js` which can be uploaded to BigCommerce.
there also a `compile` script available in the package.json which can be used to do static type checking without generating the build file.

## Test

To test the plugin, run the following command:

```bash
  npm install
  npm run test
```

## Deploy
