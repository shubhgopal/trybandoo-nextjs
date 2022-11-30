import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Bandoo - Cleansing Foot Patches" />
        <meta property="og:description" content="Bandoo | Cleansing Foot Patches. Boost Your Wellness With An All-Natural Japanese Solution!" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/product.jpg" />
        <meta name="twitter:title" content="Bandoo - Cleansing Foot Patches"/>
        <meta name="twitter:description" content="Bandoo | Cleansing Foot Patches. Boost Your Wellness With An All-Natural Japanese Solution!"/>
        <meta name="twitter:image" content="/product.jpg"/>
  		  <meta content="width=device-width, initial-scale=1" name="viewport"/>
  		  <link href="/favicon.png" rel="shortcut icon" type="image/x-icon"/>
<Script jsx>{`
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '163538869183395');
  fbq('track', 'PageView');
  `}
</Script>
<noscript>
<img height="1" width="1"  src="https://www.facebook.com/tr?id=163538869183395&ev=PageView&noscript=1"/>
</noscript>
<Script jsx>{`
	! function(w, d, t) {
		w.TiktokAnalyticsObject = t;
		var ttq = w[t] = w[t] || [];
		ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function(t, e) {
			t[e] = function() {
				t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
			}
		};
		for(var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
		ttq.instance = function(t) {
			for(var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
			return e
		}, ttq.load = function(e, n) {
			var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
			ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
			n = document.createElement("script");
			n.type = "text/javascript", n.async = !0, n.src = i + "?sdkid=" + e + "&lib=" + t;
			e = document.getElementsByTagName("script")[0];
			e.parentNode.insertBefore(n, e)
		};
		ttq.load('C7BB2U6TT111RBO6K520');
		ttq.page();
	}(window, document, 'ttq');
  `}
	</Script>
  <Script jsx>{`
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

  ttq.load('C96M5Q3C77U12DDT46N0');
  ttq.page();
}(window, document, 'ttq');
`}
</Script>
<Script jsx>{`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8L4768');
`}</Script>
<img src="https://p1.zemanta.com/p/31636/12263/" referrerpolicy="no-referrer-when-downgrade" height="1" width="1" border="0" alt="" />
  </Head>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8L4768"
height="0" width="0"></iframe></noscript>
  <Component {...pageProps} />
  </>
)
}

export default MyApp
