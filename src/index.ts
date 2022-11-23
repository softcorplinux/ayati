/// <reference lib="webworker" />

export { default as Observable } from './core/Observable';
// events
export { default as Install } from './core/events/Install';
// plugins
export { default as ExpirationPlugin } from './core/plugins/ExpirationPlugin';
// strategies
export { default as CacheFirst } from './core/strategies/CacheFirst';
// types
export * from './core/types/common';
export * from './core/types/plugin';
export * from './core/types/strategy';

// import ExpirationPlugin from './core/plugins/ExpirationPlugin';
// // import CacheFirst from './core/strategies/CacheFirst';

// // const casheFirst = new CacheFirst({
// //   cacheName: 'static_test_name',
// //   plugins: [new ExpirationPlugin()],
// // });

// console.log(new ExpirationPlugin());

// // import * as path from 'node:path';
// // import * as fs from 'node:fs';

// // self.addEventListener('install', (event) => {
// //   event.waitUntil(deleteOldCaches());
// //   event.waitUntil(
// //     addResourcesToCache([
// //       '/',
// //       '/index.html',
// //       '/app.js',
// //       '/style.css',
// //       '/gallery/img1.jpg',
// //       '/gallery/img2.jpg',
// //       '/gallery/img3.jpg',
// //       '/gallery/img4.jpg',
// //     ]),
// //   );
// // });

// // type Observers = {
// //   install: FuncEvent[];
// //   activate: FuncEvent[];
// // };
// // type FuncEvent = {
// //   (e: ExtendableEvent): void;
// // };

// class Mazu {
//   // public static VERSION = 'gigantoSW-v1';
//   // public observers: Observers = {
//   //   install: [],
//   //   activate: [],
//   // };
//   // constructor() {
//   //   if ('serviceWorker' in navigator) {
//   //     try {
//   //       navigator.serviceWorker
//   //         .register('index.js', {
//   //           scope: '/',
//   //         })
//   //         .then((registration) => {
//   //           if (registration.installing) {
//   //             console.log('Service worker installing');
//   //           } else if (registration.waiting) {
//   //             console.log('Service worker installed');
//   //           } else if (registration.active) {
//   //             console.log('Service worker active');
//   //           }
//   //         });
//   //     } catch (e) {
//   //       console.log(`Error ${e}`);
//   //     }
//   //   }
//   // }
//   // addInstall(f: FuncEvent) {
//   //   this.observers.install.push(f);
//   // }
//   // subscribe(f: any) {
//   //   this.observers.push(f);
//   // }
//   // unsubscribe(f: any) {
//   //   this.observers = this.observers.filter((subscriber: any) => subscriber !== f);
//   // }
//   // run(data: any) {
//   //   this.observers.install.forEach((observer: any) => observer(data));
//   // }
//   // run() {
//   //   self.addEventListener('install', (event) => {
//   //     this.observers.install.forEach((observer: any) => observer(event));
//   //   });
//   // }
//   // run() {
//   //   if ('serviceWorker' in navigator) {
//   //     try {
//   //       navigator.serviceWorker
//   //         .register('index.js', {
//   //           scope: '/',
//   //         })
//   //         .then((registration) => {
//   //           if (registration.installing) {
//   //             console.log('Service worker installing');
//   //           } else if (registration.waiting) {
//   //             console.log('Service worker installed');
//   //           } else if (registration.active) {
//   //             console.log('Service worker active');
//   //           }
//   //         });
//   //     } catch (e) {
//   //       console.log(`Error ${e}`);
//   //     }
//   //   }
//   // }
// }

// const mazu = new Mazu();
// // mazu.addInstall((e) => {
// //   e.waitUntil(
// //     (async (responses: any) => {
// //       const cache = await caches.open(Mazu.VERSION);
// //       await cache.addAll(responses);
// //       console.log(333333, cache, responses);
// //     })(['/index.html', '/style.css', '/gallery/img1.jpg', '/gallery/img2.jpg']),
// //   );
// // });
// // mazu.addInstall((e) => {
// //   e.waitUntil(
// //     (async (responses: any) => {
// //       const cache = await caches.open(Mazu.VERSION);
// //       console.log(44444, cache, responses);
// //       await cache.addAll(responses);
// //     })(['/gallery/img3.jpg', '/gallery/img4.jpg']),
// //   );
// // });
// // mazu.run();
// // console.log(mazu.observers);

// // async function getChaches() {
// //   console.log(555555555);
// //   const cache = await caches.open(Mazu.VERSION);
// //   console.log(44444, await cache.keys());
// // }
// // getChaches();

