import OAuth from "./OAuth"

export default class YandexOAuth extends OAuth {
  constructor(serverURL: string, clientId: string) {
    super(
      serverURL,
      clientId,
      /^#access_token=(\S*)&token_type=(\S*)&expires_in=(\d*)/gi
    )
  }

  getRedirectURL(): string {
    return this.formingRedirectURL("https://oauth.yandex.ru/authorize?")
  }
}
