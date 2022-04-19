import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

// Mount function to start up the app
const mountElement = (el) => {
  const app = createApp(App);
  app.mount(el);
};

// If we are in development and in isolation,
// call mount immediately
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_game-dev-root');

  if (devRoot) {
    mountElement(devRoot);
  }
}

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
        player: this.player,
        connection: this.connection,
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
