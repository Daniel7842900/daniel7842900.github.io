
document.addEventListener('DOMContentLoaded', function(){ 
    

    renderUser("");
    
}, false);

function showAdd() {
    var x = document.getElementById("addDiv");
    if (x.style.display == "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
        artistName.value = "";
		artistAbout.value = "";
		artistUrl.value = "";
    }
}

function renderUser(keyword) {
	var myStorage = window.localStorage;

	//This gets stringified users from local storage and then put those into an array.
	let userListRender = (JSON.parse(myStorage.getItem("userList")));

	//This is the container that contains a user.
    let userInfoBox = document.querySelector("#userBox");

    //if userInfoBox is empty, create a div and set id as userBox.
    if (!userInfoBox) {
        userInfoBox = document.createElement("div");
        userInfoBox.id ="userBox";
    }

    console.log(userInfoBox);

    //This is reseting all the userInfoBox.
    userInfoBox.innerHTML = "";


    console.log(userListRender);

    //This is looping through userListRender array list.
    userListRender.forEach((item) => {
        console.log(item);

        console.log(item.name.indexOf(keyword));

        //if the name of item is bigger than or equal to 0, create the whole structure of the card.
        if (item.name.indexOf(keyword) >= 0) {
            let cardDiv = document.createElement("div");
            cardDiv.className = "cardDiv";

            let nameDescDiv = document.createElement("div");
            nameDescDiv.className = "nameDescDiv";

            let name = document.createElement("h3");
            name.innerText = item.name;
            name.className = "artistName";

            let desc = document.createElement("p");
            desc.innerText = item.about;
            desc.className = "artistDesc";

            let img = document.createElement("img");
            // img.src = "https://randomuser.me/api/portraits/med/women/12.jpg";
            img.src = item.imgURL;
            img.className = "artistImg";

            let delBtn = document.createElement("button");
            delBtn.className = "artistDelBtn";
            delBtn.innerText = "Delete";
            let uniqueCardId = item.id;
            delBtn.addEventListener("click", (item) => {
                console.log(item);
                for (let i = 0; i < userListRender.length; i++) {
                    if(userListRender[i].id === uniqueCardId) {
                        console.log("same");
                        userListRender.splice(i, 1);
                    }
                }
                console.log(userListRender);
                
                myStorage.setItem("userList", JSON.stringify(userListRender));
                renderUser("");
            });

            console.log(userInfoBox);
            nameDescDiv.appendChild(name);
            nameDescDiv.appendChild(desc);

            cardDiv.appendChild(img);
            cardDiv.appendChild(nameDescDiv);
            cardDiv.appendChild(delBtn);

            userInfoBox.appendChild(cardDiv);
            
        }

        document.body.appendChild(userInfoBox);
        
    });
}

function addUser() {
	var myStorage = window.localStorage;
	//This is grabbing users' info from local storage.
    let userList = JSON.parse(myStorage.getItem("userList"));


    let artistNameInput = document.getElementById("artistName");
    let artistAboutInput = document.getElementById("artistAbout");
    let artistImgInput = document.getElementById("artistUrl");

    console.log(artistNameInput.value);
    //console.log(artistAboutInput.value);
    //console.log(artistImgInput.value);

    //This is creating a user object, which contains id, name, about and url.
    let user = {
        id: new Date(),
        name: artistNameInput.value,
        about: artistAboutInput.value,
        imgURL: artistImgInput.value
    };

    //If userList exists, just push new user info into the userList.
    //If userList doesn't exist (when there is no user), create an empty userList
    //and then push new user info.
    if (userList) {
        userList.push(user);
    } else {
        userList = []
        userList.push(user);
    }

    //This stores stringified userList into the local storage.
    myStorage.setItem("userList", JSON.stringify(userList));

    //This renders user list to the web page.
    renderUser("");
}

function search() {

	//This is getting input "searchbar" and then store into searchInput
    let searchInput = document.getElementById("searchBar");

    console.log(searchInput.value);
    renderUser(searchInput.value);
}

