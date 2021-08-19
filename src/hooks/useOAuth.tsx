import axios from "axios"
import React, { useEffect, useState } from "react"
import { Redirect, useLocation } from "react-router-dom"
import OAuth, { IOAuthLocation } from "./OAuth"

const useOAuth = (method: OAuth): JSX.Element => {
  let oAuthToken: string | undefined
  const [isAuthComplete, setAuthComplete] = useState(false)
  const location = useLocation<IOAuthLocation>()

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

  if (method.isValidLocation(location))
    oAuthToken = method.extractToken(location)
  else window.location.href = method.getRedirectURL()

  return <>{isAuthComplete && <Redirect to="/" />}</>
}
export default useOAuth
