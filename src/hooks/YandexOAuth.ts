import OAuth from "./OAuth"

export default class YandexOAuth extends OAuth {
  getRedirectURL(): string {
    return `https://oauth.yandex.ru/authorize?response_type=token&client_id=${this.oAuthClientId}&redirect_uri=${this.oAuthClientURL}`
  }

  // eslint-disable-next-line class-methods-use-this
  extractToken(urlWithToken: string): any {
    return urlWithToken.split(
      /^#access_token=(\S*)&token_type=(\S*)&expires_in=(\d*)/gi
    )[1]
  }
}
