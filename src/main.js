import "./globalErrorListeners.js";
import Tracker from '@openreplay/tracker';
import App from "./App.svelte";

const tracker = new Tracker({
  projectKey: YOUR_PROJECT_KEY,
  __DISABLE_SECURE_MODE: true
});
tracker.start();


const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export { tracker };
export default app;

