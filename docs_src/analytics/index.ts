import {
  BaseCustomAttrs,
  EventSenderType,
} from '../../src';

import * as toastr from 'toastr';

export type CustomAttrsType = {
  teacher?: string;
  class?: string;
  subject?: string;
  level?: number;
  studentName?: string;
};

export class CustomAttrs extends BaseCustomAttrs<CustomAttrsType> {
  augmentWith(childAttrs: CustomAttrs): CustomAttrs {
    return new CustomAttrs({
      ...this.attrs,
      ...childAttrs.attrs,
    });
  }
}

export const report: EventSenderType = async (args) => {
  toastr.success(JSON.stringify(args));
}