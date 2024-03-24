"use strict";(self.webpackChunkdocs_with_docusaurus=self.webpackChunkdocs_with_docusaurus||[]).push([[614],{485:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=s(4848),i=s(8453);const o={sidebar_position:3},t="App build & release",l={id:"FlutterApps/app-build-release",title:"App build & release",description:"To build and release your Flutter app, you can follow these general steps:",source:"@site/docs/FlutterApps/app-build-release.md",sourceDirName:"FlutterApps",slug:"/FlutterApps/app-build-release",permalink:"/docs/docs/FlutterApps/app-build-release",draft:!1,unlisted:!1,editUrl:"https://github.com/CodeCraze-Technologies/docs/FlutterApps/app-build-release.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Customization",permalink:"/docs/docs/FlutterApps/customization"},next:{title:"What's new?",permalink:"/docs/docs/update"}},d={},a=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"app-build--release",children:"App build & release"}),"\n",(0,r.jsx)(n.p,{children:"To build and release your Flutter app, you can follow these general steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Preparing for Release:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Update Version"}),": Ensure that you've updated the version number of your app in the ",(0,r.jsx)(n.code,{children:"pubspec.yaml"})," file. Increment the version number following semantic versioning guidelines (major.minor.patch)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Configure App Signing"}),": For Android, you need to configure app signing to generate a signing key and store it securely. For iOS, you need to ensure your app is properly provisioned and signed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Prepare Assets"}),": Make sure all necessary assets (such as images, fonts, etc.) are included and properly referenced in your Flutter project."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Building the App:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For Android:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"flutter build apk"})," to build the APK file of your app. This command generates the APK file in the ",(0,r.jsx)(n.code,{children:"build/app/outputs/flutter-apk"})," directory."]}),"\n",(0,r.jsxs)(n.li,{children:["If you want to build a release APK, add the ",(0,r.jsx)(n.code,{children:"--release"})," flag to the command: ",(0,r.jsx)(n.code,{children:"flutter build apk --release"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For iOS:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"flutter build ios"})," to build the iOS version of your app. This command generates an Xcode project in the ",(0,r.jsx)(n.code,{children:"build/ios"})," directory."]}),"\n",(0,r.jsx)(n.li,{children:"If you want to build a release version for iOS, you need to use Xcode to archive and export the app."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Testing:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Before releasing your app, it's essential to thoroughly test it to ensure it functions as expected. Test on both Android and iOS devices, and consider using emulators/simulators for a wider range of testing."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Releasing the App:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For Android:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you're releasing your app on the Google Play Store, you need to sign the APK with your app's signing key and then upload it to the Play Console. Follow the ",(0,r.jsx)(n.a,{href:"https://support.google.com/googleplay/android-developer/answer/9859152?hl=en",children:"Play Console's instructions to create a new release and upload your APK file."})]}),"\n",(0,r.jsx)(n.li,{children:"If you want to distribute your app outside the Play Store, you can share the APK file directly with your users."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For iOS:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To release your app on the App Store, you need to use Xcode to archive and submit your app. Follow ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/ios/submit/",children:"Apple's guidelines for App Store submission and distribution."})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Monitoring and Maintenance:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"After releasing your app, monitor its performance and user feedback. Address any issues or bugs promptly, and consider releasing updates with new features or improvements regularly."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Remember to familiarize yourself with the platform-specific guidelines and requirements for app distribution on both Android and iOS. Additionally, ensure compliance with any legal or regulatory requirements applicable to your app and its content."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(6540);const i={},o=r.createContext(i);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);