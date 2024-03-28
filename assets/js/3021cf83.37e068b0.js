"use strict";(self.webpackChunkchime_tts=self.webpackChunkchime_tts||[]).push([[2857],{6942:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=i(4848),n=i(8453),r=i(6025);const o={sidebar_position:1},a="Chime TTS Wiki",c={id:"getting-started",title:"Chime TTS Wiki",description:"Chime TTS logo",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/chime_tts/docs/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/chime_tts/docs/quick-start/"}},l={},d=[{value:"If you find Chime TTS useful, please consider showing your support: <a><img></img></a>",id:"if-you-find-chime-tts-useful-please-consider-showing-your-support-",level:4},{value:"What is Chime TTS?",id:"what-is-chime-tts",level:2},{value:"The Problem:",id:"the-problem",level:3},{value:"The Solution:",id:"the-solution",level:3},{value:"Features",id:"features",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"How Do I Use It?",id:"how-do-i-use-it",level:2},{value:"Services",id:"services",level:3},{value:"Support and Discussion",id:"support-and-discussion",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"chime-tts-wiki",children:"Chime TTS Wiki"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chime TTS logo",src:i(2751).A+"",width:"200",height:"200"})}),"\n",(0,t.jsxs)(s.h4,{id:"if-you-find-chime-tts-useful-please-consider-showing-your-support-",children:["If you find Chime TTS useful, please consider showing your support: ",(0,t.jsx)("a",{href:"https://www.buymeacoffee.com/nimroddolev",target:"_blank",children:(0,t.jsx)("img",{src:"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",alt:"Buy me a coffee",id:"buyMeACoffee"})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"what-is-chime-tts",children:"What is Chime TTS?"}),"\n",(0,t.jsxs)(s.p,{children:["Chime TTS is a custom Home Assistant integration that locally combines TTS audio and sound effects into seamless audio for playback in a single service call, eliminating the lag. Chime TTS includes a ",(0,t.jsx)(s.a,{href:"#features",children:"suite of options"})," to further customize the audio."]}),"\n",(0,t.jsx)(s.h3,{id:"the-problem",children:"The Problem:"}),"\n",(0,t.jsxs)("div",{id:"problemDiv",children:[(0,t.jsx)("img",{src:(0,r.A)("/img/the_problem.png")}),(0,t.jsx)("img",{src:(0,r.A)("/img/animations/travolta.gif"),class:"travolta"})]}),"\n",(0,t.jsx)(s.p,{children:"Adding a notification chime before Text-To-Speech (TTS) audio messages requires two separate service calls, and introduces lag between the two caused by networking latency of cloud TTS platforms, audio processing, and delays before media_player playback begins."}),"\n",(0,t.jsx)(s.h3,{id:"the-solution",children:"The Solution:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/nimroddolev/chime_tts/assets/1849295/54ec4f20-7eaf-4180-b159-4feb4afc334a",alt:"with_chime_tts-dark"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Chime TTS"})," solves this issue by stitching the audio files together as ",(0,t.jsx)(s.em,{children:"a single file"})," locally on your Home Assistant device, and played to your speakers in a single event, eliminating any lag."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(s.p,{children:"Chime TTS offers various features that enhance TTS audio playback experience:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"No lag or timing issues:"})," Precise timing between audio files without cloud TTS delays."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Customizable audio cues:"})," Play preset or custom audio before and after TTS messages."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Flexible TTS platform selection:"})," Supports various ",(0,t.jsx)(s.a,{href:"https://www.home-assistant.io/integrations/#text-to-speech",children:"TTS platform integrations"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Easy service invocation:"})," Use the ",(0,t.jsx)(s.a,{href:"./documentation/say-service/service",children:(0,t.jsx)(s.code,{children:"chime_tts.say"})})," and ",(0,t.jsx)(s.a,{href:"./documentation/say_url-service/service",children:(0,t.jsx)(s.code,{children:"chime_tts.say_url"})})," services in automations and scripts."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Set media player  volume:"})," Notifications can be played at a defined volume and restored after playback."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Restore previous audio:"})," Chime TTS supports pausing and resuming currently playing audio beyond the media player platforms supported by Home Assistant ",(0,t.jsx)(s.em,{children:"(eg: HomePods)"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Mix and match TTS platforms:"})," Combine TTS audio using multiple TTS platforms within the same audio announcement."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Configurable TTS speed:"})," Set the TTS audio speed anywhere from 1-500%."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Configurable TTS pitch:"})," Set the pitch for TTS audio, allowing for more customization."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Support for FFmpeg arguments:"})," Apply FFmpeg jobs to the generated audio, or specific jobs to specific chimes and TTS audio segments."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Configurable delay:"})," Set custom delays between chimes & TTS audio."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Configurable overlay:"})," Set custom overlay durations between chimes & TTS audio."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Caching:"})," Cache audio for faster playback."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Speaker Groups:"})," Group speakers for simultaneous playback ",(0,t.jsx)(s.em,{children:"(on supported platforms)"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(s.p,{children:"Follow these easy steps to get started with Chime TTS:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/quick-start/installing-chime-tts",children:"Installation"})," - Quickly install Chime TTS via HACS or manually."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/quick-start/adding-the-integration",children:"Add the Integration"})," - Add Chime TTS to your Home Assistant instance."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"how-do-i-use-it",children:"How Do I Use It?"}),"\n",(0,t.jsx)(s.h3,{id:"services",children:"Services"}),"\n",(0,t.jsxs)(s.p,{children:["Chime TTS adds three new services to your Home Assistant instance: ",(0,t.jsx)(s.code,{children:"chime_tts.say"}),", ",(0,t.jsx)(s.code,{children:"chime_tts.say_url"})," and ",(0,t.jsx)(s.code,{children:"chime_tts.clear_cache"}),". Discover how you can use these services and the features they offer:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"./category/say-service",children:(0,t.jsx)(s.code,{children:"chime_tts.say"})}),": Play audio and TTS messages with various settings."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"./category/say-url-service",children:(0,t.jsx)(s.code,{children:"chime_tts.say_url"})}),": Generates a publicly accessible URL to the MP3 file generated by ",(0,t.jsx)(s.code,{children:"chime_tts.say"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"./documentation/clear-cache-service",children:(0,t.jsx)(s.code,{children:"chime_tts.clear_cache"})}),": Clear generated audio cache."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"support-and-discussion",children:"Support and Discussion"}),"\n",(0,t.jsxs)(s.p,{children:["For questions, suggestions, and community discussion about Chime TTS, visit our ",(0,t.jsx)(s.a,{href:"https://community.home-assistant.io/t/chime-tts-play-audio-before-after-tts-audio-lag-free/578430",children:"Community Forum"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2751:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/chime_tts-1eee02118dd3629bbc800ca1ca7c3dd5.png"},8453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>a});var t=i(6540);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);