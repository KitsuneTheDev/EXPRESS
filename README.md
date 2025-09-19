# EXPRESS
Express Demos

## RESPONSE CODES

### SUCCESS RESPONSES
* 200 OK                    -> Request successful
* 201 Created               -> Resource was successfully created (e.g., after POST)
* 202 Accepted              -> Request accepted for processing but not yet completed
* 204 No Content            -> Request succeeded, but there is no data to return

### REDIRECTION RESPONSES
* 301 Moved Permanently     -> Resource permanently moved to a new URL
* 302 Found                 -> Resource temporarily moved to a different URL
* 304 Not Modified          -> Cached resource is still valid; no nedd to re-download

### CLIENT ERROR RESPONSES
* 400 Bad Request           -> Client sent an invalid or malformed request
* 401 Unauthorized          -> Authentication required or invalid credentials
* 403 Forbidden             -> Server understood the request but refuses to authorize it
* 404 Not Found             -> HTTP method not supported for this endpoint
* 405 Method Not Allowed    -> HTTP method not supported for this endpoint
* 409 Conflict              -> Request conflicts with the current state of the server (e.g., duplicate entry).
* 410 Gone                  -> Resource was permanently removed and won't be available again
* 422 Unprocessable Entity  -> Request was well-formed but contained invalid data
* 429 Too Many Requests     -> Client sent too many requests in a short time (rate limiting)

### SERVER ERROR RESPONSES
* 500 Internal Server Error -> Generic error for unexpected server conditions
* 501 Not Implemented       -> Server doesn't support the request functionality
* 502 Bad Gateway           -> Invalid response from an upstream server
* 503 Service Unavailable   -> Server is temporarily overloaded or down for maintenance
* 504 Gateway Timeout       -> Upstream server took too long to respond