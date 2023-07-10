



# Azure directory services

Azure Active Directory (Azure AD) is a directory service that enables you to sign in and access both Microsoft cloud applications and cloud applications that you develop. Azure AD can also help you maintain your on-premises Active Directory deployment.

For on-premises environments, Active Directory running on Windows Server provides an identity and access management service that's managed by your organization. Azure AD is Microsoft's cloud-based identity and access management service. With Azure AD, you control the identity accounts, but Microsoft ensures that the service is available globally. If you've worked with Active Directory, Azure AD will be familiar to you.

When you secure identities on-premises with Active Directory, Microsoft doesn't monitor sign-in attempts. When you connect Active Directory with Azure AD, Microsoft can help protect you by detecting suspicious sign-in attempts at no extra cost. For example, Azure AD can detect sign-in attempts from unexpected locations or unknown devices.


## Who uses Azure AD?

Azure AD is for:

- **IT administrators**. Administrators can use Azure AD to control access to applications and resources based on their business requirements.
- **App developers**. Developers can use Azure AD to provide a standards-based approach for adding functionality to applications that they build, such as adding SSO functionality to an app or enabling an app to work with a user's existing credentials.
- **Users**. Users can manage their identities and take maintenance actions like self-service password reset.
- **Online service subscribers**. Microsoft 365, Microsoft Office 365, Azure, and Microsoft Dynamics CRM Online subscribers are already using Azure AD to authenticate into their account.


## What does Azure AD do?

Azure AD provides services such as:

- **Authentication**: This includes verifying identity to access applications and resources. It also includes providing functionality such as self-service password reset, multifactor authentication, a custom list of banned passwords, and smart lockout services.
- **Single sign-on**: Single sign-on (SSO) enables you to remember only one username and one password to access multiple applications. A single identity is tied to a user, which simplifies the security model. As users change roles or leave an organization, access modifications are tied to that identity, which greatly reduces the effort needed to change or disable accounts.
- **Application management**: You can manage your cloud and on-premises apps by using Azure AD. Features like Application Proxy, SaaS apps, the My Apps portal, and single sign-on provide a better user experience.
- **Device management**: Along with accounts for individual people, Azure AD supports the registration of devices. Registration enables devices to be managed through tools like Microsoft Intune. It also allows for device-based Conditional Access policies to restrict access attempts to only those coming from known devices, regardless of the requesting user account.


---


## Azure External Identities

Azure External Identities is a service offering from Microsoft Azure that enables organizations to provide secure access to their applications and resources for external users such as customers, partners, and suppliers. It allows organizations to extend their identity management capabilities beyond their internal users to include external identities.

Azure External Identities offers various features and capabilities, including:

1. Identity providers: Azure External Identities supports integration with various identity providers, such as social identity providers (e.g., Microsoft accounts, Google, Facebook, Twitter) and enterprise identity providers (e.g., Azure Active Directory, Active Directory Federation Services, on-premises Active Directory). This allows external users to sign in to applications using their existing credentials from these providers.

2. Single sign-on (SSO): With Azure External Identities, external users can enjoy a single sign-on experience across multiple applications. Once authenticated, users can access different applications and resources without the need to repeatedly enter their credentials.

3. User registration and self-service: External users can register themselves to gain access to applications and services. Azure External Identities provides customizable self-service registration portals, where organizations can define the required registration fields and collect additional user information as needed.

4. User lifecycle management: Organizations can manage the lifecycle of external user accounts, including user provisioning, deprovisioning, and user role management. This helps ensure that external users have appropriate access to applications and resources.

5. Multi-factor authentication (MFA): Azure External Identities supports multi-factor authentication to provide an additional layer of security for external users. Organizations can enforce MFA policies to require external users to verify their identity using factors like SMS, phone call, or mobile app notifications.

6. B2B collaboration: Azure External Identities enables secure collaboration between organizations. It allows organizations to invite external users from other organizations to access their applications and resources while maintaining control over access permissions and data sharing.

7. Customization and branding: Organizations can customize the look and feel of the sign-in and registration experiences for external users, including branding elements such as logos, colors, and page layouts. This helps provide a consistent and branded experience to external users.

