import{S as u,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();let l;function f(t){t.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function c(){const t=document.querySelector(".loader");t&&t.remove()}function d(t){const s=document.querySelector(".gallery"),o=t.map(e=>`
      <a href="${e.largeImageURL}" class="gallery-link">
        <img class="img-gallery"
          src="${e.webformatURL}"
          alt="${e.tags}" 
          loading="lazy" />
        <ul class="list-wrapper">
          <li class="content"><b>Likes:</b> ${e.likes}</li>
          <li class="content"><b>Views:</b> ${e.views}</li>
          <li class="content"><b>Comments:</b> ${e.comments}</li>
          <li class="content"><b>Downloads:</b> ${e.downloads}</li>
        </ul>
      </a>
  `).join("");s.innerHTML=o,l?l.refresh():l=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function h(){const t=document.querySelector(".gallery");t.innerHTML=""}function y(t){a.info({title:"Info",message:t,position:"topRight",backgroundColor:"red",messageColor:"white",titleColor:"white"})}const m="45922188-6c9bdbb7442dfc44aff321ea7",g="https://pixabay.com/api";function p(t){const s=new URLSearchParams({key:m,q:queryValue,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${g}?${s.toString()}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>(console.log(e),e)).catch(e=>{throw console.error("There was an error with the fetch operation:",e),e})}const b=document.querySelector(".search-form"),L=document.querySelector('[name="searchQuery"]'),w=document.querySelector(".gallery");b.addEventListener("submit",t=>{if(t.preventDefault(),!L.value.trim()){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}h(),f(w),p().then(o=>{if(c(),!o||o.hits.length===0){y("Sorry, there are no images matching your search query. Please try again!");return}d(o.hits)}).catch(o=>{console.error("Error fetching images:",o),a.error({title:"Error",message:`Error: ${o.message}`,position:"topRight"})}).finally(()=>{c()})});
//# sourceMappingURL=index.js.map
