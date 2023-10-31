// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add any other head elements here */}
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Add the Facebook Messenger code below the NextScript tag */}
          <div id="fb-root"></div>
          <div id="fb-customer-chat" className="fb-customerchat"></div>
          <script dangerouslySetInnerHTML={{
            __html: `
              var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "160452953812849");
              chatbox.setAttribute("attribution", "biz_inbox");

              window.fbAsyncInit = function() {
                FB.init({
                  xfbml: true,
                  version: 'v18.0'
                });
              };

              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
            `
          }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
