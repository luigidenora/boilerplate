import { Scene as SceneBase, Mesh, BoxGeometry, MeshBasicMaterial } from 'three';
import { Main, OrthographicCamera } from '@ag-three/interaction';

class Scene extends SceneBase {
  constructor() {
    super();
    this.add(
      new OrthographicCamera(5).translateZ(10),
      new Mesh(new BoxGeometry(1), new MeshBasicMaterial({ color: 0xffff00 }))
    );
  }
}

new Main({ scenes: [new Scene()] } as any);
