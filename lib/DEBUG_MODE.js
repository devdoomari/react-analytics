// FIXME: get process.env variable!
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEBUG_MODE = process.env.REACT_ANALYTICS_CONTEXT == 'debug';
console.error("DEBUG_MODE:", exports.DEBUG_MODE);