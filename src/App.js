import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import MatchList from "./MatchList";
import "./App.css";

const queryClient = new QueryClient();

const fetchMatches = async () => {
  const { data } = await axios.get(
    "https://app.ftoyd.com/fronttemp-service/fronttemp"
  );
  return data;
};

const App = () => {
  const { data, error, isLoading, refetch } = useQuery("matches", fetchMatches);

  return (
    <div className="app-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="trecker_txt">Match Tracker</h1>
        <button className="refresh-button" onClick={refetch}>
          Обновить <img src="../img/Refresh.png" alt="" />
        </button>
      </div>
      <div className="match-list">
        <MatchList
          matches={data?.data?.matches || []}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

const WrappedApp = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

export default WrappedApp;
