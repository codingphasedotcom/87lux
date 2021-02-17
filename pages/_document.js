import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          
             


{/* 
<script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '174747862937299');
  fbq('track', 'PageView');
              `
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=174747862937299&ev=PageView&noscript=1"
/>
              `
            }}
          /> */}
          {/* Start Drift Code */}
         
        </Head>
        <body>
        
        <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58ZXPD5"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `
            }}
          />
          <Main />
          <script src="/assets/js/gsap.min.js"/>
          <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/ScrollMagic.js"/>
          <script src="assets/js/debug.addIndicators.min.js"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"/>
          <script src="/assets/js/jquery-3.5.1.slim.min.js"/>
          <script src="/assets/js/bootstrap.bundle.min.js"/>
          <script src="/assets/js/app.js"/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument