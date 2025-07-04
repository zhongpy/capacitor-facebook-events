import { WebPlugin } from '@capacitor/core';

import type { FacebookEventsPlugin } from './definitions';

declare let FB: any;

export class FacebookEventsWeb extends WebPlugin implements FacebookEventsPlugin {
  constructor() {
    super();
  }

  loadFBSDK(): void {
    ((d, s, id) => {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  async initEvent(): Promise<void> {
    this.loadFBSDK();
  }

  async setAutoInitEnabled({ enabled }: { enabled: boolean }): Promise<void> {
    console.warn(
      `setAutoInitEnabled called with enabled: ${enabled}. Note: This is not applicable on the web platform.`,
    );
  }

  async setAdvertiserTrackingEnabled({ enabled }: { enabled: boolean }): Promise<void> {
    console.warn(
      `setAdvertiserTrackingEnabled called with enabled: ${enabled}. Note: This is not applicable on the web platform.`,
    );
  }

  async setAdvertiserIDCollectionEnable({ enabled }: { enabled: boolean }): Promise<void> {
    console.warn(
      `setAdvertiserIDCollectionEnable called with enabled: ${enabled}. Note: This is not applicable on the web platform.`,
    );
  }

  async logEvent(options: { event: string; params?: any }): Promise<void> {
    if (typeof FB !== 'undefined') {
      FB.AppEvents.logEvent(options.event, options.params);
    } else {
      console.error('Facebook SDK not loaded');
    }
  }
}
