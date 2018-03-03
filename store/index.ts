import { Types } from "../interface/types";
import { database } from "../plugins/firebase";


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
  }
};

export const actions = {
  async addProject({ commit, state }, name: string) {
    const proj: Types.Project = projFactory(name);
    const err = await database.ref("/projects").set([...state.projects, proj]);

    if (!err) {
      commit("addProject", proj);
    }
  },
  async deleteProject({ commit, state }, index: number) {
    const copiedProjects = state.projects.map(proj => ({ ...proj }));
    copiedProjects.splice(index, 1);
    const err = await database.ref("/projects").set(copiedProjects);

    if (!err) {
      commit("deleteProject", index);
    }
  }
};

const projFactory: (name: string) => Types.Project = name => {
  return { name, color: "red", todos: [] };
};
