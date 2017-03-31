import { BaseCustomAttrs, EventSenderType } from '../../src';
export declare type CustomAttrsType = {
    teacher?: string;
    class?: string;
    subject?: string;
    level?: number;
    studentName?: string;
};
export declare class CustomAttrs extends BaseCustomAttrs<CustomAttrsType> {
    augmentWith(childAttrs: CustomAttrs): CustomAttrs;
}
export declare const report: EventSenderType;
