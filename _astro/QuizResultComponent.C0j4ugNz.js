import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as l}from"./index.ai7qpRr1.js";import{n as m}from"./router.B-sij-_X.js";const i="https://www.meowandyou.com/";function f({quiz:r,quizName:t,resultIndex:o,resultData:s}){const a=`${i}/quiz/${t}/result/${o}`,n=`/images/quiz/${s.image}`;return l.useEffect(()=>{new URLSearchParams(window.location.search).has("fbclid")&&m(`/quiz/${t}`)},[t]),e.jsx("div",{className:"flex justify-center items-center bg-[#faede1] mt-6",children:e.jsxs("div",{className:"w-[600px] bg-[#fff] my-24 rounded-xl p-8 shadow-lg relative",children:[e.jsx("h2",{className:"text-2xl font-bold",children:r.title}),s.image&&e.jsx("img",{src:n,alt:"Quiz Result",className:"mx-auto mt-4 rounded-lg shadow-md"}),e.jsx("h3",{className:"text-xl font-semibold mt-6",children:s.summary}),e.jsx("p",{className:"text-lg mb-6",children:s.text}),e.jsx("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(a)}`,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-block w-full px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition text-center",children:"Share on Facebook"})]})})}export{f as default};
