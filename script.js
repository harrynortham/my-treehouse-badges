const yourUsername = "harrynortham";

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const myProfile = JSON.parse(xhr.responseText);
    const badges = myProfile.badges;
    //console.log(badges);
    const container = document.getElementById("treehouse-badges");
    const ul = document.createElement("ul");
    container.appendChild(ul);

    for (i = 0; i < badges.length; i++) {
      const iconUrl = badges[i].icon_url;
      const badgeName = badges[i].name;
      const earnedDate = new Date(badges[i].earned_date);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var date =
        monthNames[earnedDate.getMonth() + 1] +
        " " +
        earnedDate.getDate() +
        ", " +
        earnedDate.getFullYear();
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${iconUrl}" alt=""/>
        <p>Achievement</p>
        <h4>${badgeName}</h4>
        <p>${date}</p>
        `;
      ul.appendChild(li);
    }
  }
};

xhr.open("GET", `https://teamtreehouse.com/${yourUsername}.json`);
xhr.send();
