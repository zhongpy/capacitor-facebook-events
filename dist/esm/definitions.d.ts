export interface FacebookEventsPlugin {
    initEvent(): Promise<void>;
    setAutoInitEnabled(options: {
        enabled: boolean;
    }): Promise<void>;
    setAdvertiserTrackingEnabled(options: {
        enabled: boolean;
    }): Promise<void>;
    setAdvertiserIDCollectionEnable(options: {
        enabled: boolean;
    }): Promise<void>;
    logEvent(options: {
        event: string;
        params?: any;
    }): Promise<void>;
}
