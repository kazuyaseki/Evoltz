import { Types } from "../interface/types";
import { database } from "../plugins/firebase";


export const mutations = {
  init(state, projects: Types.Project[]) {
    state.projects = projects;
  },
  addProject(state, project: Types.Project) {
    state.projects = [...state.projects, project];
  }
};

export const actions = {
  async addProject({ commit, state }, project) {
    const err = await database
      .ref("/projects")
      .set([...state.projects, project]);

    if (!err) {
      commit("addProject", project);
    }
  }
};
