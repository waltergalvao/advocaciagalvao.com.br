"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
  }
}

export function OpenAIAdsTracking() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest('a[href*="wa.me"]') && window.oaiq) {
        window.oaiq("measure", "lead_created", { type: "customer_action" });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Script
      id="openai-ads-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"WYPYhPwN5hKurtuCXaZ9tN",debug:true});`,
      }}
    />
  );
}
