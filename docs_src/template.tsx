import * as React from 'react';

export default function templateFunc(props: any) {
  console.error(props);
  return (
    <html>
      <body>
        <section
          id="app"
          dangerouslySetInnerHTML={{ __html: props.body}}
        />
        <script src="/react-analytics-context/index.js"></script>
      </body>
    </html>
  )
}