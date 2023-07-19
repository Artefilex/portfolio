const Skill = require("../models/skill");
const Portfolio = require("../models/portfolio");

async function populate() {
  const count = await Skill.count();
  if (count == 0) {
    const skills = await Skill.bulkCreate([
      { skillName: "HTML", skillLevel: "95" },
      { skillName: "CSS", skillLevel: "90" },
      { skillName: "JS", skillLevel: "70" },
      { skillName: "REACT", skillLevel: "50" },
      { skillName: "SASS", skillLevel: "40" },
      { skillName: "JQUERY", skillLevel: "20" },
      { skillName: "SQL", skillLevel: "40" },
      { skillName: "NODEJS", skillLevel: "40" },
      { skillName: "GİT", skillLevel: "60" },
    ]);
    const portfolio = await Portfolio.bulkCreate([
      {
        header: "Travel App",
        content:"I developed this website using React and Sass. It is a Travel application where users can sign up and shop for one or more travel packages of their choice.",
        projecturl: "https://artefilex-travel-app.netlify.app/",
      },
      {
        header: "Linkedin MainPage",
        content:"The LinkedIn main page project I created when I first learned React.",
        projecturl: "https://artefilex-linkedin-mainpage.netlify.app/",
      },
      {
        header: "Coffe Website",
        content:"A simple project I created 2 years ago using HTML, CSS, and JavaScript.",
        projecturl: "https://artefilex-coffe.netlify.app/index.html",
      },
      {
        header: "Course App",
        content: "A simple course website I made 1.5 years ago using HTML, CSS, and JavaScript.",
        projecturl: "https://simple-course-app.netlify.app/",
      },
      {
        header: "CoinFlex",
        content:"CoinFlex is a project I built using React, featuring a user-friendly interface that allows users to utilize a comprehensive calculator for calculating potential earnings based on annual, monthly, and daily interest rates of selected banks. Moreover, the platform keeps users up-to-date with daily foreign exchange rates and enables them to create personalized news entries categorized under specific topics",
        projecturl: "https://eclectic-hummingbird-d2cdec.netlify.app/credit",
      },
    ]);
  }
}

module.exports = populate;
