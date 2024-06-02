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

export default {
  GetAllBudgets,
  CreateBudget,
  GetBudgetSpend,
  GEtBudgetById,
  CreateExpense,
};
