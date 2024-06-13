import { GetExpensesRepository } from '../repository/GetExpensesRepository.ts'
import { Expense } from '../model/Expense.ts'

export class GetExpensesUseCase {
  constructor(private readonly getExpensesRepository: GetExpensesRepository) {}

  async execute(): Promise<Expense[]> {
    return this.getExpensesRepository.getExpenses()
  }
}
