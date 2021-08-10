const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub", "VS Code", "GitHub Descktop"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};
console.log(skillsList);


copyright.innerHTML = `Svitlana Pankiv ${thisYear}`;
copyright.className = "copyright";
footer.appendChild(copyright);




const messageForm = document.getElementsByName('leave_message') [0];

messageForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const inputElements = document.querySelectorAll('input, textarea');
    const name = inputElements[0].value;
    const email = inputElements[1].value;
    const message = inputElements[2].value;
    console.log(name, email, message);
    
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    console.log(newMessage);
     
    const linkMessage = document.createElement('a');
    const spanMessage = document.createElement('span');
    linkMessage.textContent = name;
    linkMessage.href = `mailto:${email}`;
    spanMessage.textContent = ` ${message} `;

    newMessage.appendChild(linkMessage);
    newMessage.appendChild(spanMessage);


    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode.parentNode;
        entry.removeChild(newMessage);
    })

    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);

    messageForm.reset();

});




