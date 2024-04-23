# OneStop

<img src="4937879.jpg" alt="Shopping" height="400" width="600"/>

## Quotes
 - "Shop 'til you drop, all in one place!" - Anonymous
- "Convenience at its finest." - OneStop User
- "Find everything you need, and more." - Happy Shopper

## Screenshots

### Home Page
<img src="Homw.png" alt="Home Page" height="400" width="600"/>

### List Creating Page
<img src="createlisting.png" alt="List Creating Page" height="400" width="600"/>

### Product Directory Page
<img src="listingdir.png" alt="Product Directory Page" height="400" width="600"/>

### About Page
<img src="aboutsso.png" alt="About Page" height="400" width="600"/>

### User Profile Page
<img src="userprof.png" alt="User Profile Page" height="400" width="600"/>

## Dockerized Application
<img src="docker.png" alt="Docker" height="400" width="600"/>

After signup/sign-in, the user may access their Gmail Account for mail orders and can access YouTube for marketing campaigns directly without multiple logins.

## Docker Details

This project is Dockerized for easy deployment. Follow these steps to run the project:


1. Clone the repository
2. Navigate into the prject directory:
   cd onestop
3. Install dependencies:
   npm install
4. Build the Docker image:
   docker build -t onestop-image .
5. Run the Docker container, replacing port with the desired port number:
   docker run -p port:port onestop-image:latest
