import axios from "axios"
import React, { useEffect, useState } from "react"
import { Redirect, useLocation } from "react-router-dom"
import OAuth from "./OAuth"

const useOAuth = (method: OAuth) => {
  let oAuthToken: string | undefined
  const [isAuthComplete, setAuthComplete] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (oAuthToken) {
      ;(async () => {
        try {
          const response = await axios.get("http://localhost:3000/auth/")
        } catch (err) {
          console.log(err)
        }
        setAuthComplete(true)
      })()
    }

    return () => {
      setAuthComplete(false)
    }
  }, [oAuthToken])

  if (location.hash) oAuthToken = method.extractToken(location.hash)
  else window.location.href = method.getRedirectURL()

  return <>{isAuthComplete && <Redirect to="/" />}</>
}
export default useOAuth
