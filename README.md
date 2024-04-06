Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/BadolJnU/ImagePie.git
cd ImagePie
Installation

Install the project dependencies using npm:

npm run dev
Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the Clerk, MongoDB, Cloudinary.

Running the Project

npm run dev
Open http://localhost:3000 in your browser to view the project.

Home_Url: https://image-pie.vercel.app/

Key Point:

1. Using Clerk - user management system to manage the user.
2. using Button, Sheet component from shadecn.
3. NextJS is a serverless function. so i optimize a the code, when connection is created it stored in the cached, so everytime create a new request it checked there is a connection in cache or not.if no connection in cache then create a new connection.
4. Using Cloudinary to manipulate the image like image restoration, recoloring, object removal, generative filling, and background removal.
5. Save the images on the database.
6. Advanced image search functionalities.
