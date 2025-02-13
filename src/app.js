import { useState } from 'react'
import Header from './components/header'
import initialEmails from './data/emails'

import './styles/app.css'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  // state set as intialEmails so all existing emails render
  console.log(initialEmails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {/* using a map function here to render the list of email of emails */}
        {emails.map((email) => { 
          const emailCSSClass = email.read ? "email read" : "email unread"
          return (
          <li className= {emailCSSClass} key = {email.id}>
            <div className="select">
              <input className="select-checkbox" type="checkbox" />
            </div>
            <div className="star">
              <input
                className="star-checkbox"
                  type="checkbox"
                  checked = {email.starred}/>
            </div>
            {/* existing data is interpolated */}
            <div className="sender"> {email.sender}</div>
            <div className="title">{email.title}</div>
          </li>
        )})}
      </main>
    </div>
  )
}

export default App
