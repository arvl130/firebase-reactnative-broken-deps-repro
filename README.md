# 🐞 Sample project for reproducing [Issue #7849](https://github.com/firebase/firebase-js-sdk/issues/7849)

Steps to reproduce:

1. Clone this repository.

```sh
$ git clone https://github.com/arvl130/firebase-reactnative-broken-deps-repro
$ cd firebase-reactnative-broken-deps-repro
```

2. Install the project dependencies.

```sh
$ npm install
```

3. Setup environment variables.

```sh
$ cp .env.template .env
$ vi .env
```

4. Run the project.

```sh
$ npm run web
```

5. Observe the following error message while bundling:

```
Web Bundling failed 16275ms
Unable to resolve "stream/web" from "node_modules/undici/lib/core/util.js"
Web node_modules/expo-router/entry.js ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 85.6% (815/881)
Metro error: Unable to resolve module stream/web from /home/arvl/src/firebase-reactnative-broken-deps-repro/node_modules/undici/lib/core/util.js: stream/web could not be found within the project or in these directories:
  node_modules

  369 | function ReadableStreamFrom (iterable) {
  370 |   if (!ReadableStream) {
> 371 |     ReadableStream = require('stream/web').ReadableStream
      |                               ^
  372 |   }
  373 |
  374 |   if (ReadableStream.from) {

  117 |             const errorObject = JSON.parse(text);
  118 |             var ref;
> 119 |             throw new MetroNodeError((ref = (0, _ansi).stripAnsi(errorObject.message)) != null ? ref : errorObject.message, errorObject);
      |                   ^
  120 |         }
  121 |         throw new Error(`[${res.status}]: ${res.statusText}\n${text}`);
  122 |     }

Call Stack
  requireFileContentsWithMetro (node_modules/@expo/cli/build/src/start/server/getStaticRenderFunctions.js:119:19)
  process.processTicksAndRejections (node:internal/process/task_queues)
  async Object.getStaticRenderFunctions (node_modules/@expo/cli/build/src/start/server/getStaticRenderFunctions.js:139:28)
  async bundleStaticHtml (node_modules/@expo/cli/build/src/start/server/metro/MetroBundlerDevServer.js:170:43)
  async MetroBundlerDevServer.getStaticPageAsync (node_modules/@expo/cli/build/src/start/server/metro/MetroBundlerDevServer.js:179:41)
  async (node_modules/@expo/cli/build/src/start/server/metro/MetroBundlerDevServer.js:291:46)
```

## ⚖️ License

This project is licensed under the MIT License.

Copyright © 2023 Angelo Geulin
