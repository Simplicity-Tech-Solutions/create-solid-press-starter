<a name="readme-top"></a>

<h1 align="center">Welcome to SolidPress 👋</h1>
<h3 align="center">The blazing fast, easy to manage way to create Wordpress templates powered by Solid JS and Tailwind CSS</h3>




![GitHub package.json version (branch)][solidpress-version]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Website][website-shield]][website-url] 

<table align="center">
    <tbody>
      <tr>
        <td>
          <a href="https://solidpress.org">📚 Read the docs</a>
        </td>
        <td>
          <a href="https://solidpress.org">🎓 Learn More</a>
        </td>
        <td>
          <a href="https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/">👨🏽‍💻 Start Contributing</a>
        </td>
        <td>
          <a href="https://solidpress.org">🌐 Visit our Website</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!-- TABLE OF CONTENTS -->
<details>
  <summary align="center" ><h4>Click to Table of Contents 🖱️</h4></summary>
  <ol>
    <li>
      <a href="#about-the-project">What is SolidPress?</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation Guide</a></li>
      </ul>
    </li>


  </ol>
</details>

## What is SolidPress?

SolidPress is a modern wordpress template. Reinventing the way in which developers make templates by using the frontend library Solid.JS to build dynamic, easy to manage, and lightweight websites for all of your needs!


<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Getting Started

SolidPress is a wordpress template. So to use it you will need to have npm and a way of running wordpress on your local machine. We reccomend using LocalWP which you can learn more about by clicking this link <a href="">🔗</a>.

### Prerequisites

* Install the NPM registry through your terminal

     ```sh 
    npm install npm@latest -g
    ```

* Install LocalWP onto your machine

    <a href="">🔗 Click here to go install to LocalWP</a>
      
### Installation

_Below is how you can get started with developing your new wordpress website using SolidPress! Currently we only have a guide for **Windows** and MacOS is not supported in full. ( MacOS Guide and release will be coming in the near future! )_

1. Open LocalWP on your device ( <a href="">🔗 Click here to go install to LocalWP</a> ) and pick the **Create a new site** option. Then press continue to go to the next page:

<p align="center">
     <img src="https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/blob/main/img/install_step_one.png" width="80%" height="auto">
</p>

2. Once you see the screen below. Create Your Local WordPress Site ( _Pick a name for your website_ ). Then press continue to go to the next page:

<p align="center">
     <img src="https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/blob/main/img/install_step_two.png" width="80%" height="auto">
</p>

3. Once you see the screen below. Click **Custom** and select your php version ( *Recomended: Any PHP version after 8.0.0* ). Select **Apache** for your web server ( *Recomended: Any Apache version after 2.4.0* ). Select **MySQL** for your database ( *Recomended: Any MySQL version after 8.0.0* ). Then press continue to go to the next page:

<p align="center">
     <img src="https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/blob/main/img/install_step_three.png" width="80%" height="auto">
</p>

4. Once you see the screen below. Pick a username and password of your choice. Then fill out what email you want to have connected to the admin account. After these have been filled out to your liking click continue to go to the next page: 

<p align="center">
     <img src="https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/blob/main/img/install_step_four.png" width="80%" height="auto">
</p>

5. You now have set up your wordpress website! You should see a screen similar to the one below. Click the **Start site** button in the top rigt corner of the screen to start your wordpress website.

<p align="center">
     <img src="https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/blob/main/img/install_step_five.png" width="80%" height="auto">
</p>


6. Click the _Open site shell_ button or open the directory of the website into your favorite code editor and or shell and go to the **themes**  directory of your wordress installation.

   ```sh
   wsl
   ```

    ```sh
   cd wp-content/themes
   ```

7. Once you are in the **themes** directory. Use the NPX command to install/create your website theme

   ```sh
   npx @solidpress/create-solidpress-starter my-website
   ```

8. Open the Wordpress admin panel and navigate to the theme page by going to Appreance -> Themes


<p align="center">
     <img src="https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/blob/main/img/install_step_eight-one.png" width="80%" height="auto">
</p>
<p align="center">
     <img src="https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/blob/main/img/install_step_eight-two.png" width="80%" height="auto">
</p>

9. Once you are in the themes portion of the admin panel activite your new solidpress theme by hovering over the _SolidPress Starter Theme_ and clicking **Activate**!

<p align="center">
     <img src="https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/blob/main/img/install_step_nine.png" width="80%" height="auto">
</p>

10. Click on the Home Icon on the top left of your screen and start developing solid press website! 

<p align="center">
     <img src="https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/blob/main/img/enjoy_your_website.png" width="80%" height="auto">
</p>

<p align="center">(<a href="#readme-top">back to top</a>)</p>


## License

SolidPress Starter Theme is an [MIT-licensed](LICENSE) open-source wordpress template by [Simplicity Tech Solutions](https://simplicitytechsolutions.com) and [contributors](https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/graphs/contributors):

<a href="https://github.com/aidenybai/million/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Simplicity-Tech-Solutions/create-solid-press-starter" />
</a>

<p align="center">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/Simplicity-Tech-Solutions/create-solid-press-starter.svg?style=for-the-badge
[contributors-url]: https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Simplicity-Tech-Solutions/create-solid-press-starter.svg?style=for-the-badge
[forks-url]: https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/network/members
[stars-shield]: https://img.shields.io/github/stars/Simplicity-Tech-Solutions/create-solid-press-starter.svg?style=for-the-badge
[stars-url]: https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/stargazers
[issues-shield]: https://img.shields.io/github/issues/Simplicity-Tech-Solutions/create-solid-press-starter.svg?style=for-the-badge
[issues-url]: https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/issues
[license-shield]: https://img.shields.io/github/license/Simplicity-Tech-Solutions/create-solid-press-starter.svg?style=for-the-badge
[license-url]: https://github.com/Simplicity-Tech-Solutions/create-solid-press-starter/blob/master/LICENSE.txt
[website-shield]: https://img.shields.io/website/https/solidpress.org.svg?style=for-the-badge&logo=website&colorB=555
[website-url]: https://solidpress.org 
[solidpress-version]: https://img.shields.io/github/package-json/v/Simplicity-Tech-Solutions/create-solid-press-starter/main.svg?style=for-the-badge

