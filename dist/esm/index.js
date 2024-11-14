import { registerPlugin } from '@capacitor/core';
const WechatSDK = registerPlugin('WechatSDK', {
    web: () => import('./web').then(m => new m.WechatSDKWeb()),
});
export * from './definitions';
export { WechatSDK };
//# sourceMappingURL=index.js.map