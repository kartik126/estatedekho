// import EventTrackerInterface from './BaseInterface';
import mixpanel from 'mixpanel-browser';
import { MIXPANEL_TOKEN } from 'utils/constant';

class EventTracker {
  trackerLib = null;
  config = {
    token: '',
  };

  constructor(lib, config) {
    this.trackerLib = lib;
    this.config = Object.assign({}, { token: '' }, config);
    this.init();
  }

  init(options = {}) {
    const { token } = this.config;
    if (token) {
      this.trackerLib.init(this.config.token);
      this.setConfig('secure_cookie', true);
    }
  }

  setConfig(configKey, configValue) {
    this.trackerLib.set_config({ [configKey]: configValue });
  }

  getConfig(configKey) {}

  alias(user_id) {
    const { token } = this.config;
    if (token) {
      this.trackerLib.alias(user_id);
    }
  }

  identify(user_id) {
    const { token } = this.config;
    if (token) {
      this.trackerLib.identify(user_id);
    }
  }

  setPeople(properties) {
    const { token } = this.config;
    if (token) {
      this.trackerLib.people.set(properties);
    }
  }

  track(eventName, properties = {}, options = {}) {
    const { token } = this.config;
    if (token) {
      this.trackerLib.track(eventName, properties);
    }
  }

  trackFormSubmit(formId, properties, options) {}

  trackElementClick(elementId, properties, options) {}
}

const cachedTracker = {
  tracker: null,
  get: () => {
    if (!cachedTracker.tracker) {
      const trackerLib = new EventTracker(mixpanel, { token: MIXPANEL_TOKEN });
      cachedTracker.tracker = trackerLib;
    }
    return cachedTracker.tracker;
  },
};

function getTracker() {
  return cachedTracker.get();
}

function track(eventName, properties) {
  getTracker().track(eventName, properties);
}

export default getTracker;

export { track };
