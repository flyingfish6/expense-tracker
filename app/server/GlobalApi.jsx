const { default: axios } = require("axios");

const GetAllBudgets = async () => await axios.get("/api/budgets");

const CreateBudget = async (name, amount, icon, createdBy) =>
  await axios.post(
    `/api/budgets?name=${name}&amount=${amount}&icon=${icon}&createdBy=${createdBy}`
  );

const GetBudgetSpend = async () => await axios.get("/api/budgetspend");
export default {
  GetAllBudgets,
  CreateBudget,
  GetBudgetSpend,
};
