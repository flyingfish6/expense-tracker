const { default: axios } = require("axios");

const GetAllBudgets = async () => await axios.get("/api/budgets");

const CreateBudget = async (name, amount, icon, createdBy) =>
  await axios.post(
    `/api/budgets?name=${name}&amount=${amount}&icon=${icon}&createdBy=${createdBy}`
  );
export default {
  GetAllBudgets,
  CreateBudget,
};
