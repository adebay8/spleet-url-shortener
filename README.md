# Spleet Africa URL shortener

This is an API that provides a short url that is easily shareable from long urls.

### Usage

This API can be used both locally and has been deployed. [click here](https://spleet-url-shortener.herokuapp.com/)

To run this application locally, follow steps 1-5.
If you do not want to set up the application locally, go to step 5.

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

   To **SHORTEN** a new url link, make a POST request to `/shorten` with payload
   {
   "url":`<your_url_link>`
   }

   - Reponse data contains:
     - shortUrl
     - longUrl
     - urlCode
     - id
     - created_at
     - updated_at

   To **GET** full link to a shotened url

   - Copy the short url and paste in your broswer, if the url exists you will be redirected to the corresponding page
