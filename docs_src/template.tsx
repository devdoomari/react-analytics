import * as React from 'react';

export default function templateFunc(props: any) {
  console.error(props);
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        >
        </link>
      </head>
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