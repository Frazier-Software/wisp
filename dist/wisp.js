/*
 * Wisp v1.0.0
 * https://wisp.frazier.software/
 *
 * Copyright (c) 2024 Chris Frazier
 * Licensed under the MIT license
 */
function a(A){var _=A.currentTarget,B=document.createElement('span'),d=Math.max(_.clientWidth,_.clientHeight)/2,e=_.getBoundingClientRect();B.classList.add('ripple');B.style.width=B.style.height=`${2*d}px`;B.style.left=`${A.clientX-(e.left+d)}px`;B.style.top=`${A.clientY-(e.top+d)}px`;for(const el of _.querySelectorAll('.ripple'))el.remove();_.appendChild(B)}function b(C){return ()=>{document.documentElement.scrollTop>300?C.classList.add('back-to-top--show'):C.classList.remove('back-to-top--show')}}function c(_a){_a.preventDefault();document.documentElement.scrollIntoView({behavior:'smooth'})}(D=>document.readyState!=='loading'?D():document.addEventListener('DOMContentLoaded',D))(()=>{for(const E of document.querySelectorAll('.btn--ripple'))E.addEventListener('click',a);var _A=document.querySelector('#back-to-top');_A&&(document.addEventListener('scroll',b(_A)),_A.addEventListener('click',c))});
