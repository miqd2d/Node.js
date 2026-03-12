## Middleware

__Definition__ : Middleware functions are functions that have access to both the request and the response objects.

Also has the ```next``` function that is called after the middleware code execution is complete : It can be another middleware or an end to req-res cycle.

__It can perform the following tasks:__
1. Execute any code
2. Make changes to the request and the response object.
3. End the request response cycle.
4. Call the ```next``` middleware function in the stack.

---

__Following are the types of Middlewares__
1. Application-level middleware
2. Router-level middleware
3. Error-handling middleware
4. Built-in middleware
5. Third party middleware

---
