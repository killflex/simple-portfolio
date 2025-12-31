import Script from "next/script";

const ClarityScript = () => {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  // Only render if Clarity ID is configured
  if (!clarityId) {
    return null;
  }

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
            })(window, document, "clarity", "script", "${clarityId}");
        `,
      }}
    />
  );
};

export default ClarityScript;
