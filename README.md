# Javascript - API Consumption

I attended the Santiago Workshop and followed his instructions and did the assignments. I did not have a good understanding of what a API was before
attending this workshop but I learned alot! I thought Santiago was a great teacher and explained everything really well.

> An API is a set of defined rules that explain how computers or applications communicate with one another. APIs sit between an application and the web server, 
acting as an intermediary layer that processes data transfer between systems.

**Here’s how an API works:**
1. **A client application initiates an API call** to retrieve information—also known as a request. 
This request is processed from an application to the web server via the API’s Uniform Resource Identifier (URI) and includes a request verb, 
headers, and sometimes, a request body.

2. **After receiving a valid request**, the API makes a call to the external program or web server.

3. **The server sends a _response_** to the API with the requested information.

4. **The API transfers the data** to the initial requesting application.

While the data transfer will differ depending on the web service being used, this process of requests and response all happens through an API. 
Whereas a user interface is designed for use by humans, APIs are designed for use by a computer or application.

APIs offer security by design because their position as middleman facilitates the abstraction of functionality between two systems—the API 
endpoint decouples the consuming application from the infrastructure providing the service. 
API calls usually include authorization credentials to reduce the risk of attacks on the server, and an API gateway can limit access to minimize security threats. 
Also, during the exchange, HTTP headers, cookies, or query string parameters provide additional security layers to the data.

For example, consider an API offered by a payment processing service. Customers can enter their card details on the frontend of an application for an ecommerce store.
The payment processor doesn’t require access to the user’s bank account; the API creates a unique token for this transaction and includes it in the API call to the server. 
This ensures a higher level of security against potential hacking threats.

Santiago's link about HTTP requests methods: https://coderspage.com/iceland

We used the **_Postman_** to verify the API
- Postman is an interactive and automatic tool for verifying the API

# LIVE version URL
index.html: https://guttural-place.surge.sh

items.html: https://guttural-place.surge.sh/items.html

patch.html: https://guttural-place.surge.sh/patch.html

screen.html: https://guttural-place.surge.sh/screen.html

search.html: https://guttural-place.surge.sh/search.html

 
---------------------------------------------------------------------------------
**Creating an application that consumes and uses data from an API using:** 

## **Fetch API**

The fetch API is the easiest way to assess resources in the network. It's a tool that allows us to make HTTP requests using different methods such as **GET, POST, PATCH, DELETE,** etc. 

To start making rewuests, we use the meethod ```fetch()``` and pass it the required arguments. The fetch method accepts two arguments:
- The 1st argument: URL where you want to make the request (in a string). It can also take a response object.
- The 2nd argument: A configuration object that takes properties for the rewuest method, ```headers, body,```and all the other options.
> ```const response = await fetch(URL, {options object});```

Since the method ```fetch()```returns a promise, we can use ```then```and ```catch```methods of promises to handle the requests. The promise gets resolved if the request is completed. On the other hand, if the request fails due to any error, the promise will be rejected.

## **Using Async/Await with fetch**

**Async:** We have the ```async```keyword, which you put in front of a function declaration to turn it into an ***async function***. An async function is a function that knows how to expect the possibility of the ```await```keyword being used to invoke asynchronous code.
- The ```async```keyword is added to functions to tell them to return a promise rather than directly returning the value.

**Await:** The advantage of an *async function* only becomes apparent when you combine it with the ```await```keyword. ```await``` only works inside *async function* within regular JavaScript code. ```await```can be put in front of any *async promise-based function* to 
pause your code on that line until the promise fufills, then return the resulting value. 
- You can use ```await```when calling any function that returns a *Promise*, including web API functions.

## **Catch for error handling**

Adding error handling. You can use a synchronous ```try...catch```structure with ```async/await```. The ```catch(){}```block is passed an error object, which you can name what you like, let's call it ```e;``` Then you can log that to the console, 
and it will give you a detailed error massage showing where in the code the error was thrown.
- The ```.catch()``` block will catch errors occurring in both the async function call and the promise chain.
- The ```try/catch```block, you might still get unhandled errors in the ```myFetch()```function when it's called.



