const normalize=value=>/^en$/i.test(value||'')?'en':/^zh(?:-cn|-hans)?$/i.test(value||'')?'zh':null;
const destination=new URL('https://ruthmann.github.io/rengongfu-sandbox/workbench/weekend/');
let saved;try{saved=localStorage.getItem('musedlab.preview.language')}catch{}
const language=normalize(new URLSearchParams(location.search).get('lang'))||normalize(saved);
if(language)destination.searchParams.set('lang',language);
// The established workbench retains its own sign-in and local session state.
// Only language crosses from this entry hostname; arbitrary queries and fragments do not.
document.getElementById('continue').href=destination.href;
location.replace(destination.href);
