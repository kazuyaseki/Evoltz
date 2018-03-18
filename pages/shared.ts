import { database } from "../plugins/firebase";

export async function init({ store, redirect, error }) {
  try {
    const projectsRes = await database.ref("/projects").once("value");
    const doneTodosRes = await database.ref("/doneTodos").once("value");

    const projects = projectsRes !== null ? projectsRes.val() || [] : [];
    const doneTodos = doneTodosRes !== null ? doneTodosRes.val() || [] : [];

    store.commit("init", projects, doneTodos);
  } catch (err) {
    redirect("/error");
  }
}
