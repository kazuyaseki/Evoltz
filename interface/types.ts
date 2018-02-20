export namespace Types {
  export interface Project {
    name: string;
    color: string;
    todos: { name: string; memo: string; completed: boolean }[];
  }
}
