export namespace Types {
  export interface State {
    projects: Project[];
  }

  export interface Project {
    name: string;
    color: string;
    todos: Todo[];
  }

  export interface Todo {
    name: string;
    memo: string;
    completed: boolean;
  }
}
