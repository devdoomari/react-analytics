"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const recompose_1 = require("recompose");
exports.withAnalyticsContext = recompose_1.withContext({
    analyticsContext: React.PropTypes.object,
    children: React.PropTypes.any
}, props => props);
const ProviderComponent = (props, context) => {
    return React.Children.only(props.children);
};
exports.Provider = exports.withAnalyticsContext(ProviderComponent);