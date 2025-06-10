package com.dabchy.plugins.facebookevents;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "FacebookEvents")
public class FacebookEventsPlugin extends Plugin {

    private FacebookEvents facebookEvents;

    @Override
    public void load() {
        facebookEvents = new FacebookEvents();
    }

    @PluginMethod
    public void initEvent(PluginCall call){
        facebookEvents.initEvents(this);
        call.resolve();
    }

    @PluginMethod
    public void setAdvertiserTrackingEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled", true);
        facebookEvents.setAdvertiserTrackingEnabled(enabled);
        call.resolve();
    }

    @PluginMethod
    public void logEvent(PluginCall call) {
        String event = call.getString("event");
        JSObject params = call.getObject("params", new JSObject());
        facebookEvents.logEvent(event, params);
        call.resolve();
    }
}
