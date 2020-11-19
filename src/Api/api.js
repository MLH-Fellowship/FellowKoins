const fetch = require("node-fetch");

export const getRanks = async () => {
  let rankList = [];
  const apiData = await fetch("https://fcoin-backend.herokuapp.com/ranks");
  const userList = await apiData.json();
  userList.map(async (user) => {
        rankList.push({
      handle: user,
      //   img: avatarUrl.avatar_url,
    });
  });

  return rankList;
};
