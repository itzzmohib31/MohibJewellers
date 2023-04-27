To switch between production and local environments in Next.js, you need to make some changes to your code and configuration files.

1. Update your environment variables:
Create two files, `.env.local` and `.env.production` for local and production environments respectively. Define your environment variables in these files, and make sure to use different values for each environment.

2. Modify your `next.config.js` file:
In your `next.config.js` file, you can use the `publicRuntimeConfig` property to define environment variables that should be available on the client side. Here's an example:

```js
module.exports = {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    SOME_OTHER_VARIABLE: process.env.SOME_OTHER_VARIABLE,
  },
};
```

3. Access environment variables in your code:
   To access environment variables in your code, you can use the process.env object. 
   
```
fetch(process.env.API_URL)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

4. Use environment-specific code:
   If you need to use environment-specific code, you can use conditional statements based on the environment variable values. 

```
if (process.env.NODE_ENV === "production") {
  // do something in production environment
} else {
  // do something in local environment
}
```

With these changes, your code should be able to switch between local and production environments based on the environment variables defined in your .env.local and .env.production files.

```
      +---------------------+  Authentication  +----------------------+
    |   Landing Page       | ---------------->|   Login/Signup Page    |
    +---------------------+                  +----------------------+
                                                  |
                                                  v
                                        +-----------------------+
                                        |      User Database     |
                                        +-----------------------+
                                                  |
                                                  v
                              +-----------------------------------+
                              |   Tools Dashboard                  |
                              +-----------------------------------+
                              |   Free Tools                       |
                              |   Paid Tools (requires subscription)|
                              +-----------------------------------+
                                          |             ^
                                          v             |
                          +-------------------------------------+
                          |   Subscription Page (Payment Gateway) |
                          +-------------------------------------+
                                          |
                                          v
                                   +--------------+
                                   |  User Database|
                                   +--------------+

```

In this updated UML diagram, the Tools Dashboard is where users can access both free and paid tools. Free tools will be available to all authenticated users, while paid tools will require a subscription.

![image](https://user-images.githubusercontent.com/120586805/234814154-2fe5f9b8-213a-4c05-9976-9217041c3c82.png)

