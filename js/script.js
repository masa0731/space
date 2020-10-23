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

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 10, 100);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  

  // 点光源を作成
  // new THREE.PointLight(色, 光の強さ, 距離, 光の減衰率)
  const light = new THREE.PointLight(0xffffff, 1, 50, 1);
  scene.add(light);
  light.position.set(0, 0, 0);

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
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({color: 0xccccff})
  );
  mercury.position.set(10, 0, 0);
  scene.add(mercury);

  // ------------------------------Venus

  // ------------------------------Earth

  // ------------------------------Mars
  
  // ------------------------------Jupiter
  
  // ------------------------------Saturn
  
  // ------------------------------Uranus
  
  // ------------------------------Neptune
  
  // ------------------------------Pluto
  
  // ------------------------------
  
  // ------------------------------



  // ------------------------------
  renderer.render(scene, camera);
}