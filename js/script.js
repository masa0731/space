// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {
  // サイズを指定
  const width = window.innerWidth;
  const height = window.innerHeight;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.setClearColor(0x707070);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, 100);
  // camera.position.set(0, 0, 600);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  

  // 点光源を作成
  // new THREE.PointLight(色, 光の強さ, 距離, 光の減衰率)
  const light = new THREE.PointLight(0xffffff, 1, 50, 1);
  scene.add(light);
  light.position.set(0, 0, 0);

  //環境光源
  const ambient = new THREE.AmbientLight(0x222222);
  scene.add(ambient);
  // const testlight = new THREE.AmbientLight(0xFFFFFF, 1.0);
  // scene.add(testlight);

  // 照明を可視化するヘルパー
  const lightHelper = new THREE.PointLightHelper(light);
  scene.add(lightHelper);

  // tick();

  // 毎フレーム時に実行されるループイベントです
  // function tick() {

  //   照明の位置を更新
  //   const t = Date.now() / 500;
  //   const r = 10.0;
  //   const lx = r * Math.cos(t);
  //   const lz = r * Math.sin(t);
  //   const ly = 6.0 + 5.0 * Math.sin(t / 3.0);
  //   light.lookAt(new THREE.Vector3(0, 0, 0));

  //   requestAnimationFrame(tick);
  // }

  // ------------------------------Mercury
  
  // オブジェクトを作成
  const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(.4, 32, 32),
    new THREE.MeshStandardMaterial({color: 0xccccff})
  );
  mercury.position.set(6, 0, 0);
  scene.add(mercury);

  // ------------------------------Venus

  const venus = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 32, 32),
    new THREE.MeshStandardMaterial({color: 0xccccff})
  );
  venus.position.set(11, 0, 0);
  scene.add(venus);

  // ------------------------------Earth

  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 32, 32),
    new THREE.MeshStandardMaterial({color: 0xccccff})
  );
  earth.position.set(15, 0, 0);
  scene.add(earth);

  const loader = new THREE.TextureLoader();
  loader.load("../images/earth.jpg", function(texture) {
    createEarth(texture);
    render();
  });

  // ------------------------------Mars

  const mars = new THREE.Mesh(
    new THREE.SphereGeometry(.6, 32, 32),
    new THREE.MeshStandardMaterial({color: 0xccccff})
  );
  mars.position.set(23, 0, 0);
  scene.add(mars);
  
  // ------------------------------Jupiter

  const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(14, 32, 32),
    new THREE.MeshStandardMaterial({color: 0xccccff})
  );
  jupiter.position.set(78, 0, 0);
  scene.add(jupiter);
  
  // ------------------------------Saturn

  const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(11, 32, 32),
    new THREE.MeshStandardMaterial({color: 0xccccff})
  );
  saturn.position.set(143, 0, 0);
  scene.add(saturn);
  
  // ------------------------------Uranus

  const uranus = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshStandardMaterial({color: 0xccccff})
  );
  uranus.position.set(288, 0, 0);
  scene.add(uranus);
  
  // ------------------------------Neptune

  const neptune = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshStandardMaterial({color: 0xccccff})
  );
  neptune.position.set(450, 0, 0);
  scene.add(neptune);
  
  // ------------------------------Pluto

  const pluto = new THREE.Mesh(
    new THREE.SphereGeometry(.2, 32, 32),
    new THREE.MeshStandardMaterial({color: 0xccccff})
  );
  pluto.position.set(590, 0, 0);
  scene.add(pluto);
  
  // ------------------------------
  // ------------------------------
  renderer.render(scene, camera);
}