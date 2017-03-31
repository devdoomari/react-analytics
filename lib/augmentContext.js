"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var DEBUG_MODE_1 = require("./DEBUG_MODE");
function augmentAnalyticsContext(parentContext, options) {
        return Object.assign({}, parentContext, options, { componentNameHierarchy: lodash_1.concat(parentContext.componentNameHierarchy || [], options.componentName), actionsHierarchy: lodash_1.concat(parentContext.actionsHierarchy || [], options.action), __DEBUG_COMPONENT_HIERARCHY: DEBUG_MODE_1.DEBUG_MODE && lodash_1.concat(parentContext.__DEBUG_COMPONENT_HIERARCHY || [], options.component), __DEBUG_CONTEXT_HISTORY: DEBUG_MODE_1.DEBUG_MODE && lodash_1.concat(parentContext.__DEBUG_CONTEXT_HISTORY || [], parentContext) });
}
exports.augmentAnalyticsContext = augmentAnalyticsContext;