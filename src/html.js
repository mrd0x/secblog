import React from 'react';

import favicon from './favicon.ico';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="twitter:title" content="Red Team and Security Research Notes | mr.d0x" />
          <meta name="twitter:description" content="Providing red team techniques and security research" />
          <meta name="twitter:image" content="https://blog.thecybersecuritytutor.com/static/main-e0b5f915e38de61538ec75ae8fb3f625.png" />
          <meta name="twitter:card" content="summary_large_image"/>
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
