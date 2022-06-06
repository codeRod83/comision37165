eCommerce Proyecto React Js (CoderHouse)

> Aplicacion de eCommerce, muestra catalogo de Productos, detalle de Productos y Carrito de compras.


## Descripcion del Proyecto

Esta app de eCommerce, permite navegar en la lista de productos, tanto en la lista general de productos, como entre las categorias de los mismos, filtrandolos productos por categorias. 
Al seleccionar un producto te manda la informacion detallada del mismo, asi como la opcion de agregar el producto al carrito de compras, dando a elegir la cantidad a agregar (No permitiendo agregar mas del stock disponible).

Al agregar el producto al carrito, se despliegan 2 opciones
- ***Seguir Comprando:*** Al elegir esta opcion te redirige a la lista de prosuctos, donde puedes seguir agregando productos al carrito.
- ***Ir al Carrito de compras:*** Al elegir esta opcion se te redirige al carrito de compras.

Dentro del componente del Carrito de compras (***Cart***) se muestra el detalle de todos los productos agregados al carrito de compras, ofreciendo de igual manera varias opciones.

- ***Eliminar producto del carrito de compras:*** Elimina el producto que eliges de la lista del carrito de compras.
- ***Vaciar Carrito de Compras:*** Elimina todos los productos del carrito de compras.
- ***Terminar Compra*** Genera una nueva coleccion en firebase con el catalogo de productos que se eligieron comprar.
(Al elegir esta opcion manda un anuncio confirmando la compra y mostrando el id del pedido)

#### What's different:

- **Works with several types of shared data** (UTIs). Currently, URLs, text and images are supported. If you would like to remove any of these types, feel free to edit ShareExtension-Info.plist (NSExtensionActivationRule section) after plugin's installation
- **Support of sharing several photos at once is supported**. By default, the maximum number is 10, but this can be easily edited in the plugin's .plist file
- **Does not show native UI with "Post" option**. Having two-step share (enter sharing message and then pick the receiver in the Cordova app) might be a bad user experience, so this plugin opens Cordova application immediately and passes the shared data to it. Thereby, you are expected to implement sharing UI in your Cordova app.

You'd like your app to be listed in the **Send to...** section for certain types of files, on both **Android** and **iOS**? This is THE plugin! No need to meddle into Android's manifests and iOS's plist files, it's (almost) all managed for you by a no brainer one liner installation command.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)



## Installation

Here's the promised one liner:

```
cordova plugin add cordova-plugin-openwith \
  --variable IOS_URL_SCHEME=cordovaopenwithdemo
```

| variable | example | notes |
|---|---|---|
| `DISPLAY_NAME` | My App Name | If you want to use a different name than your project name |
| `IOS_BUNDLE_IDENTIFIER` | com.domain.app | Your app bundle identifier |
| `IOS_URL_SCHEME` | uniquelonglowercase | Any random long string of lowercase alphabetical characters |

It shouldn't be too hard. But just in case, Jean-Christophe Hoelt [posted a screencast of it](https://youtu.be/eaE4m_xO1mg).

## Usage

```js
document.addEventListener('deviceready', setupOpenwith, false);
function setupOpenwith() {
  // Increase verbosity if you need more logs
  //cordova.openwith.setVerbosity(cordova.openwith.DEBUG);
  // Initialize the plugin
  cordova.openwith.init(initSuccess, initError);
  function initSuccess()  { console.log('init success!'); }
  function initError(err) { console.log('init failed: ' + err); }
  // Define your file handler
  cordova.openwith.addHandler(myHandler);
  function myHandler(intent) {
    console.log('intent received');
    console.log('  text: ' + intent.text); // description to the sharing, for instance title of the page when shared URL from Safari
    for (var i = 0; i < intent.items.length; ++i) {
      var item = intent.items[i];
      console.log('  type: ', item.uti);    // UTI. possible values: public.url, public.text or public.image
      console.log('  type: ', item.type);   // Mime type. For example: "image/jpeg"
      console.log('  data: ', item.data);   // shared data. For URLs and text - actually the shared URL or text. For image - its base64 string representation.
      console.log('  text: ', item.text);   // text to share alongside the item. as we don't allow user to enter text in native UI, in most cases this will be empty. However for sharing pages from Safari this might contain the title of the shared page.
      console.log('  name: ', item.name);   // suggested name of the image. For instance: "IMG_0404.JPG"
      console.log('  utis: ', item.utis);   // some optional additional info
      // Read file with Cordova’s file plugin
      if (item.fileUrl) {
        resolveLocalFileSystemURL(item.fileUrl, (fileEntry) => {
          fileEntry.file((file) => {
            let mediaType = file.type.split('/')[0].toLowerCase()
            if (mediaType == 'image') {
              let reader = new FileReader
              reader.readAsDataURL(file)
              reader.onloadend = () => {
                // Can use this for an <img> tag
                file.src = reader.result
              }
            }
          })
        })
      }
    }
  }
}
```

## API

### cordova.openwith.setVerbosity(level)

Change the verbosity level of the plugin.

`level` can be set to:

 - `cordova.openwith.DEBUG` for maximal verbosity, log everything.
 - `cordova.openwith.INFO` for the default verbosity, log interesting stuff only.
 - `cordova.openwith.WARN` for low verbosity, log only warnings and errors.
 - `cordova.openwith.ERROR` for minimal verbosity, log only errors.

### cordova.openwith.addHandler(handlerFunction)

Add an handler function, that will get notified when a file is received.

**Handler function**

The signature for the handler function is `function handlerFunction(intent)`. See below for what an intent is.

**Intent**

`intent` describe the operation to perform, toghether with the associated data. It has the following fields:

 - `text`: text to share alongside the item, in most cases this will be an empty string.
 - `items`: an array containing one or more data descriptor.

**Data descriptor**

A data descriptor describe one file. It is a javascript object with the following fields:

 - `uti`: Unique Type Identifier. possible values: public.url, public.text or public.image
 - `type`: Mime type. For example: "image/jpeg"
 - `text`: test description of the share, generally empty
 - `name`: suggested file name
 - `utis`: list of UTIs the file belongs to.

## Contribute

Contributions in the form of GitHub pull requests are welcome. Please adhere to the following guidelines:
  - Before embarking on a significant change, please create an issue to discuss the proposed change and ensure that it is likely to be merged.
  - Follow the coding conventions used throughout the project. Many conventions are enforced using eslint and pmd. Run `npm t` to make sure of that.
  - Any contributions must be licensed under the MIT license.

## License

[MIT](./LICENSE)