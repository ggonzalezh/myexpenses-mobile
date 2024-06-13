import { Expense } from '../model/Expense.ts'

export interface GetExpensesRepository {
  getExpenses: () => Promise<Expense[]>
}
