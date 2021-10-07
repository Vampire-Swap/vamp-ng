import { PairQuote } from "./PairQuote";
import { TokenDayData } from "./TokenDayData";

export interface Token {
    id: string;
    pairQuote: Array<PairQuote>;
    totalSupply: string;
    tokenDayData: Array<TokenDayData>;
}

export interface TokenResponse {
    token: Token;
}