"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var recompose_1 = require("recompose");
exports.injectAnalyticsContext = recompose_1.getContext({
    analyticsContext: React.PropTypes.any
});