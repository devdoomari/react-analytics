"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const recompose_1 = require("recompose");
exports.injectAnalyticsContext = recompose_1.getContext({
    analyticsContext: React.PropTypes.any,
});
