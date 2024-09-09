import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAll, setCharAll] = useState(false)
  const [Password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGentrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789";
    if (charAll) str += '!@#$%^&*~`;";:.,-_';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }
    , [length, numAllow, setPassword])

  const copyPassClip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password]);

  useEffect(() => { passwordGentrator() }, [length, numAllow, charAll, passwordGentrator])

  return (
    <>
      <div
        className='w-full mx-auto max-w-md   shadow-md rounded-lg  text-orange-500 bg-gray-800 px-4 py-3 my-8'
        style={{ width: '100vw', height: '100vh' }}
      >
        <h1 className='text-white text-center my-1'>Password Genrator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'
        >
          <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassClip}>
            Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={25} value={length} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllow}
              id='numberInput'
              onChange={() => { setNumAllow((preVal) => !preVal) }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllow}
              id='charInput'
              onChange={() => { setCharAll((preVal) => !preVal) }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
