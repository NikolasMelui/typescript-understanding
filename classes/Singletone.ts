class Singletone {
  private static instance: Singletone;
  private constructor(public name: string) {}
  static getInstance() {
    if (!Singletone.instance) {
      Singletone.instance = new Singletone('The Only One instance');
    }
    return Singletone.instance;
  }
}

const singletone = Singletone.getInstance();
