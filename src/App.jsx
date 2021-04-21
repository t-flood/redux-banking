import React from 'react'
import AccountStatus from './AccountStatus'
import Auth from './Auth'
import Balance from './Balance'
import Banking from './Banking'




const App = () => {
  return (
    <div>
      <Auth/>
      <Balance/>
      <Banking/>
      <AccountStatus/>
    </div>
  )
}

export default App
