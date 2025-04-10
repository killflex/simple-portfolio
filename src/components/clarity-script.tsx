import Script from "next/script";

const ClarityScript = () => {
  return (
    <Script
      id="clarity-tracker"
      strategy="afterInteractive" // Loads after page is interactive
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r1t79xuog6");
        `,
      }}
    />
  );
};

export default ClarityScript;
