import { database } from "../plugins/firebase";
import * as MUTATION_TYPES from "./mutation-types";
import { Types } from "../interface/types";
import uuidv4 from "uuid/v4";

export const state: () => Types.State = () => ({
  projects: [],
  doneTodos: {},
  selectedProjectIndex: 0
});

export const mutations = {
  [MUTATION_TYPES.INIT](
    state: Types.State,
    projects: Types.Project[],
    doneTodos: Types.DoneTodos
  ) {
    state.projects = projects;
    state.doneTodos = doneTodos;
  },
  [MUTATION_TYPES.ADD_PROJECT](state: Types.State, project: Types.Project) {
    state.projects = [...state.projects, project];
  },
  [MUTATION_TYPES.DELETE_PROJECT](state: Types.State, index: number) {
    state.projects.splice(index, 1);
  },
  [MUTATION_TYPES.SELECT_PROJECT](state: Types.State, index: number) {
    state.selectedProjectIndex = index;
  },
  [MUTATION_TYPES.ADD_TODO](state: Types.State, name: string) {
    addNewTodo(state.projects[state.selectedProjectIndex], name);
  },
  [MUTATION_TYPES.TOGGLE_TODO](state: Types.State, index: string) {
    let todo = state.projects[state.selectedProjectIndex].todos[index];
    todo.completed = !todo.completed;
  }
};

export const actions = {
  async [MUTATION_TYPES.ADD_PROJECT]({ commit, state }, name: string) {
    const proj: Types.Project = projFactory(name);
    const err = await updateProjectsOnFirebase([...state.projects, proj]);

    if (!err) {
      commit(MUTATION_TYPES.ADD_PROJECT, proj);
    }
  },
  async [MUTATION_TYPES.DELETE_PROJECT]({ commit, state }, index: number) {
    const copiedProjects = state.projects.map(proj => ({ ...proj }));
    copiedProjects.splice(index, 1);
    const err = await updateProjectsOnFirebase(copiedProjects);

    if (!err) {
      commit(MUTATION_TYPES.DELETE_PROJECT, index);
    }
  },
  async [MUTATION_TYPES.ADD_TODO]({ commit, state }, name: string) {
    const copiedProjects = state.projects.map(proj => ({
      ...JSON.parse(JSON.stringify(proj))
    }));
    addNewTodo(copiedProjects[state.selectedProjectIndex], name);
    const err = await updateProjectsOnFirebase(copiedProjects);

    if (!err) {
      commit(MUTATION_TYPES.ADD_TODO, name);
    }
  },
  async [MUTATION_TYPES.TOGGLE_TODO]({ commit, state }, index: number) {
    const copiedProjects = state.projects.map(proj => ({
      ...JSON.parse(JSON.stringify(proj))
    }));
    let todo = copiedProjects[state.selectedProjectIndex].todos[index];
    todo.completed = !todo.completed;
    const err = await updateProjectsOnFirebase(copiedProjects);

    if (!err) {
      commit(MUTATION_TYPES.TOGGLE_TODO, index);
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
  return { id: uuidv4(), name, color: "red", todos: [] };
};

const todoFactory = (name: string): Types.Todo => {
  return {
    id: uuidv4(),
    name,
    memo: "",
    completed: false
  };
};
