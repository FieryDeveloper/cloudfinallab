# OneStop

![Shopping](4937879.jpg)

## - Shop til you drop, all in one place!
## - Convenience at its finest. - OneStop User
## - Find everything you need, and more.


## Home Page
![Home Page](Homw.png)

## List Creating Page
![List Creating Page](createlisting.png)

## Product Directory Page
![Product Directory Page](listingdir.png)

## About Page
![About Page](aboutsso.png)

## User Profile Page
![User Profile Page](userprof.png)

## Dockerized Application
![Docker](docker.png)

After signup/sign-in , the user may access their Gmail Account for mail orders and can access youtube for marketing campaigns directly without multiple logins.
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
