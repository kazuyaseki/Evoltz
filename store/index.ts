import { Types } from "../interface/types";
import { database } from "../plugins/firebase";

export const state: () => Types.State = () => ({
  projects: [],
  selectedProjectIndex: 0
});

export const mutations = {
  init(state: Types.State, projects: Types.Project[]) {
    state.projects = projects;
  },
  addProject(state: Types.State, project: Types.Project) {
    state.projects = [...state.projects, project];
  },
  deleteProject(state: Types.State, index: number) {
    state.projects.splice(index, 1);
  },
  selectProject(state: Types.State, index: number) {
    state.selectedProjectIndex = index;
  },
  addTodo(state: Types.State, name: string) {
    addNewTodo(state.projects[state.selectedProjectIndex], name);
  },
  toggleTodoStatus(state: Types.State, index: string) {
    let todo = state.projects[state.selectedProjectIndex].todos[index];
    todo.completed = !todo.completed;
  }
};

export const actions = {
  async addProject({ commit, state }, name: string) {
    const proj: Types.Project = projFactory(name);
    const err = await updateProjectsOnFirebase([...state.projects, proj]);

    if (!err) {
      commit("addProject", proj);
    }
  },
  async deleteProject({ commit, state }, index: number) {
    const copiedProjects = state.projects.map(proj => ({ ...proj }));
    copiedProjects.splice(index, 1);
    const err = await updateProjectsOnFirebase(copiedProjects);

    if (!err) {
      commit("deleteProject", index);
    }
  },
  async addTodo({ commit, state }, name: string) {
    const copiedProjects = state.projects.map(proj => ({
      ...JSON.parse(JSON.stringify(proj))
    }));
    addNewTodo(copiedProjects[state.selectedProjectIndex], name);
    const err = await updateProjectsOnFirebase(copiedProjects);

    if (!err) {
      commit("addTodo", name);
    }
  },
  async toggleTodoStatus({ commit, state }, index: number) {
    const copiedProjects = state.projects.map(proj => ({
      ...JSON.parse(JSON.stringify(proj))
    }));
    let todo = copiedProjects[state.selectedProjectIndex].todos[index];
    todo.completed = !todo.completed;
    const err = await updateProjectsOnFirebase(copiedProjects);

    if (!err) {
      commit("toggleTodoStatus", index);
    }
  }
};

export const getters = {
  selectedProject(state: Types.State) {
    if (state.projects[state.selectedProjectIndex]) {
      return state.projects[state.selectedProjectIndex];
    }
    return [];
  }
};

const updateProjectsOnFirebase = (newProjects: Types.Project[]) => {
  return database.ref("/projects").set(newProjects);
};

const addNewTodo = (selectedProject: Types.Project, todoName: string) => {
  if (selectedProject.todos) {
    selectedProject.todos.push(todoFactory(todoName));
  } else {
    selectedProject.todos = [todoFactory(todoName)];
  }
};

const projFactory: (name: string) => Types.Project = name => {
  return { name, color: "red", todos: [] };
};

const todoFactory = (name: string): Types.Todo => {
  return {
    name,
    memo: "",
    completed: false
  };
};
