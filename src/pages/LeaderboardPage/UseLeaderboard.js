import { useEffect, useState } from "react";
import { apiProvider } from "../../api";

export function useLeaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    apiProvider.getLeaderboard().then(setLeaderboard);
  }, []);

  return leaderboard;
}
