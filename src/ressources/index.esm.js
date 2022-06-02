/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
export{c as createAnimation}from"./p-5c1dd2e1.js";export{iosTransitionAnimation}from"./p-e58b6c86.js";export{mdTransitionAnimation}from"./p-d8ec0cd9.js";export{g as getTimeGivenProgression}from"./p-a60c30b8.js";export{createGesture}from"./p-14a5a46e.js";export{g as getPlatforms,i as initialize,a as isPlatform}from"./p-0d7ac9e6.js";import{a as e,r as o,b as s}from"./p-18d5f1a9.js";export{c as componentOnReady}from"./p-18d5f1a9.js";export{I as IonicSafeString}from"./p-790cff2e.js";export{a as LIFECYCLE_DID_ENTER,c as LIFECYCLE_DID_LEAVE,L as LIFECYCLE_WILL_ENTER,b as LIFECYCLE_WILL_LEAVE,d as LIFECYCLE_WILL_UNLOAD}from"./p-bed1e616.js";export{m as menuController}from"./p-01929dc9.js";export{b as actionSheetController,a as alertController,l as loadingController,m as modalController,p as pickerController,c as popoverController,t as toastController}from"./p-5d684470.js";import"./p-49ecbc15.js";import"./p-48f74811.js";import"./p-6561b0e5.js";const r=e=>{const o=window,i=o.Ionic;if(!i||!i.config||"Object"===i.config.constructor.name)return o.Ionic=o.Ionic||{},o.Ionic.config=Object.assign(Object.assign({},o.Ionic.config),e),o.Ionic.config},n=()=>{var e;const o=window,i=null===(e=null==o?void 0:o.Ionic)||void 0===e?void 0:e.config;return i?i.mode?i.mode:i.get("mode"):"md"},f=(i,t=!0)=>{if("undefined"==typeof window)return;const r=i.el,a=r.closest(".ion-page");if(!a){if(t){const e=r.getRootNode();if("DIV"===e.tagName){const o=new MutationObserver((t=>{const s=null===t[0].oldValue,r=e.classList.contains("ion-page");s&&r&&(o.disconnect(),f(i,!1))}));o.observe(e,{attributeFilter:["class"],attributeOldValue:!0})}}return}const n=r.closest("ion-modal, ion-popover");if(n){const i="ION-MODAL"===n.tagName?"ionModalWillPresent":"ionPopoverWillPresent",t=()=>{o((()=>{r.swiper.update(),s(n,i,t)}))};e(n,i,t)}else new MutationObserver((e=>{var o;const i=null===(o=e[0].oldValue)||void 0===o?void 0:o.includes("ion-page-invisible"),t=a.classList.contains("ion-page-invisible");t||t===i||r.swiper.update()})).observe(a,{attributeFilter:["class"],attributeOldValue:!0});const l=()=>{r.swiper.update(),s(window,"appload",l)};e(window,"appload",l)},u={name:"ionic",on:{afterInit(e){console.warn("[Deprecation Warning]: The IonicSwiper module has been deprecated in favor of the IonSlides module. This change was made to better support the Swiper 7 release. The IonicSwiper module will be removed in Ionic 7.0. See https://ionicframework.com/docs/api/slides#migration for revised migration steps."),f(e)}}},h=e=>{const{swiper:o,extendParams:i}=e,t={effect:void 0,direction:"horizontal",initialSlide:0,loop:!1,parallax:!1,slidesPerView:1,spaceBetween:0,speed:300,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,touchEventsTarget:"container",autoplay:!1,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,zoom:{maxRatio:3,minRatio:1,toggle:!1},touchRatio:1,touchAngle:45,simulateTouch:!0,touchStartPreventDefault:!1,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loopAdditionalSlides:0,noSwiping:!0,runCallbacksOnInit:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flipEffect:{slideShadows:!0,limitRotation:!0},cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fadeEffect:{crossFade:!1},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide"}};o.pagination&&(t.pagination={type:"bullets",clickable:!1,hideOnClick:!1}),o.scrollbar&&(t.scrollbar={hide:!0}),i(t)};export{h as IonicSlides,u as IonicSwiper,n as getMode,r as setupConfig}