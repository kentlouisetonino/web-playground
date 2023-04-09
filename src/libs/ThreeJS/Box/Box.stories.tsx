import BBox from './Box';
import Scene from './Scene';

export default {
  title: 'ThreeJS/Box',
};

export function Box() {
  return (
    <Scene>
      <BBox position={[-1.2, 0, 0]} />
      <BBox position={[1.2, 0, 0]} />
    </Scene>
  );
}
