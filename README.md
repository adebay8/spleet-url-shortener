# Spleet Africa URL shortener

This is an API that provides a short url that is easily shareable from long urls.

### Usage

This API can be used both locally and has been deployed. [click here](https://spleet-url-shortener.herokuapp.com/)

To use this application, follow these steps:

1. Clone the repo `git clone https://github.com/adebay8/spleet-url-shortener.git`

2. Install the required packages `npm install`

3. Create a database (PostgreSQL, MySQL) and add a .env file with the following keys:

   - DB_HOST
   - DB_USER
   - DB_PASSWORD
   - DB_PORT
   - DB_NAME
   - DB_TYPE (`postgres`, `mysql`)

4. Run `npm run dev`

5. Using Post Man, with BASE URL as `http://localhost:1337/` or `https://spleet-url-shortener.herokuapp.com/`

   To **SHORTEN** a new url link, make a POST request to `/shorten`
   with payload
   {
   "url":`<your_url_link>`
   }

   To **GET** full link to a shotened url
   Visit`<base_url>/<short_url>` in your browser, if the url exists you will be redirected to the appropriate link

6.
