declare module 'react-json-pretty' {
  import * as React from 'react';

  type PropsType = {
    id?: string;
    json: any;
  };

  const JSONPretty: React.SFC<PropsType>;
  export = JSONPretty;
}