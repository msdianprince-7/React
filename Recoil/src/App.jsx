
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom ,totalNotificationSelector} from './atom.js'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const totalnotificationSelector = useRecoilValue(totalNotificationSelector)
  return (
    <>
      <button>Home</button>
      <button>My Network ({networkCount>=100 ? "99+":networkCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>jobs ({jobsCount})</button>
      <button>Notification ({notificationCount})</button>
      <button>Me ({totalnotificationSelector})</button>
    </>
  )
}

export default App
