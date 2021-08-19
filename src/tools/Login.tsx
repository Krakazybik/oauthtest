import React from "react"
import useOAuth from "../hooks/useOAuth"
import YandexOAuth from "../hooks/YandexOAuth"

const Login: React.FC = () => {
  const oauth = useOAuth(
    new YandexOAuth(
      "http://localhost:3000/oauth",
      "4a3207af6aaa43e3a41ba38db067df91"
    )
  )
  return <div>{oauth} </div>
}

export default Login
