import { useRef } from 'react';
import './App.css'
import { useState,useEffect } from 'react';


function useDebounce(value,delay){
  const [debouncedValue,setDebouncedValue] = useState(value);

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebouncedValue(value)
    },delay);

    return () =>{
      clearTimeout(handler)
    }
  },[value,delay]);

  return debouncedValue;
}

function App(){
  const [inputValue,setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue,200)

 function change(e){
  setInputValue(e.target.value)
 }

 useEffect(()=>{
  console.log("expensive operation")
 },[debouncedValue])

  return (
    <div>
      <input type="text" onChange={change}></input>
    </div>
  )
}

export default App;



///----- DEBOUNCE HOOK 1 -----//

// function useDebounce(originalFn){
//   const currentClock = useRef();

//   const fn = () =>{
//     clearTimeout(currentClock.current);
//     currentClock.current = setTimeout(originalFn,200)
//   }
// }

// function App(){
//   function sendDataToBackend(){
//     fetch("api.amazon.com/search/")
//   }

//   const debouncedfn = useDebounce(sendDataToBackend)
//   return (
//     <div>
//       <input type="text" onChange={debouncedfn}></input>
//     </div>
//   )
// }

// export default App;


// /// ---------  usePrev  --------/// 
// function usePrev(value){   // 0 came here 
//   const ref =  useRef;
//   console.log("rerender with new value:"+value);

//   useEffect(()=>{
//     console.log("updated ref to be the value:"+value)
//     ref.current = value // here ref.current became 0 
//   });
//                         // store to ye current value hi kar raha hai but since this runs afterwards of return so ye previous value ban jaati hia 
//   console.log("returned the value:"+ref.current)
//   return ref.current;  // firstly return  undefined (prevvalue)  then the above useEffect will store the value 
// }



// function App(){
//   const [currentValue,setCurrentValue] = useState(0);
//   const prev = usePrev(currentValue)  // passes 0 from here
 
//   return (
//    <>
//    <p>the current value is {currentValue}</p>
//    <button onClick={()=>setCurrentValue(value=>value+1)}>Click me</button>
//    <p>the prev value was {prev}</p>
//    </>
//   )
// }

// export default App




// /// ---------  useFetch  --------/// 
// function useFetch(url){
//   const [data,setData] = useState({});
//   const [loading ,setLoading] = useState(true);

//   async function getFinalData(){
//     setLoading(true);
//     const response = await fetch(url);
//     const json = await response.json();
//     setData(json);
//     setLoading(false)
//   }
  
//   useEffect(()=>{
//     getFinalData()
//   },[url])        // url change ho raha hai app function mein to use effect bhi run karna chahiye   tbhi ye final data dega nhi to keval first time run hoga
//   // normal function bana diya to ye baar call hoke infinite loop mein fss jaayega 

//   // agar backedn mein data chmage hua to we want to make sure ki frontend pe dikhe so now we will call getFinalData in every 10 seconds

// useEffect(()=>{
//    const interval = setInterval(getFinalData,10*1000);

//    return () => clearInterval(intervalId);
//   },[])   

//   return {data,loading}
// }


// function App() {

//   const [currentPost,setCurrentPost] = useState(1)
//   const {data,loading} = useFetch('https://dummyjson.com/todos/'+ currentPost);

//   if(loading) {
//     return (
//       <div>loading.....</div>
//     )
//   }
  
//   return (
//     <div>
//       <button onClick={()=>setCurrentPost(1)}>1</button>
//       <button onClick={()=>setCurrentPost(2)}>2</button>
//       <button onClick={()=>setCurrentPost(3)}>3</button>
//       <button onClick={()=>setCurrentPost(4)}>4</button>
//       {JSON.stringify(data)}
//     </div>
//   )
// }

// export default App



// --------- usePostTile HOOK ---------------\\

// function usePostTitle(){
//   const [post,setPosts] = useState({});

//   async function getPosts(){
//     const response = await fetch('https://dummyjson.com/todos/1');
//     const json = await response.json();
//     setPosts(json);
//   }

//   useEffect(()=>{
//     getPosts();
//   })

//   return post
// }
// function App() {
//   const post = usePostTitle()
  
//  return (
//    <div>
//     {post.todo}
//    </div>
//  )
// }

// export default App



////// ------------ UseCounter Hook ----------//////

// function useCounter(){
//   const [count,setCount] = useState(0);

//   function increase(){
//     setCount(count=> count+1);
//   }

//   return {
//     count:count,
//     increase:increase
//   }
// }

// function App() {
//    const {count,increase} = useCounter()
//   return (
//     <div>
//       <button onClick={increase}>Increase{count}</button>
//     </div>
//   )
// }

// export default App
