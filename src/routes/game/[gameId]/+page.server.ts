import type { Actions, PageServerLoad } from './$types';
import { getGameData } from '$lib/models/GameData';

export const load: PageServerLoad = async ({ params, platform, depends }) => {
  depends('data:game');
  return await getGameData(platform!, params.gameId);
};

export const actions: Actions = {
  default: async ({ platform, params, request }) => {
    const formData = await request.formData();
    const kv = platform!.env.KV;
    const data = await getGameData(platform!, params.gameId);
    const pos = parseInt(formData.get("pos")?.toString() || "-1");
    if (pos >= 0 && (data.winner || data.board[pos])) {
      console.log(`Invalid move ${pos} for ${params.gameId}:`, data);
      return;
    }

    data.board[pos] = data.turn;
    data.turn = data.turn === "X" ? "O" : "X";
    data.winner = calculateWinner(data.board);
    await kv.put(`ttt/game/${params.gameId}`, JSON.stringify(data));
    console.log(`Current data for move ${pos} in ${params.gameId}:`, data);
  }
};

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}
