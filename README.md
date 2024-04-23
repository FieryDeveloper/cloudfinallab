# OneStop

<p align="center">
  <img src="4937879.jpg" alt="Shopping" width="200"/>
</p>

## Quotes
- "Shop 'til you drop, all in one place!" - Anonymous
- "Convenience at its finest." - OneStop User
- "Find everything you need, and more." - Happy Shopper

## Screenshots

<p align="center">
  <img src="Homw.png" alt="Home Page" width="200"/>
</p>

<p align="center">
  <img src="createlisting.png" alt="List Creating Page" width="200"/>
</p>

<p align="center">
  <img src="listingdir.png" alt="Product Directory Page" width="200"/>
</p>

<p align="center">
  <img src="aboutsso.png" alt="About Page" width="200"/>
</p>

<p align="center">
  <img src="userprof.png" alt="User Profile Page" width="200"/>
</p>

## Firebase Authentication

<p align="center">
  <img src="firebase.png" alt="Firebase" width="200"/>
</p>

Firebase Authentication is used to provide secure user authentication for OneStop.

## MongoDB Atlas

<p align="center">
  <img src="mongo.png" alt="MongoDB Atlas" width="200"/>
</p>

MongoDB Atlas is being used for data analysis and visualization in OneStop.

## Dockerized Application
<img src="docker.png" alt="Docker" height="400" width="900"/>

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
