
import './App.css'
import { BrowserRouter,Routes,Route ,Link,useNavigate, redirect, Outlet} from 'react-router-dom'
import { useRef ,useState} from 'react'

////// ---------- starting and stopping Clock ---------//////
function App (){
  const [clock,setClock] = useState(0);
  const inputRef = useRef()
  
  function start(){
    const timer = setInterval(()=>{
      setClock(c=>c+1);
    },1000)
    inputRef.current  = timer
  }

  function stop(){
    clearInterval(inputRef.current)
  }


  return (
    <>
    {clock}
    <button onClick={start} >Start</button>
    <button onClick={stop} >Stop</button>
    </>
  )
}




///////// --------------- useRef Basic --------------/////
// function App(){
//   const inputRef = useRef()


//   function focus(){
//     inputRef.current.focus()
//   }
//   return (
//     <>
//     Sign In Page
//     <input ref={inputRef} type={"text"} placeholder={"username"}></input>
//     <input type={"text"} placeholder={"password"}></input>
//     <button onClick={focus}>Submit</button>
//     </>
//   )
// }


//-------------------------- ROUTING--------------------// 
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//         <Route path ="/" element = {<Layout/>}>
//           <Route path = "/home" element = {<Home/>}/>
//           <Route path= "/priyansh" element = {<Priyansh/>}/>
//           <Route path= "*" element = {<ErrorPage/>}/>
//         </Route>
//       </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// function Layout(){
//   return (
//     <>
//     <Link to="/">Home</Link>|<Link to="/priyansh">Priyansh</Link>
//     <Outlet/>
//     Footer
//     </>
//   )
// }

// function Home(){
//   return "i am home page"
// }

// function Priyansh(){
//   return (
//     <div>
//       priyansh page
//     </div>)
// }

// function ErrorPage(){
//   const navigate = useNavigate();
//   function redirect(){
//     navigate('/');
//   }

//   return (
//     <div>
//       <button onClick={redirect}>Redirect to home page</button>
//     </div>)
// }


export default App
