"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const recompose_1 = require("recompose");
const inject_1 = require("./inject");
const Provider_1 = require("./Provider");
// import { ProviderWithRouter } from './ProviderWithRouter';
const augmentContext_1 = require("./augmentContext");
exports.withAnalyticsContext = recompose_1.withContext({
    analyticsContext: React.PropTypes.object,
    children: React.PropTypes.any,
}, (props) => props);
let AnalyticsContextAugmentProvider = class AnalyticsContextAugmentProvider extends React.Component {
    render() {
        return (React.createElement(Provider_1.Provider, { analyticsContext: augmentContext_1.augmentAnalyticsContext(this.props.analyticsContext, this.props.augmentContext) }, this.props.children));
    }
};
AnalyticsContextAugmentProvider = __decorate([
    inject_1.injectAnalyticsContext
], AnalyticsContextAugmentProvider);
exports.default = AnalyticsContextAugmentProvider;
