# snifr

Snifr is our second group project of the KU Coding Bootcamp. Our task was to create a full-stack application that met the following requirments.

* Use a Node and Express Web Server;
* Be backed by a MySQL Database an ORM (not necessarily Sequelize);
* Have both GET and POST routes for retrieving and adding new data;
* Be deployed using Heroku (with Data);
* Utilize at least one new library, package, or technology that we haven’t discussed;
* Have a polished frontend / UI;
* Have folder structure that meets MVC Paradigm;
* Meet good quality coding standards (indentation, scoping, naming).
* Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md

## Description

Our application snifr is a dating app for dogs. The idea is that a owner can create themselves a profile and add thier dogs. Each dog gets a profile with basic information along with a survey of their likes and dislikes. They also get to list if they have any preferences in other dogs. Our app would collect the data and save it in a database, then whenever the matches link was selected the user would see all the dog matches in order by highest percent match of survey answers, removing any dogs that didn't fit the preference critera.
