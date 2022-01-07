import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

async function refreshAccessToken(token) {
  console.log("REFRESHACCESSTOKEN -> token: ", token);
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshToken } = await spotifyApi.refreshAccessToken();
    console.log("REFRESH TOKEN IS", refreshToken);

    return {
      ...token,
      accessToken: refreshToken.access_token,
      accessTokenExpires: Date.now() + refreshToken.expires_in * 1000,
      refreshToken: refreshToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // site: process.env.NEXTAUTH_URL,
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
      // authorization:
      //   "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-read-collaborative,user-read-email,streaming,user-read-private,user-library-read,user-top-read,user-library-modify,user-read-playback-state,user-modify-playback-state,user-read-recently-played,user-follow-read,user-read-currently-playing",
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      console.log("NEXT AUTH -> token: ", token);
      console.log("NEXT AUTH -> account: ", account);
      console.log("NEXT AUTH -> user: ", user);
      if (account && user) {
        return {
          // accessToken: account.access_token,
          // accessTokenExpires: Date.now() + account.expires_in * 1000,
          // refreshToken: account.refresh_token,
          // user,

          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        console.log("Existing ACCESS TOKEN is valid");
        return token;
      }

      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      console.log("NEXTAUTH -> session: ", session);
      console.log("NEXTAUTH -> token: ", token);
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
      // session.user = token.user;
      // session.accessToken = token.accessToken;
      // session.error = token.error;

      // return session;
    },
  },
});
