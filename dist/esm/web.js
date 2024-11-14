import { WebPlugin } from '@capacitor/core';
export class WechatSDKWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map