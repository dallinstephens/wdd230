// References used for help with this creating this script:
// https://byui-cse.github.io/wdd230-course/lesson09/aa-json.html
// https://byui-cse.github.io/wdd230-course/lesson09/fetch.html
// https://codepen.io/blazzard-jason/pen/QWOYzgV

const membersContainer = document.querySelector("#membersContainer");

const membersUrl = "data/members.json";

const gridListButtonsContainer = document.querySelector("#gridListButtonsContainer");
const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");

async function getMembers() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    // console.log(data.members);
    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {    
    members.forEach((member) => {
        let section = document.createElement("section");
        section.classList.add("member");

        let image = document.createElement("img");
        image.classList.add("memberImage");
        image.setAttribute("src", member.imageUrl);
        image.setAttribute("alt", member.name);
        image.setAttribute("width", "auto");
        image.setAttribute("height", "40vw");
        image.setAttribute("loading", "lazy");
        section.appendChild(image);

        let name = document.createElement("div");
        name.classList.add("memberName");
        name.textContent = member.name;
        section.appendChild(name);

        let address = document.createElement("div");
        address.classList.add("memberAddress");
        address.textContent = member.address;
        section.appendChild(address);

        let phone = document.createElement("div");
        phone.classList.add("memberPhone");
        phone.textContent = member.phone;
        section.appendChild(phone);

        let membershipLevel = document.createElement("div");
        membershipLevel.classList.add("membershipLevel");
        membershipLevel.textContent = member.membershipLevel;
        section.appendChild(membershipLevel);

        let website = document.createElement("a");
        website.classList.add("memberWebsite");
        website.setAttribute("href", member.websiteUrl);
        website.setAttribute("target", "_blank");
        website.textContent = member.name;
        section.appendChild(website);

        membersContainer.appendChild(section);        
    });
}

// Reference on how to create toggle using addEventListener: 
// https://codepen.io/blazzard-jason/pen/QWOYzgV 
gridButton.addEventListener("click", () => {
    gridListButtonsContainer.classList.add("gridViewButtonsContainer");
    membersContainer.classList.add("grid");
    gridListButtonsContainer.classList.remove("listViewButtonsContainer");
    membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
    gridListButtonsContainer.classList.add("listViewButtonsContainer");
    membersContainer.classList.add("list");
    gridListButtonsContainer.classList.remove("gridViewButtonsContainer");
    membersContainer.classList.remove("grid");
});

