import { create } from "apisauce";

let apiData = null;

const api = create({
  baseURL: "https://fcoin-backend.herokuapp.com",
});

export const getRanks = async () => {
  let rankList = [];
  apiData = await api.get("/ranks");
  const userList = await apiData.data;
  userList.map(async (user) => {
    rankList.push({
      handle: user.user_name,
      pr_count: user.pr_count,
    });
  });

  return rankList;
};

export const getStats = async (user, project) => {
  apiData = await api.post("/stats", {
    user_name: user,
    project: project,
  });
  return apiData.data;
};

export const getActivity = async (user, project) => {
  apiData = await api.post("/activity", {
    user_name: user,
    project: project,
  });
  return apiData.data.activity;
};
