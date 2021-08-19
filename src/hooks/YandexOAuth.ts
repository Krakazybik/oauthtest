import OAuth, { IOAuthParams } from "./OAuth"

export default class YandexOAuth extends OAuth {
  getRedirectURL(): string {
    return Object.keys(this.oAuthParams).reduce((acc, item, index, array) => {
      return `${acc}${item}=${this.oAuthParams[item as keyof IOAuthParams]}${
        index + 1 < array.length ? "&" : ""
      }`
    }, "https://oauth.yandex.ru/authorize?")
  }

  // eslint-disable-next-line class-methods-use-this
  extractToken(urlWithToken: string): string {
    return urlWithToken.split(
      /^#access_token=(\S*)&token_type=(\S*)&expires_in=(\d*)/gi
    )[1]
  }
}
