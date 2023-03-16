export interface PayoutsRequest {
    expenses: ExpensesItem[]
}

export interface ExpensesItem {
    name: string,
    amount: number
}

export interface PayoutsResponse {
    total: number,
    equalShare: number,
    payouts: PayoutsItem[]
}

export interface PayoutsItem {
    owes: string,
    owed: string,
    amount: number
}