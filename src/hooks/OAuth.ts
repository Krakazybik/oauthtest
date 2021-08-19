export interface IOAuthParams {
  client_id: string
  redirect_uri: string
  response_type: "token"
  scope?: string
  include_granted_scopes?: boolean
  state?: string
}

export default abstract class OAuth {
  readonly oAuthParams: IOAuthParams

  constructor(serverURL: string, clientId: string) {
    this.oAuthParams = {
      redirect_uri: serverURL,
      client_id: clientId,
      response_type: "token",
    }
  }

  abstract getRedirectURL(): string

  abstract extractToken(urlWithToken: string): string
}
