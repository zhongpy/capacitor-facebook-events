import { WebPlugin } from '@capacitor/core';
import type { FacebookEventsPlugin } from './definitions';
export declare class FacebookEventsWeb extends WebPlugin implements FacebookEventsPlugin {
    constructor();
    loadFBSDK(): void;
    initEvent(): Promise<void>;
    setAdvertiserTrackingEnabled({ enabled }: {
        enabled: boolean;
    }): Promise<void>;
    logEvent(options: {
        event: string;
        params?: any;
    }): Promise<void>;
}
