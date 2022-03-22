interface StakedAccount {
    img: any,
    alt: string,
    name: string,
    link: string,
    stakedAmountUsd: number | string,
    stakedAmountSol: number | string,
    earningsUsd: number | string,
    earningsSol: number | string,
    status: string,
    accountId: string,
    date: string
}

export default StakedAccount