import Script from "next/script";

/**
 * Microsoft Clarity project for www.wowguitar.com. The <script> id must not be "clarity": browsers
 * expose elements by id as window globals, and the snippet would then find window.clarity already set.
 */
const CLARITY_ID = "zglrs36mal";

/**
 * Microsoft Clarity (heatmaps and session recordings), loaded after the page is interactive so it
 * never delays the tools. Production builds only, so `next dev` sessions don't pollute the data.
 * Disclosed on the privacy page; the CSP in vercel.json allows *.clarity.ms and c.bing.com.
 */
export function Clarity() {
  if (process.env.NODE_ENV !== "production") return null;
  return (
    <Script id="ms-clarity-tag" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
    </Script>
  );
}
