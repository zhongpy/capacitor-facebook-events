package com.dabchy.plugins.facebookevents;

import android.os.Bundle;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.FacebookSdk;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import java.util.Iterator;

public class FacebookEvents {

    private AppEventsLogger logger;

    public void initEvents(Plugin plugin) {
        FacebookSdk.fullyInitialize();
        FacebookSdk.sdkInitialize(plugin.getContext());
        logger = AppEventsLogger.newLogger(plugin.getContext());
    }

    public void logEvent(String event, JSObject params) {
        if (logger == null) {
            // Logger not initialized, handle this scenario appropriately
            return;
        }

        if (params != null && params.length() > 0) {
            Bundle parameters = new Bundle();
            for (Iterator<String> it = params.keys(); it.hasNext();) {
                String key = it.next();
                parameters.putString(key, params.getString(key));
            }
            logger.logEvent(event, parameters);
        } else {
            // Log the event without parameters if params is null or empty
            logger.logEvent(event);
        }
    }

    public void setAutoInitEnabled(Boolean enabled){
        FacebookSdk.setAutoInitEnabled(enabled);
    }

    public void setAdvertiserTrackingEnabled(Boolean enabled){
        FacebookSdk.setAutoLogAppEventsEnabled(enabled);
    }

    public void setAdvertiserIDCollectionEnable(Boolean enable){
        FacebookSdk.setAdvertiserIDCollectionEnabled(enable);
    }
}
