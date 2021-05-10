export function mockAuthenticatedProps() {
  return {
    session: {
      user: {
        nickname: 'Mario',
        name: 'Mario Bros',
        picture: '',
        sub: 'XXX',
      },
      idToken: '',
      accessToken: '',
      accessTokenScope: '',
      accessTokenExpiresAt: 1,
      createdAt: 1,
    },
  };
}
