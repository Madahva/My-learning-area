# PrestaShop

PrestaShop is **an online platform that allows users to create an e-commerce presence, enabling them to sell products and services through the web to an online audience**.

PrestaShop is free and Open Source. It is written in PHP, is highly customizable, supports all the major payment services, is translated in many languages and localized for many countries, has a fully responsive design (both front and back office), and more!

---


# Fundamentals of PrestaShop Development

PrestaShop was conceived so that third-party modules could easily build upon its foundations, making it an extremely customizable e-commerce software.

PrestaShop’s customization is based on four possibilities:

-   Themes,
-   Modules,
-   Hooks,
-   Overriding.



## Module

A module is an extension to PrestaShop that enables any developer to add the following:

-   Provide additional functionality to PrestaShop.
-   View additional items on the site (product selection, etc.).
-   Communicate with other e-commerce services (buying guides, payment platforms, logistics, etc.).



## Overriding

Overriding is a system in itself. PrestaShop uses completely object-oriented code. One of the advantages of this is that, with the right code architecture, you can easily replace or extend parts of the core code with your own custom code, without having to touch the core code.

Your code thus overrides the core code, making PrestaShop behave as you prefer it to.

It is however not recommended to use an override in a module that you intend to distribute (for instance through the PrestaShop Addons marketplace), and they are forbidden in partner modules. Keep them for your own shop.



---


# System requirements for PrestaShop 8

PrestaShop needs the following server configuration in order to run:

-   **System:** Unix, Linux or Windows.
-   **Web server:** Apache Web Server 2.2 or any later version.
-   **PHP:** We recommend PHP 7.2.5 or later. See the compatibility chart below for more details.
-   **MySQL:** 5.6 minimum, a recent version is recommended.
-   **Server RAM:** The more the merrier. We recommend setting the memory allocation per script (`memory_limit`) to a minimum of `256M`.

PrestaShop can also work with Nginx 1.0 or later.


---


# Installing PrestaShop for development

Now that you intend to develop for PrestaShop, you are better off keeping all your development work on your machine. The main advantage is that it makes it possible for you to entirely bypass the process of uploading your file on your online server in order to test it. Another advantage is that a local test environment enables you to test code without the risk of breaking your production store. Have a local environment is the essential first step in the path of web development.



## Installing a local environment

Installing any web-application locally requires that you first install the adequate environment, namely the Apache web server, the PHP language interpreter, the MySQL database server, and ideally a MySQL admin tool such as phpMyAdmin tool.

This is called an *AMP package: Apache+MySQL+PHP and the operating system, giving WAMP (Windows+Apache+MySQL+PHP), MAMP (Mac OS X+…) and LAMP (Linux+…). Since all of the items packaged are open-source, these installers are most of the time free.

**After installing AMP you need to**:

-  Creating a database for your shop
-  Downloading PrestaShop
-  Download dependencies
-  Setting up file rights
-  Installing PrestaShop


---

