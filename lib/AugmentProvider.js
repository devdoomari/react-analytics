"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var recompose_1 = require("recompose");
var inject_1 = require("./inject");
var Provider_1 = require("./Provider");
// import { ProviderWithRouter } from './ProviderWithRouter';
var augmentContext_1 = require("./augmentContext");
exports.withAnalyticsContext = recompose_1.withContext({
    analyticsContext: React.PropTypes.object,
    children: React.PropTypes.any
}, function (props) {
    return props;
});
var AnalyticsContextAugmentProvider = function (_React$Component) {
    _inherits(AnalyticsContextAugmentProvider, _React$Component);

    function AnalyticsContextAugmentProvider() {
        _classCallCheck(this, AnalyticsContextAugmentProvider);

        return _possibleConstructorReturn(this, (AnalyticsContextAugmentProvider.__proto__ || Object.getPrototypeOf(AnalyticsContextAugmentProvider)).apply(this, arguments));
    }

    _createClass(AnalyticsContextAugmentProvider, [{
        key: "render",
        value: function render() {
            return React.createElement(Provider_1.Provider, { analyticsContext: augmentContext_1.augmentAnalyticsContext(this.props.analyticsContext, this.props.augmentContext) }, this.props.children);
        }
    }]);

    return AnalyticsContextAugmentProvider;
}(React.Component);
AnalyticsContextAugmentProvider = __decorate([inject_1.injectAnalyticsContext], AnalyticsContextAugmentProvider);
exports.default = AnalyticsContextAugmentProvider;