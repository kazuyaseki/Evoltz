export namespace Types {
  export interface State {
    projects: Project[];
    doneTodos: DoneTodos;
    selectedProjectIndex: number;
  }

  export interface Project {
    id: string;
    name: string;
    color: string;
    todos: Todo[];
  }

  export interface Todo {
    id: string;
    name: string;
    memo: string;
    completed: boolean;
  }

  export interface DoneTodos {
    [key: string]: {
      projectId: string;
      todoIds: string[];
    }[];
  }
}
