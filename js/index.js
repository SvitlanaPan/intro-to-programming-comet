const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const skills = ["Basic JavaScript", "HTML", "CSS", "Git", "GItHub", "VS Code", "GitHub Descktop"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillslist.appendChild(skill);
};


copyright.innerHTML = Svitlana Pankiv ${thisYear};
copyright.className = "copyright";
footer.appendChild(copyright);







