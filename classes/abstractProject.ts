// Inheritance
export default abstract class Project {
  projectName: string = 'Default';
  abstract changeName(name: string): void;
}
