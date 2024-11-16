const baseUrl = "https://wedev-api.sky.pro/api";

export const apiProvider = {
  getLeaderboard: () =>
    fetch(`${baseUrl}/leaderboard`)
      .then(res => res.json())
      .then(data => data.leaders),

  addToLeaderboard: result => fetch(`${baseUrl}/leaderboard`, { method: "POST", body: JSON.stringify(result) }),
};
