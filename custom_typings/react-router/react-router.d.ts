declare module 'react-router-types' {
  import {
    InjectedRouter
  } from 'react-router';
  import {
    LocationDescriptorObject,
  } from 'history';
  export type WithRouterProps = {
    router?: InjectedRouter,
    location?: LocationDescriptorObject,
  }
}