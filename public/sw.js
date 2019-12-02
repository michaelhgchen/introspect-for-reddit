console.log("inside service worker");

self.addEventListener("fetch", e => {
  console.log("==========");
  console.log(e);
  console.log("==========");
});