Azure External Identities simplifies the process of managing identities for external users, enhances security through authentication mechanisms like MFA, and enables seamless collaboration with external partners. It provides a comprehensive set of capabilities to meet the identity and access management needs of organizations that need to extend their applications and services to external users.


---


## Azure AD Multi-Factor Authentication

Azure AD Multi-Factor Authentication is a Microsoft service that provides multifactor authentication capabilities. Azure AD Multi-Factor Authentication enables users to choose an additional form of authentication during sign-in, such as a phone call or mobile app notification.


---


## Passwordless authentication

Passwordless authentication is a method of verifying a user's identity without the need for traditional passwords. It aims to enhance security, improve user experience, and reduce the risk associated with password-related vulnerabilities such as weak passwords, password reuse, and phishing attacks.


### Windows Hello for Business

Windows Hello for Business is ideal for information workers that have their own designated Windows PC. The biometric and PIN credentials are directly tied to the user's PC, which prevents access from anyone other than the owner. With public key infrastructure (PKI) integration and built-in support for single sign-on (SSO), Windows Hello for Business provides a convenient method for seamlessly accessing corporate resources on-premises and in the cloud.

### Microsoft Authenticator App

You can also allow your employee's phone to become a passwordless authentication method. You may already be using the Microsoft Authenticator App as a convenient multi-factor authentication option in addition to a password. You can also use the Authenticator App as a passwordless option.

The Authenticator App turns any iOS or Android phone into a strong, passwordless credential. Users can sign-in to any platform or browser by getting a notification to their phone, matching a number displayed on the screen to the one on their phone, and then using their biometric (touch or face) or PIN to confirm. Refer to Download and install the Microsoft Authenticator app for installation details.

### FIDO2 security keys

The FIDO (Fast IDentity Online) Alliance helps to promote open authentication standards and reduce the use of passwords as a form of authentication. FIDO2 is the latest standard that incorporates the web authentication (WebAuthn) standard.

FIDO2 security keys are an unphishable standards-based passwordless authentication method that can come in any form factor. Fast Identity Online (FIDO) is an open standard for passwordless authentication. FIDO allows users and organizations to leverage the standard to sign-in to their resources without a username or password by using an external security key or a platform key built into a device.

Users can register and then select a FIDO2 security key at the sign-in interface as their main means of authentication. These FIDO2 security keys are typically USB devices, but could also use Bluetooth or NFC. With a hardware device that handles the authentication, the security of an account is increased as there's no password that could be exposed or guessed.


---


## Azure conditional access

Conditional Access is a tool that Azure Active Directory uses to allow (or deny) access to resources based on identity signals. These signals include who the user is, where the user is, and what device the user is requesting access from.

Conditional Access helps IT administrators:

- Empower users to be productive wherever and whenever.
- Protect the organization's assets.

Conditional Access also provides a more granular multifactor authentication experience for users. For example, a user might not be challenged for second authentication factor if they're at a known location. However, they might be challenged for a second authentication factor if their sign-in signals are unusual or they're at an unexpected location.

During sign-in, Conditional Access collects signals from the user, makes decisions based on those signals, and then enforces that decision by allowing or denying the access request or challenging for a multifactor authentication response.


### When can I use Conditional Access?

Conditional Access is useful when you need to:

- Require multifactor authentication (MFA) to access an application depending on the requester’s role, location, or network. For example, you could require MFA for administrators but not regular users or for people connecting from outside your corporate network.
- Require access to services only through approved client applications. For example, you could limit which email applications are able to connect to your email service.
- Require users to access your application only from managed devices. A managed device is a device that meets your standards for security and compliance.
- Block access from untrusted sources, such as access from unknown or unexpected locations.




---


## Learning objectives

By the end of this module, you will be able to:

- Describe directory services in Azure, including Azure Active Directory (AD) and Azure AD DS
- Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless
- Describe external identities and guest access in Azure
- Describe Azure AD Conditional Access
- Describe Azure Role Based Access Control (RBAC)
- Describe the concept of Zero Trust
- Describe the purpose of the defense in depth model
- Describe the purpose of Microsoft Defender for Cloud