// components/ChatWidget.js
import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.pulse.is/livechat/loader.js";
    script.setAttribute("data-live-chat-id", "6527e7921d50009c710960cb");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="pulse-chat"> </div>;
};

export default ChatWidget;
