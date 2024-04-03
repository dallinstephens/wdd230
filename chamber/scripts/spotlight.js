// References used for help with this creating this script:
// https://byui-cse.github.io/wdd230-course/lesson09/aa-json.html
// https://byui-cse.github.io/wdd230-course/lesson09/fetch.html
// https://codepen.io/blazzard-jason/pen/QWOYzgV

const spotlight1 = document.querySelector("#spotlight1");
const spotlight2 = document.querySelector("#spotlight2");
const spotlight3 = document.querySelector("#spotlight3");

const membersUrl = "data/members.json";

async function getMembers() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    // console.log(data.members);
    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {
    let goldAndSilverMembershipIndexes = [];
    // Reference on how to create for loop:
    // https://www.w3schools.com/js/js_loop_for.asp    
    for (let i = 0; i < members.length; i++) {
        if (members[i].membershipLevel == "Gold Membership" || members[i].membershipLevel == "Silver Membership") {
            goldAndSilverMembershipIndexes.push(i);
        }
    }

    // for loop needs to run 3 times to get 3 spotlights
    for (let i = 0; i < 3; i++) {
        // console.log(goldAndSilverMembershipIndexes);
        // Reference on how to pick a random value from a JavaScript array: 
        // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

        let randomNumber = Math.floor(Math.random() * goldAndSilverMembershipIndexes.length);
        let randomGoldOrSilverMembershipIndex = goldAndSilverMembershipIndexes[randomNumber];
        // console.log(randomNumber);
        // console.log(randomGoldOrSilverMembershipIndex);

        let h3 = document.createElement("h3");
        h3.textContent = members[randomGoldOrSilverMembershipIndex].name;
        
        let containerDiv = document.createElement("div");
        containerDiv.classList.add("lightMode");

        let image = document.createElement("img");
        image.classList.add("spotlightImage");
        image.setAttribute("src", members[randomGoldOrSilverMembershipIndex].imageUrl);
        image.setAttribute("alt", members[randomGoldOrSilverMembershipIndex].name);
        image.setAttribute("loading", "lazy");
        containerDiv.append(image);

        let address = document.createElement("div");
        address.classList.add("memberAddress");
        address.textContent = members[randomGoldOrSilverMembershipIndex].address;
        containerDiv.append(address);

        let phone = document.createElement("div");
        phone.classList.add("memberPhone");
        phone.textContent = members[randomGoldOrSilverMembershipIndex].phone;
        containerDiv.append(phone);
        
        let membershipLevel = document.createElement("div");
        membershipLevel.classList.add("membershipLevel");
        membershipLevel.textContent = members[randomGoldOrSilverMembershipIndex].membershipLevel;
        containerDiv.append(membershipLevel);

        let website = document.createElement("a");
        website.classList.add("memberWebsite");
        website.setAttribute("href", members[randomGoldOrSilverMembershipIndex].websiteUrl);
        website.setAttribute("target", "_blank");
        website.textContent = members[randomGoldOrSilverMembershipIndex].name;
        containerDiv.append(website);    

        // References on how to pick a random value with no repeats:
        // https://stackoverflow.com/questions/17891173/how-to-efficiently-randomly-select-array-item-without-repeats
        // https://www.w3schools.com/jsref/jsref_splice.asp
        goldAndSilverMembershipIndexes.splice(randomNumber,1);
        // console.log(goldAndSilverMembershipIndexes);
        if (i == 0) {
            spotlight1.append(h3);
            spotlight1.append(containerDiv);
        }            
        else if (i == 1) {
            spotlight2.append(h3);
            spotlight2.append(containerDiv);
        }            
        else if (i == 2) {
            spotlight3.append(h3);
            spotlight3.append(containerDiv);
        }            
    }
}

