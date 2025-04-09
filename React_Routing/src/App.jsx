
import './App.css'
import { BrowserRouter,Routes,Route ,Link,useNavigate, redirect, Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Layout/>}>
          <Route path = "/home" element = {<Home/>}/>
          <Route path= "/priyansh" element = {<Priyansh/>}/>
          <Route path= "*" element = {<ErrorPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout(){
  return (
    <>
    <Link to="/">Home</Link>|<Link to="/priyansh">Priyansh</Link>
    <Outlet/>
    Footer
    </>
  )
}

function Home(){
  return "i am home page"
}

function Priyansh(){
  return (
    <div>
      priyansh page
    </div>)
}

function ErrorPage(){
  const navigate = useNavigate();
  function redirect(){
    navigate('/');
  }

  return (
    <div>
      <button onClick={redirect}>Redirect to home page</button>
    </div>)
}


export default App
