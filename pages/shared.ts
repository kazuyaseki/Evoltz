import { database } from "../plugins/firebase";

export function init({ store, redirect, error }) {
  try {
    const res = database.ref("/projects").once("value", res => {
      if (res !== null) {
        const projects = res.val() || [];
        store.commit("init", projects);
      }
    });
  } catch (err) {
    redirect("/error");
  }
}
