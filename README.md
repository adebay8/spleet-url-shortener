# Spleet Africa URL shortener

This is an API that provides a short url that is easily shareable from long urls.

### Usage

To use this application, follow these steps:

1. Clone the repo `git clone https://github.com/adebay8/spleet-url-shortener.git`

2. Install the required packages `npm install`

3. Create a database (PostgreSQL, MySQL) and add a .env file with the following keys:

   - DB_HOST
   - DB_USER
   - DB_PASSWORD
   - DB_PORT
   - DB_NAME

4. Run `npm run dev`

5. Using Post Man, `http://localhost:1337/`

   To **GET** full link to a shotened url
   Visit`http://localhost:1337/<short_url>` in your browser, if the url exists you will be redirected to the appropriate link

   To **shorten** a new url link, make a POST request to `http://localhost:1337/shorten`
   with payload {
   "url":`<your_url_link>`
   } to the above url
