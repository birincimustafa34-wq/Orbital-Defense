const CACHE_NAME='orbital-defense-v5-0';
const PACKAGE=Array.from({length:8},(_,i)=>'./orbital-defense-v5-0-'+i+'.txt');
const PRECACHE=['./',...PACKAGE];
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE_NAME);
  await cache.addAll(PRECACHE);
  await self.skipWaiting();
 })());
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.startsWith('orbital-defense-')&&key!==CACHE_NAME).map(key=>caches.delete(key)));
  await self.clients.claim();
 })());
});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin)return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE_NAME),cached=await cache.match(request);
  if(cached)return cached;
  try{const response=await fetch(request);if(response.ok)cache.put(request,response.clone()).catch(()=>{});return response;}
  catch(_){return Response.error();}
 })());
});