// /////////////////////////////////////////////////////////////

// // class GigantoSW {
// //   private readonly _self = self;

// //   public static VERSION = 'gigantoSW-v1';

// //   constructor({ scriptURL, ...options }: IRegistrationOptions = { scriptURL: 'index.js', scope: '/' }) {
// //     Object.defineProperty(this, '_self', {
// //       writable: false,
// //       enumerable: false,
// //       configurable: false,
// //     });

// // if ('serviceWorker' in navigator) {
// //   try {
// //     navigator.serviceWorker.register(scriptURL, options).then((registration) => {
// //       if (registration.installing) {
// //         console.log('Service worker installing');
// //       } else if (registration.waiting) {
// //         console.log('Service worker installed');
// //       } else if (registration.active) {
// //         console.log('Service worker active');
// //       }

// //       // if (navigator.serviceWorker.controller) {
// //       //   console.log('This page is currently controlled by:', navigator.serviceWorker.controller);
// //       // }

// //       // navigator.serviceWorker.addEventListener('message', (event) => {
// //       //   console.log(event.data.msg, event.data.url);
// //       // });
// //       // navigator.serviceWorker.oncontrollerchange = () => {
// //       //   console.log('This page is now controlled by', navigator.serviceWorker.controller);
// //       // };
// //     });
// //   } catch (e) {
// //     console.log(`Error ${e}`);
// //   }
// // }
// //     // Object.defineProperty(this, '_version', {
// //     //   writable: false,
// //     // });
// //     // this._version = new Proxy(this._version, { // (*)
// //     //   set(target, prop, val) { // для перехвата записи свойства
// //     //     // if (typeof val == 'number') {
// //     //     //   target[prop] = val;
// //     //     //   return true;
// //     //     // } else {
// //     //     //   return false;
// //     //     // }
// //     //     return val;
// //     //   }
// //     // });
// //     // this.VERSION = 'ertytre';
// //     // console.log(1, Object.getOwnPropertyDescriptor(this, '_VERSION'));
// //     // console.log(2, Object.getOwnPropertyDescriptors(this));
// //     // console.log(3, Object.getOwnPropertyNames(this));
// //     // console.log(4, Object.getOwnPropertySymbols(this));
// //     // console.log(5, Object.getPrototypeOf(this));
// //   }

// //   public install(...listeners: EventListener[]) {
// //     // console.log('_self', this._self);
// //     // this._self.addEventListener('install', (event) => {});
// //     const addResourcesToCache = async (responses: any) => {
// //       const cache = await caches.open(GigantoSW.VERSION);
// //       await cache.addAll(responses);
// //     };
// //     this._self.addEventListener('install', (event: Event) => {
// //       listeners.forEach((listener) => {
// //         listener(event);
// //       });

// //       // console.log('event', (event as ExtendableEvent).waitUntil(addResourcesToCache([])));
// //       // event.waitUntil(deleteOldCaches());
// //       // event.waitUntil(
// //       // addResourcesToCache([
// //       //   '/',
// //       //   '/index.html',
// //       //   '/app.js',
// //       //   '/style.css',
// //       //   '/gallery/img1.jpg',
// //       //   '/gallery/img2.jpg',
// //       //   '/gallery/img3.jpg',
// //       //   '/gallery/img4.jpg',
// //       // ])
// //       // );
// //     });
// //     // const res = Object.assign('waitUntil', { waitUntil: this.waitUntil });
// //     return this;
// //   }

// //   public activate() {
// //     console.log('activate');

// //     return this;
// //   }

// //   public fetch() {
// //     console.log('fetch');
// //     return this;
// //   }
// // }

// // const sw = new GigantoSW();
// // sw.install(
// //   (event: Event) => {
// //     const responses = [
// //       '/index.html',
// //       '/style.css',
// //       '/gallery/img1.jpg',
// //       '/gallery/img2.jpg',
// //       '/gallery/img3.jpg',
// //       '/gallery/img4.jpg',
// //     ];
// // (event as ExtendableEvent).waitUntil(
// //   (async (responses: any) => {
// //     const cache = await caches.open(GigantoSW.VERSION);
// //     console.log(333333, cache, responses);
// //     await cache.addAll(responses);
// //   })(responses),
// // );
// //   },
// //   // (event: Event) => {
// //   //   console.log('22222', event);
// //   // },
// //   // (event: Event) => {
// //   //   console.log('33333', event);
// //   // },
// // );
// // // .activate()
// // // .activate()
// // // .fetch();

// // interface IRegistrationOptions extends RegistrationOptions {
// //   scriptURL: string | URL;
// // }
