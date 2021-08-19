import { Location } from "history"

export interface IOAuthLocation {
  hash: string
  pathname: string
  search: string
}

export interface IOAuthParams {
  client_id: string
  redirect_uri: string
  response_type: "token"
  login?: string
  allow_signup?: string
  scope?: string
  include_granted_scopes?: boolean
  state?: string
}

export default abstract class OAuth {
  readonly oAuthParams: IOAuthParams

  readonly regexp: RegExp

  protected constructor(serverURL: string, clientId: string, regexp: RegExp) {
    this.oAuthParams = {
      redirect_uri: serverURL,
      client_id: clientId,
      response_type: "token",
    }
    this.regexp = regexp
  }

  abstract getRedirectURL(): string

  extractToken = (location: Location<IOAuthLocation>): string => {
    let responseTokenURL: string

    if (location.hash) responseTokenURL = location.hash
    else responseTokenURL = location.search

    return responseTokenURL.split(this.regexp)[1]
  }

  isValidLocation = (location: Location<IOAuthLocation>): boolean => {
    let responseTokenURL: string

    if (location.hash) responseTokenURL = location.hash
    else responseTokenURL = location.search

    return this.regexp.test(responseTokenURL)
  }

  formingRedirectURL = (endpoint: string): string => {
    return Object.keys(this.oAuthParams).reduce((acc, item, index, array) => {
      return `${acc}${item}=${this.oAuthParams[item as keyof IOAuthParams]}${
        index + 1 < array.length ? "&" : ""
      }`
    }, endpoint)
  }
}
