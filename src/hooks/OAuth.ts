export default abstract class OAuth {
  readonly oAuthClientURL: string

  readonly oAuthClientId: string

  constructor(serverURL: string, clientId: string) {
    this.oAuthClientURL = serverURL
    this.oAuthClientId = clientId
  }

  abstract getRedirectURL(): string

  abstract extractToken(urlWithToken: string): string
}