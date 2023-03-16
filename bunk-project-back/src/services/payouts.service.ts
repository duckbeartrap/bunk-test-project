
import { PayoutsResponse, PayoutsItem, ExpensesItem } from "../interfaces";

export function settleExpenses(expenses: ExpensesItem[]): PayoutsResponse{
    const [peopleAndExpenses, totalExpense] = combineExpensesByNameAndFindTotal(expenses);
    const averageExpense = (totalExpense / Object.keys(peopleAndExpenses).length);
    const [negativeBalances, positiveBalances] = separatePositiveAndNegativeBalances(peopleAndExpenses, averageExpense);
    const transactions = findTransactionsToSettleExpenses(negativeBalances, positiveBalances);

    const result: PayoutsResponse = {
        total: totalExpense,
        equalShare: averageExpense,
        payouts: transactions
    }

    return result;
}

function combineExpensesByNameAndFindTotal(expenses): [any, number]{
    const peopleAndExpenses = {};
    let totalExpense = 0;

    expenses.forEach(person => {
        if(!peopleAndExpenses.hasOwnProperty(person.name)){
            peopleAndExpenses[person.name] = 0;
        } 
        peopleAndExpenses[person.name] += person.amount;
        totalExpense += person.amount;
    });

    return [peopleAndExpenses, totalExpense];
}

function separatePositiveAndNegativeBalances(peopleAndExpenses, meanExpense){
    const positiveBalances = [];
    const negativeBalances = [];

    for(const person in peopleAndExpenses){
        const payload = {
            name: person,
            balance: (peopleAndExpenses[person] - meanExpense)
        };
        
        if(payload.balance > 0) {
            positiveBalances.push(payload);
        } else if(payload.balance < 0) {
            negativeBalances.push(payload);
        }
    }

    return [negativeBalances, positiveBalances];
}

function findTransactionsToSettleExpenses(negativeBalances, positiveBalances): PayoutsItem[] {
    const transactions: PayoutsItem[] = [];
    
    for (const negative of negativeBalances) {
        while (negative.balance < 0) {
            const positive = positiveBalances.shift();
            const amount = Math.min(-negative.balance, positive.balance);
            const transaction: PayoutsItem = {
                owes: negative.name, 
                owed: positive.name, 
                amount: Number(amount.toFixed(2))
            }
            transactions.push(transaction);
            negative.balance = (negative.balance + amount);
            positive.balance = (positive.balance - amount);

            if (positive.balance > 0) {
                positiveBalances.push(positive);
            }
        }
    }

    return transactions;
}
