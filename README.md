# Compawssion: A Pet Adoption System 
"Compawssion" is a website where you can either give a pet up for adoption or adopt one. If you have a pet you can't care for anymore, you fill out a form. The admin then decides if they can put your pet on Compawssion. If they approve, they'll ask you to bring the pet to an adoption center.

If you want to adopt a pet, you fill out a form with your details. The admin gets a lot of requests and picks the best one. If they choose you, they'll delete the other requests and take the pet off Compawssion. They'll keep a record of the pet and your contact info.

So, Compawssion makes it easy to find new homes for pets and connect them with people who want to adopt.



## Introduction
Compawssion is a web application that connects pet lovers with pets in need of a home. Our platform simplifies the process of pet adoption by providing a seamless user experience.

## Features
- Users can submit a pet for adoption by filling out a form.
- Admin reviews adoption submissions and can approve or reject them.
- Approved pets are listed on Compawssion for potential adopters to view.
- Users interested in adopting a pet fill out an application form.
- Admin evaluates adoption applications to select the most suitable adopter.
- Admin maintains a history of adopted pets and their new owners.
- User can browse and search for available pets for adoption.
- They can filter pets based on pet type i.e. dog, cat, fish, etc.
- Compawssion offer detailed pet profiles with photos and descriptions.

## Technology Stack
Compawssion is built using the MERN stack (MongoDB, Express.js, React, Node.js) 
- maraming thanks google and chatgpt and github mwehehe

## Installation
Follow these steps to set up the project locally:

1. clone repository using 'git clone https://github.com/raaalphhh/Compawssion.git' - take time to know pano yung branch or fork, kung ano man tama. para makakapag code ka ng sarili mong version. tapos pag working or sheesh, mamemerge. please lang, di ko rin alam yung github, gumugol din ako ng oras, baka naman di ba. nahirapan ako magset-up, nasiraan pa ng laptop. 
2. Install dependencies both sa Client directory and server directory: `npm install` 
3. Connected na to sa database ko, pero kung gusto mo rin makita sa end mo, create ka lang ng `.env` file in server with `mongooseURL` variable set to your MongoDB connection URL in the format `mongooseURL=mongodb://username:password@host:port/database_name`. Nikocopy lang to after mo magset-up, papalitan mo lang yung dababase name at password.
4. Run the server: `npx nodemon server`. Dapat may lumabas na "connected" sheesh. 
5. `npm start` sa Client directory to start yung front end.

### Additional Notes
- Ensure to have Node.js and npm installed on your machine.
- pag error due to dependencies and sheesh, npm audit fix lang. same Client directory pa rin.
- and Live Server extension sa Visual Studio Code para mas madali mag edit.
- localhost:3000/admin yung admin side.
- email: admin; pass: 123
- Sa desktop or laptop screen lang to compatible yung layout, hindi responsive and sheesh.