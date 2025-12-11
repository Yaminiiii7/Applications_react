const queryList=[
    {
        question:'What is an API and why do we use it?',
        answer:'An API (Application Programming Interface) allows two systems to communicate by sending and receiving structured data. It’s used to connect clients (frontend) with servers, databases, and external services.'

    },
    {
        question:'What is the difference between REST and RESTful APIs?',
        answer:'REST is an architectural style; a RESTful API follows REST principles like statelessness, resource-based URLs, and standard HTTP methods.'

    },
    {
        question:' What is an API endpoint?',
        answer:'An endpoint is a specific URL path where a client sends requests, such as /api/users or /products/1.'
    },
    {        
        question:'What is the purpose of HTTP methods in APIs? Name a few.',
        answer:'HTTP methods define the action:GET, POST, PATCH, DELETE'
    },
    {
        question:'What is the meaning of a 200, 400, and 500 status code?',
        answer:'200 OK → success, 400 Bad Request → client-side error, 500 Internal Server Error → server failure'

    },
    {
        question:'What is JSON and why is it commonly used in APIs?',
        answer:'JSON is a lightweight data format that is easy for humans to read and easy for machines to parse. Most APIs use JSON for request/response bodies.'

    },
    {
        question:'What is authentication vs authorization in APIs?',
        answer:'Authentication: verifying who the user is (e.g., login), Authorization: verifying what the user can access.'
    },
    {
        question:'What is rate limiting and why is it important?',
        answer:'Rate limiting restricts how many requests a user can make in a given time, preventing abuse, DDOS attacks, and server overload.'

    },
    {
        question:'What are CORS restrictions?',
        answer:'CORS controls which external domains can access your API. If a request comes from a blocked origin, the browser prevents it for security.'
    },
    {
        question:'What’s the difference between an API key and a JWT token?',
        answer:'API Key: simple static key to identify the client.JWT Token: encoded token that contains verified user data and expires after a set time — more secure for user authentication.'
    }
]
export default queryList;













