import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as n}from"./index.ai7qpRr1.js";const m="https://www.meowandyou.com/";function h({quiz:o,quizName:s,resultIndex:r,resultData:t}){const a=`${m}/quiz/${s}/result/${r}`,l=`/images/quiz/${t.image}`;return n.useEffect(()=>{new URLSearchParams(window.location.search).has("fbclid")&&(window.location.href=`/quiz/${s}`)},[s]),e.jsx("div",{className:"flex justify-center items-center bg-[#faede1] mt-6",children:e.jsxs("div",{className:"w-full max-w-2xl mx-auto bg-white mt-8 mb-24 rounded-xl p-4 md:p-8 shadow-lg relative overflow-hidden",children:[e.jsx("h2",{className:"text-2xl font-bold",children:o.title}),t.image&&e.jsx("img",{src:l,alt:"Quiz Result",className:"mx-auto mt-4 rounded-lg shadow-md"}),e.jsx("h3",{className:"text-xl font-semibold mt-6",children:t.summary}),e.jsx("p",{className:"text-lg mb-6",children:t.text}),e.jsx("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(a)}`,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-block w-full px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition text-center",children:"Share on Facebook"})]})})}export{h as default};
