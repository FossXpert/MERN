## solving username problem

## How Grids are used , and to implement MUI

## Biggest Challenge is how to identify between instructer and user.
- Can we use diff token , or same token is used.
- One thing (First learn react router, and how it can use to protect routes)

## Routing in react (Very Important)
## Lot of issue faced while choosing the type of onchange
```typescript
    <Select
    fullWidth
    id="Category"
    label="Category"
    variant="outlined"
    value={category}
    onChange={(e: React.ChangeEvent<{ value: string }>) => { setCategory(e.target.value) }}
    >
    <MenuItem value="code">Code</MenuItem>
    <MenuItem value="design">Design</MenuItem>
    <MenuItem value="architect">Architect</MenuItem>
    </Select>
```
## the attempt to set a cookie via set cookie header, was blocked because it had samesite=lax error 

- The error you're encountering is due to the SameSite=Lax attribute in the Set-Cookie header. To fix this, you need to set SameSite=None and Secure attributes together. Here's an example:
http
Set-Cookie: myCookie=myValue; SameSite=None; Secure
Note that SameSite=None requires the Secure attribute to be set, and the request must be made over HTTPS.

- this worked for me
Lax
Lax SameSite restrictions mean that browsers will send the cookie in cross-site requests, but only if both of the following conditions are met:

The request uses the GET method.

The request resulted from a top-level navigation by the user, such as clicking on a link.

This means that the cookie is not included in cross-site POST requests, for example. As POST requests are generally used to perform actions that modify data or state (at least according to best practice), they are much more likely to be the target of CSRF attacks.

Likewise, the cookie is not included in background requests, such as those initiated by scripts, iframes, or references to images and other resources.

## 