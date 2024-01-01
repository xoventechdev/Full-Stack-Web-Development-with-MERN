let data = document.getElementById("data");
let serverlist = document.getElementById("serverlist");

async function getData() {
  let url = "https://own.xoventechdev.xyz/includes/api.php?freeServers";
  let alldata = await fetch(url);
  let json = await alldata.json();

  serverlist.innerHTML = "";

  json.forEach((element) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${element.serverName}</td><td>${element.MaxSpeed}</td><td>${element.flagURL}</td>`;
    serverlist.appendChild(row);
  });
}
