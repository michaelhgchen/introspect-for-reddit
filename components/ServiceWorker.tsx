import React from "react";

export const ServiceWorker = React.memo(() => {
  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("service worker registered."))
        .catch(err => console.error(err));
    }
  }, []);

  return null;
});

export default ServiceWorker;
