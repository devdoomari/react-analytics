// FIXME: get process.env variable!

export const DEBUG_MODE = process.env.REACT_ANALYTICS_CONTEXT=='debug';

console.error(`DEBUG_MODE:`, DEBUG_MODE);