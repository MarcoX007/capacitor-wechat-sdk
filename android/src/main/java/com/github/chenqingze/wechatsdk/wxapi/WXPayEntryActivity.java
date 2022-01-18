package com.github.chenqingze.wechatsdk.wxapi;

import static com.github.chenqingze.wechatsdk.Constants.ERROR_WECHAT_RESPONSE_AUTH_DENIED;
import static com.github.chenqingze.wechatsdk.Constants.ERROR_WECHAT_RESPONSE_COMMON;
import static com.github.chenqingze.wechatsdk.Constants.ERROR_WECHAT_RESPONSE_SENT_FAILED;
import static com.github.chenqingze.wechatsdk.Constants.ERROR_WECHAT_RESPONSE_UNKNOWN;
import static com.github.chenqingze.wechatsdk.Constants.ERROR_WECHAT_RESPONSE_UNSUPPORT;
import static com.github.chenqingze.wechatsdk.Constants.ERROR_WECHAT_RESPONSE_USER_CANCEL;
import static com.github.chenqingze.wechatsdk.Constants.WECHAT_RESPONSE_OK;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.github.chenqingze.wechatsdk.Constants;
import com.github.chenqingze.wechatsdk.WechatSDKPlugin;
import com.tencent.mm.opensdk.modelbase.BaseReq;
import com.tencent.mm.opensdk.modelbase.BaseResp;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.IWXAPIEventHandler;

public class WXPayEntryActivity extends Activity implements IWXAPIEventHandler {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        Log.d(Constants.TAG , "WXPayEntryActivity==================>onCreate");
        super.onCreate(savedInstanceState);
        IWXAPI wxAPI = WechatSDKPlugin.getWxAPI(this);
        wxAPI.handleIntent(getIntent(), this);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        Log.d(Constants.TAG, "WXPayEntryActivity==================>onNewIntent");
        super.onNewIntent(intent);
        setIntent(intent);
        IWXAPI wxAPI = WechatSDKPlugin.getWxAPI(this);
        wxAPI.handleIntent(intent, this);
    }


    @Override
    public void onReq(BaseReq baseReq) {
        Log.d(Constants.TAG , "WXPayEntryActivity==================>Wechat onReq call!");
    }

    @Override
    public void onResp(BaseResp resp) {
        Log.d(Constants.TAG,"WXPayEntryActivity===================>onResp");
        PluginCall call = WechatSDKPlugin.bridge.getSavedCall(WechatSDKPlugin.callbackId);
        switch (resp.errCode) {
            case BaseResp.ErrCode.ERR_OK:
                JSObject ret = new JSObject();
                ret.put("code", 0);
                ret.put("message", WECHAT_RESPONSE_OK);
                call.resolve(ret);
                break;
            case BaseResp.ErrCode.ERR_USER_CANCEL:
                call.reject(ERROR_WECHAT_RESPONSE_USER_CANCEL, "-2");
                break;
            case BaseResp.ErrCode.ERR_AUTH_DENIED:
                call.reject(ERROR_WECHAT_RESPONSE_AUTH_DENIED, "-4");
                break;
            case BaseResp.ErrCode.ERR_SENT_FAILED:
                call.reject(ERROR_WECHAT_RESPONSE_SENT_FAILED, "-3");
                break;
            case BaseResp.ErrCode.ERR_UNSUPPORT:
                call.reject(ERROR_WECHAT_RESPONSE_UNSUPPORT, "-5");
                break;
            case BaseResp.ErrCode.ERR_COMM:
                call.reject(ERROR_WECHAT_RESPONSE_COMMON, "-1");
                break;
            default:
                call.reject(ERROR_WECHAT_RESPONSE_UNKNOWN, "-6");
                break;
        }
        WechatSDKPlugin.bridge.releaseCall(call);
        finish();
    }
}
