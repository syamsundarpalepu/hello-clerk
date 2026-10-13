import './App.css'
import { Show, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/react'

function Welcome() {
  const { user } = useUser()
  return <h1>Hello, {user?.firstName || 'friend'}! 👋 You are logged in.</h1>
}

function App() {
  return (
    <>
      <header style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', padding: '16px' }}>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>

      <main>
        <Show when="signed-out">
          <h1>Hello World</h1>
          <p>Please sign in to continue.</p>
        </Show>
        <Show when="signed-in">
          <Welcome />
        </Show>
      </main>
    </>
  )
}

export default App