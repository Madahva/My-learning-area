In Auth0, the Code Flow is an authentication flow or protocol used for securely obtaining user access tokens and ID tokens. 

It is based on the OAuth 2.0 authorization framework and is commonly used in web applications where the client-side code interacts with the Auth0 server to authenticate users.

The [OAuth 2.0 Authorization Framework](https://auth0.com/docs/authenticate/protocols/oauth) supports several different flows (or grants). Flow are ways of retrieving an Access Token. Deciding which one is suited for your use case depends mostly on your [application type](https://auth0.com/docs/get-started/applications), but other parameters weigh in as well, like the level of trust for the client, or the experience you want your users to have.


---


## Authorization Code Flow

Because regular web apps are server-side apps where the source code is not publicly exposed, they can use the Authorization Code Flow, **which exchanges an Authorization Code for a token.**


---


## Authorization Code Flow with Proof Key for Code Exchange (PKCE)

During authentication, mobile and native applications can use the Authorization Code Flow, but they require additional security. Additionally, single-page apps have special challenges. To mitigate these, OAuth 2.0 provides a version of the Authorization Code Flow which makes use of a Proof Key for Code Exchange (PKCE).


---


## Implicit Flow with Form Post

As an alternative to the Authorization Code Flow, OAuth 2.0 provides the Implicit Flow, which is intended for Public Clients, or applications which are unable to securely store Client Secrets. While this is no longer considered a best practice for requesting Access Tokens, when used with Form Post response mode, it does offer a streamlined workflow if the application needs only an ID token to perform user authentication.

---


## Hybrid Flow

Applications that are able to securely store Client Secrets may benefit from the use of the Hybrid Flow, which combines features of the Authorization Code Flow and Implicit Flow with Form Post to allow your application to have immediate access to an ID token while still providing for secure and safe retrieval of access and refresh tokens. This can be useful in situations where your application needs to immediately access information about the user, but must perform some processing before gaining access to protected resources for an extended period of time.


---


## Client Credentials Flow

With machine-to-machine (M2M) applications, such as CLIs, daemons, or services running on your back-end, the system authenticates and authorizes the app rather than a user. For this scenario, typical authentication schemes like username + password or social logins don't make sense. Instead, M2M apps use the Client Credentials Flow (defined in OAuth 2.0 RFC 6749, section 4.4).


---


## Device Authorization Flow

With input-constrained devices that connect to the internet, rather than authenticate the user directly, the device asks the user to go to a link on their computer or smartphone and authorize the device. This avoids a poor user experience for devices that do not have an easy way to enter text. To do this, device apps use the Device Authorization Flow (drafted in OAuth 2.0). For use with mobile/native applications.


---


## Resource Owner Password Flow

Though we do not recommend it, highly-trusted applications can use the Resource Owner Password Flow, which requests that users provide credentials (username and password), typically using an interactive form. The Resource Owner Password Flow should only be used when redirect-based flows (like the [Authorization Code Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow)) cannot be used.


---


