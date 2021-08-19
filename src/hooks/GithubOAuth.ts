import OAuth from "./OAuth"

export default class GithubOAuth extends OAuth {
  constructor(serverURL: string, clientId: string) {
    super(serverURL, clientId, /code=(\S*)/gi)
  }

  getRedirectURL(): string {
    return this.formingRedirectURL("https://github.com/login/oauth/authorize?")
  }
}
