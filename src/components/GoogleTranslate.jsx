import React, { useEffect } from "react";
import { useState } from "react";

const GoogleTranslate = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.googleTranslateInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        setTimeout(window.googleTranslateInit, 100);
      } else {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi,pa,sa,mr,ur,bn,es,ja,ko,zh-CN,es,nl,fr,de,it,ta,te',
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          defaultLanguage: 'en',
          autoDisplay: false,
        }, 'google_element');
      }
    };

    const loadGoogleTranslateScript = () => {
      if (!document.getElementById("google_translate_script")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.id = "google_translate_script";
        script.onerror = () => console.error('Error loading Google Translate script');
        document.body.appendChild(script);
      }
    };

    loadGoogleTranslateScript();

    if (window.google && window.google.translate) {
      window.googleTranslateInit();
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY < 100); // Adjust the scroll amount as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="google_element" className={`google-translate-container pl-20 md:pl-0 ${isVisible ? '' : 'hidden'}`}>
      <style jsx>{`
  /* Language selection dropdown */
  .goog-te-combo {
    background-color: #fff; /* White background */
    border: 2px solid #fecd4c; /* Yellow-orange border */
    border-radius: 0.5rem; /* Slightly more rounded */
    padding: 0.5rem 1rem; /* Add some padding */
    font-size: 0.875rem; /* Use a smaller font size */
    transition: all 0.3s ease; /* Smooth transition */
    outline: none;
    color: #333; /* Dark text color */
    font-weight: 500; /* Medium font weight */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Slight shadow */
  }

  /* Hover effect */
  .goog-te-combo:hover {
    background-color: #f7f7f7; /* Light gray background */
    border-color: #fecd4c; /* Yellow-orange border */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
  }

  /* Hide unnecessary elements */
  .goog-logo-link {
    display: none !important;
  }

  .goog-te-gadget {
    color: white !important;
  }
  .goog-te-gadget > span {
        margin-left : 0px;
        padding : 2px;
  }
  .goog-te-gadget > span > a {
    position: relative;
    color: white;
    width: fit-content;
    padding: 2px;
    border-radius : 20px;
  }

  /* Customize the dropdown menu */
  .goog-te-menu-frame {
    max-height: 400px !important;
    overflow-y: auto !important;
    background-color: #fff; /* White background */
    border: 1px solid #fecd4c; /* Yellow-orange border */
    border-radius: 0.5rem; /* Slightly more rounded */
  }

  /* Customize the menu item */
  #google_translate_element .goog-te-gadget-simple .goog-te-menu-value span:first-child {
    display: none;
  }

  #google_translate_element .goog-te-gadget-simple .goog-te-menu-value:before {
    content: 'Translate'; /* Change the default text */
    color: #333; /* Dark text color */
  }

  /* Hide the banner frame */
  .goog-te-banner-frame {
    display: none !important;
  }

  /* Customize the iframe */
  .skiptranslate > iframe {
    height: 0 !important;
    border-style: none;
    box-shadow: none;
  }
    /* Ensure the body margin isn't affected by Google Translate */
  body {
    top: 0px !important;
    position: relative;
  }
`}
</style>
    </div>
  );
};

export default GoogleTranslate;
