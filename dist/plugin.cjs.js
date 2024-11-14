'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const WechatSDK = core.registerPlugin('WechatSDK', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.WechatSDKWeb()),
});

class WechatSDKWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    isInstalled() {
        return Promise.resolve({ value: false });
    }
    pay(payParam) {
        console.log(payParam);
        return Promise.resolve({ value: '' });
    }
    launchMiniProgram(options) {
        console.log(options);
        return Promise.resolve(undefined);
    }
    shareImage(options) {
        console.log(options);
        return Promise.resolve(undefined);
    }
    shareLink(options) {
        console.log(options);
        return Promise.resolve(undefined);
    }
    shareMiniProgram(options) {
        console.log(options);
        return Promise.resolve(undefined);
    }
    shareText(options) {
        console.log(options);
        return Promise.resolve(undefined);
    }
    sendAuthRequest(options) {
        console.log(options);
        return Promise.resolve(undefined);
    }
    wxOpenCustomerServiceChat(options) {
        console.log(options);
        return Promise.resolve(undefined);
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    WechatSDKWeb: WechatSDKWeb
});

exports.WechatSDK = WechatSDK;
//# sourceMappingURL=plugin.cjs.js.map
