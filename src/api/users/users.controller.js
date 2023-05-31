import { users } from "../../data.js";

export const createUserController = (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;
    const user = {
      id: users.length + 1,
      name,
      lastname,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    users.push(user);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllUsersController = (req, res) => {
  try {
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserByIdController = (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUserController = (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastname, email, password } = req.body;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.password = password;
    user.updatedAt = new Date();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUserController = (req, res) => {
  try {
    const { id } = req.params;
    const index = users.findIndex((user) => user.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
