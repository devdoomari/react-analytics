import * as React from 'react';
import {
  getContext,
  InferableComponentEnhancer,
} from 'recompose';
export const injectAnalyticsContext = getContext({
  analyticsContext: React.PropTypes.any,
});

export {
  InferableComponentEnhancer as _____,
}