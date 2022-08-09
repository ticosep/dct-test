import { MoveEntity } from "./utils/MoveEntity";

const entity = new Entity();
entity.addComponent(new BoxShape());
entity.addComponent(new Transform({ position: new Vector3(5, 1, 5) }));
engine.addEntity(entity);

const moveEntity = new MoveEntity(entity);
engine.addSystem(moveEntity);