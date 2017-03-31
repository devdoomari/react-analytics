"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_1 = require("react-router");
const lodash_1 = require("lodash");
const recompose_1 = require("recompose");
exports.withAnalyticsContextAndPath = recompose_1.withContext({
    analyticsContext: React.PropTypes.object,
    children: React.PropTypes.any,
}, (props) => {
    const analyticsContext = Object.assign({}, props.analyticsContext, {
        location: props.location,
    });
    const newProps = Object.assign({}, props, {
        analyticsContext,
    });
    const cleanNewProps = lodash_1.omit(newProps, [
        'router', 'location', 'history', 'params', 'routes',
    ]);
    return cleanNewProps;
});
const _ProviderWithRouter = (props) => {
    return React.Children.only(props.children);
};
exports.ProviderWithRouter = react_router_1.withRouter(exports.withAnalyticsContextAndPath(_ProviderWithRouter));
