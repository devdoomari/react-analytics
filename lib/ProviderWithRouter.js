"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var lodash_1 = require("lodash");
var recompose_1 = require("recompose");
exports.withAnalyticsContextAndPath = recompose_1.withContext({
    analyticsContext: React.PropTypes.object,
    children: React.PropTypes.any
}, function (props) {
    var analyticsContext = Object.assign({}, props.analyticsContext, {
        location: props.location
    });
    var newProps = Object.assign({}, props, {
        analyticsContext: analyticsContext
    });
    var cleanNewProps = lodash_1.omit(newProps, ['router', 'location', 'history', 'params', 'routes']);
    return cleanNewProps;
});
var _ProviderWithRouter = function _ProviderWithRouter(props) {
    return React.Children.only(props.children);
};
exports.ProviderWithRouter = react_router_1.withRouter(exports.withAnalyticsContextAndPath(_ProviderWithRouter));