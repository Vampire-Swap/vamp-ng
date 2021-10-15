export interface Pool {
    stakeTokenAddress: string; // retrieve data about stakedToken (wallet quantity, approved or not, etc.)
    poolContractAddress: string; // retrieve depositFee
    rewardTokenAddress: string; // retrieve price for APR
    stakeTokenName: string;
    stakeTokenSymbol: string;
    rewardTokenName: string;
    rewardTokenSymbol: string;
    rewardTokenLogo: string;
    depositFee?: string;
    apr?: string;
    approved?: boolean;
    pendingReward?: string;
    depositedTokens?: string;
    walletTokens?: string;
}