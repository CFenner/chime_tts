"use strict";(self.webpackChunkchime_tts=self.webpackChunkchime_tts||[]).push([[7493],{5739:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=i(4848),n=i(8453);const r={sidebar_position:2,title:"2. Say URL Service"},c="chime_tts.say_url Service",d={id:"documentation/services/say_url-service/index",title:"2. Say URL Service",description:"The chimetts.sayurl service generates an audio file with the chimetts.say service and returns either a publicly accessible URL or a media content id to the generated file.",source:"@site/docs/documentation/services/say_url-service/index.mdx",sourceDirName:"documentation/services/say_url-service",slug:"/documentation/services/say_url-service/",permalink:"/chime_tts/docs/documentation/services/say_url-service/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"2. Say URL Service"},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/chime_tts/docs/documentation/services/say-service/examples"},next:{title:"Parameters",permalink:"/chime_tts/docs/documentation/services/say_url-service/parameters"}},l={},o=[{value:"Response Object",id:"response-object",level:2},{value:"<code>url</code> Key",id:"url-key",level:2},{value:"<code>media_content_id</code> Key",id:"media_content_id-key",level:2},{value:"Example:",id:"example",level:2},{value:"Service call",id:"service-call",level:3},{value:"Result",id:"result",level:3},{value:"Option A: <code>chime_tts.say_url</code> folder path is within the public <code>www</code> folder",id:"option-a-chime_ttssay_url-folder-path-is-within-the-public-www-folder",level:4},{value:"Option B: <code>chime_tts.say_url</code> folder path is within the <code>media</code> folder",id:"option-b-chime_ttssay_url-folder-path-is-within-the-media-folder",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"chime_ttssay_url-service",children:[(0,s.jsx)(t.code,{children:"chime_tts.say_url"})," Service"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"chime_tts.say_url"})," service generates an audio file with the ",(0,s.jsx)(t.a,{href:"../say-service",children:(0,s.jsx)(t.code,{children:"chime_tts.say"})})," service and returns either a ",(0,s.jsx)(t.a,{href:"#url-key",children:"publicly accessible URL"})," or a ",(0,s.jsx)(t.a,{href:"#media_content_id-key",children:"media content id"})," to the generated file."]}),"\n",(0,s.jsx)(t.h2,{id:"response-object",children:"Response Object"}),"\n",(0,s.jsx)(t.p,{children:"The service will return an object with the following key/values:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"url"})}),(0,s.jsx)(t.td,{children:"Full path to the generated audio file (see below)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"media_content_id"})}),(0,s.jsxs)(t.td,{children:["Media content id that can be used with ",(0,s.jsx)(t.code,{children:"media_player.play_media"})," (see below)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"duration"})}),(0,s.jsx)(t.td,{children:"Duration of the generated audio file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"success"}),(0,s.jsx)(t.td,{children:"Boolean value to represent the service call result"})]})]})]}),"\n",(0,s.jsxs)(t.h2,{id:"url-key",children:[(0,s.jsx)(t.code,{children:"url"})," Key"]}),"\n",(0,s.jsxs)(t.p,{children:["The response object's ",(0,s.jsx)(t.code,{children:"url"})," key holds a public URL path value to the generated file if the ",(0,s.jsx)(t.code,{children:"chime_tts.say_url"})," folder path in the ",(0,s.jsx)(t.a,{href:"../../configuration#chime_ttssay_url-folder",children:"integration's configuration field"})," ",(0,s.jsxs)(t.strong,{children:["is in the public ",(0,s.jsx)(t.code,{children:"www"})," folder."]})]}),"\n",(0,s.jsxs)(t.h2,{id:"media_content_id-key",children:[(0,s.jsx)(t.code,{children:"media_content_id"})," Key"]}),"\n",(0,s.jsxs)(t.p,{children:["The response object's ",(0,s.jsx)(t.code,{children:"media_content_id"})," key holds a media content id value to the generated file if the ",(0,s.jsx)(t.code,{children:"chime_tts.say_url"})," folder path in the ",(0,s.jsx)(t.a,{href:"../../configuration#chime_ttssay_url-folder",children:"integration's configuration field"})," ",(0,s.jsxs)(t.strong,{children:["is in the ",(0,s.jsx)(t.code,{children:"media"})," folder."]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example:"}),"\n",(0,s.jsx)(t.h3,{id:"service-call",children:"Service call"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"service: chime_tts.say_url\ndata:\n  chime_path: toast\n  message: May I have your attention, please?\n  tts_platform: google_translate\n"})}),"\n",(0,s.jsx)(t.h3,{id:"result",children:"Result"}),"\n",(0,s.jsxs)(t.h4,{id:"option-a-chime_ttssay_url-folder-path-is-within-the-public-www-folder",children:["Option A: ",(0,s.jsx)(t.code,{children:"chime_tts.say_url"})," folder path is within the public ",(0,s.jsx)(t.code,{children:"www"})," folder"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"{\n  url: https://{YOUR-HOME-ASSISTANT-ADDRESS}:8123/local/chime_tts/gtv7ju45.mp3\n  media_content_id: null,\n  duration: 4.069,\n  success: true\n}\n"})}),"\n",(0,s.jsxs)(t.h4,{id:"option-b-chime_ttssay_url-folder-path-is-within-the-media-folder",children:["Option B: ",(0,s.jsx)(t.code,{children:"chime_tts.say_url"})," folder path is within the ",(0,s.jsx)(t.code,{children:"media"})," folder"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"{\n  url: null\n  media_content_id: media-source://media_source/local/chime_tts/gtv7ju45.mp3,\n  duration: 4.069,\n  success: true\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>d});var s=i(6540);const n={},r=s.createContext(n);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);