import{S as m,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let l;function y(o){const r=document.querySelector("#gallery");r.innerHTML=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:d})=>`
  <a class="gallery-link" href="${s}">
    <img src="${i}" class="gallery-image" alt="${e}" loading="lazy"/>
        <div class="inform">
          <p><b>Likes</b>: ${t}</p>
          <p><b>Views</b>: ${n}</p>
          <p><b>Comments</b>: ${f}</p>
          <p><b>Downloads</b>: ${d}</p>
        </div>
  </a>
  `).join(""),l?l.refresh():l=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}const h="46312976-051d72b45cfaa84800b7fd140";function p(o){return fetch(`https://pixabay.com/api/?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}const u=document.querySelector(".form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader");u.addEventListener("submit",b);function b(o){o.preventDefault();const r=o.currentTarget.elements.query.value.trim();if(!r){a.error({title:"Error",message:"❌ Please enter a search query"});return}g.innerHTML="",c.classList.remove("hidden"),p(r).then(i=>{i.hits.length===0?a.warning({title:"No Results",message:"Sorry, there are no images matching your search query."}):y(i.hits)}).catch(L).finally(()=>{c.classList.add("hidden"),u.reset()})}function L(o){a.error({title:"Error",message:"❌ No pictures found"})}
//# sourceMappingURL=index.js.map
