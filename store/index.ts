import { Types } from "../interface/types";
import { database } from "../plugins/firebase";


export const mutations = {
  init(state: Types.State, projects: Types.Project[]) {
    state.projects = projects;
  },
  addProject(state: Types.State, project: Types.Project) {
    state.projects = [...state.projects, project];
  }
};

export const actions = {
  async addProject({ commit, state }, name: string) {
    const proj: Types.Project = projFactory(name);
    const err = await database.ref("/projects").set([...state.projects, proj]);

    if (!err) {
      commit("addProject", proj);
    }
  }
};

const projFactory: (name: string) => Types.Project = name => {
  return { name, color: "red", todos: [] };
};
