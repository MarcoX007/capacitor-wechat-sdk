import { WebPlugin } from '@capacitor/core';
import type { WechatSDKPlugin } from './definitions';
export declare class WechatSDKWeb extends WebPlugin implements WechatSDKPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    isInstalled(): Promise<{
        value: boolean;
    }>;
    pay(payParam: {
        prepayId: string;
        packageValue: string;
        nonceStr: string;
        timeStamp: string;
        sign: string;
    }): Promise<{
        value: string;
    }>;
    launchMiniProgram(options: {
        userName: string;
        path: string;
        miniProgramType: number;
    }): Promise<void>;
    shareImage(options: {
        image: string;
        title: string;
        description: string;
        scene: number;
    }): Promise<void>;
    shareLink(options: {
        url: string;
        title: string;
        description: string;
        thumb?: string;
        scene: number;
    }): Promise<void>;
    shareMiniProgram(options: {
        webpageUrl: string;
        userName: string;
        path: string;
        hdImageData: string;
        withShareTicket: boolean;
        miniProgramType: number;
        title: string;
        description: string;
        scene: number;
    }): Promise<void>;
    shareText(options: {
        text: string;
        scene: string;
    }): Promise<void>;
    sendAuthRequest(options: {
        scope: string;
        state: string;
    }): Promise<void>;
    wxOpenCustomerServiceChat(options: {
        corpId: string;
        url: string;
    }): Promise<any>;
}
