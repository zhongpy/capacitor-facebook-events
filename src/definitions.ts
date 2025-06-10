export interface FacebookEventsPlugin {
  initEvent(): Promise<void>;
  setAdvertiserTrackingEnabled(options: { enabled: boolean }): Promise<void>;
  setAdvertiserIDCollectionEnable(options: { enabled: boolean }): Promise<void>;
  logEvent(options: { event: string; params?: any }): Promise<void>;
}
