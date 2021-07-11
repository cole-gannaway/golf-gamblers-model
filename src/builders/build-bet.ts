import { BetsLeaderBoard, BetSummary } from '../leaderboard';

export function setBetResultToBetsLeaderboard(
  leaderboard: Partial<BetsLeaderBoard>,
  userId: string,
  betId: string,
  result: number
) {
  // set if not exists
  if (!leaderboard.betSummary) leaderboard.betSummary = {};
  const betSummary: BetSummary = leaderboard.betSummary;
  // set if not exists
  if (!betSummary[userId])
    betSummary[userId] = {
      betsAndResults: {},
    };
  const userBetSummary = betSummary[userId];
  userBetSummary.betsAndResults[betId] = result;
}
