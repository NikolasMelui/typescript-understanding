import Project from './abstractProject';

class ITProject extends Project {
  changeName(projectName: string): void {
    this.projectName = projectName;
  }
}

const newProject = new ITProject();
newProject.changeName('Super IT Project');
