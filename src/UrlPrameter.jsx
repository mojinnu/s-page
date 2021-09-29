import { useLocation, useParams } from "react-router";

export const UrlPrameter = () => {
  const { id } = useParams();
  const { serach } = useLocation();
  const query = new URLSearchParams(serach);
  return (
    <div>
      <h1>UrlPrameterページです</h1>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
