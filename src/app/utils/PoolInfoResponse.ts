import { BigNumber } from "ethers";

export interface PoolInfoResponse {
    stakeToken: string;
    lastRewardTime: BigNumber;
    accVmpPerShare: BigNumber;
    totalStaked: BigNumber;
}