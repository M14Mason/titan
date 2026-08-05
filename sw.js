// titan service worker — offline cache + clean updates
const VERSION="2026.08.04.2323";
const CACHE="titan-"+VERSION;
const CORE=["./","./index.html","./manifest.json"];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).catch(()=>{}));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
  )).then(()=>self.clients.claim()));
});
self.addEventListener("message",e=>{ if(e.data&&e.data.type==="SKIP_WAITING")self.skipWaiting(); });
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET")return;
  const url=new URL(req.url);
  const isDoc=req.mode==="navigate"||url.pathname.endsWith("/")||url.pathname.endsWith("index.html");
  if(isDoc){
    // network first so updates land, cache as the gym/offline fallback
    e.respondWith(
      fetch(req).then(res=>{
        const copy=res.clone();
        caches.open(CACHE).then(c=>c.put("./index.html",copy)).catch(()=>{});
        return res;
      }).catch(()=>caches.match("./index.html").then(r=>r||caches.match("./")))
    );
    return;
  }
  if(url.origin===location.origin){
    e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
      return res;
    })));
    return;
  }
  // fonts / chart.js CDN: cache-first so the gym works offline after one online load
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{
    if(res&&res.status===200){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{})}
    return res;
  }).catch(()=>hit)));
});
