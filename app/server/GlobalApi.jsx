const { default: axios } = require("axios");

const GetAllBudgets = async () => await axios.get("/api/budgets");

const CreateBudget = async (name, amount, icon, createdBy) =>
  await axios.post(
    `/api/budgets?name=${name}&amount=${amount}&icon=${icon}&createdBy=${createdBy}`
  );

const GetBudgetSpend = async () => await axios.get("/api/budgetspend");

const GEtBudgetById = async (id) => await axios.get("/api/budgetbyid?id=" + id);

const CreateExpense = async (id, name, amount, createAt) =>
  await axios.post(
    `/api/expense?id=${id}&name=${name}&amount=${amount}&createAt=${createAt}`
  );
const GetExpenses = async (id) => await axios.get(`/api/expense?id=${id}`);

const DelExpense = async (id) => await axios.delete(`/api/expense?id=${id}`);

const DelBudget = async (id) => await axios.delete(`/api/budgets?id=${id}`);

const UpdateBudget = async (id, name, amount, icon) =>
  await axios.patch(
    `/api/budgets?id=${id}&name=${name}&amount=${amount}&icon=${icon}`
  );

const GetExpensesList = async () => await axios.get("/api/expenses");
export default {
  GetAllBudgets,
  CreateBudget,
  GetBudgetSpend,
  GEtBudgetById,
  CreateExpense,
  GetExpenses,
  DelExpense,
  DelBudget,
  UpdateBudget,
  GetExpensesList,
};
