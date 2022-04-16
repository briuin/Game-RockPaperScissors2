import { createApp } from 'vue';
import App from './App.vue';

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(App);
  app.mount(el);
};

// If we are in development and in isolation,
// call mount immediately
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_game-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
