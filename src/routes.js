import user from "./api/users/index.js";

const routes = (app) => {
  app.use("/api/user", user);
};

export default routes;
