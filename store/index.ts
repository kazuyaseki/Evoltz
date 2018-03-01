export const state = () => ({});

export const mutations = {};

export const mutations = {
  init(state, projects: Types.Project[]) {
    state.projects = projects;
  },
  add(state, project: Types.Project) {
    console.log("aa");
    state.projects = [...state.projects, project];
    database.ref("/projects").set(state.projects);
  }
};

export const actions = {};
