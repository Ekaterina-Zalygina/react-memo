import { useParams, useMatch } from "react-router-dom";

import { Cards } from "../../components/Cards/Cards";

export function GamePage() {
  const { pairsCount } = useParams();
  const isEasy = useMatch("/easy-game/:pairsCount");

  return (
    <>
      <Cards pairsCount={parseInt(pairsCount, 10)} previewSeconds={5} isEasy={isEasy} />
    </>
  );
}
