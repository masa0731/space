let width = window.innerWidth;
let height = window.innerHeight;
let renderer;
let scene;

let mercury;
let venus;
let earth;
let mars;
let jupiter;
let saturn;
let uranus;
let neptune;
let pluto;

let camera;
let pointLight;
let ambientLight;

// window.addEventListener('load', init);
init();
animate();

function init() {

  // レンダラーを作成
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.setClearColor(0x707070);

  // シーンを作成
  scene = new THREE.Scene();

  // カメラを作成
  camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, 50);
  // camera.position.set(0, 0, 600);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  
  // 点光源を作成
  // new THREE.PointLight(色, 光の強さ, 距離, 光の減衰率)
  pointLlight = new THREE.PointLight(0xffffff, 1, 50, 1);
  scene.add(pointLlight);
  pointLlight.position.set(0, 0, 0);

  //環境光源
  ambientLight = new THREE.AmbientLight(0xcccccc);
  scene.add(ambientLight);
  // const testlight = new THREE.AmbientLight(0xFFFFFF, 1.0);
  // scene.add(testlight);

  // 照明を可視化するヘルパー
  const lightHelper = new THREE.PointLightHelper(pointLlight);
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
  loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/82mou/sandbox/master/universe/img/mercury.jpg', function(mercuryTextuer) {
    createMercury(mercuryTextuer);
    render();
  });

  function createMercury(mercuryTextuer){
    mercury = new THREE.Mesh(
      new THREE.SphereGeometry(.4, 32, 32),
      new THREE.MeshPhongMaterial({
        map: mercuryTextuer
      })
    );
    mercury.position.set(6, 0, 0);
    scene.add(mercury);
  }

  // ------------------------------Venus
  loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/82mou/sandbox/master/universe/img/venus.jpg', function(venusTextuer) {
    createVenus(venusTextuer);
    render();
  });

  function createVenus(venusTextuer){
    venus = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.MeshPhongMaterial({
        map: venusTextuer
      })
    );
    venus.position.set(11, 0, 0);
    scene.add(venus);
  }

  // ------------------------------Earth
  loader = new THREE.TextureLoader();
  // https://masadesu.net/space/images/earth.png
  loader.load('https://raw.githubusercontent.com/82mou/sandbox/master/universe/img/earth.png', function(earthTextuer) {
    createEarth(earthTextuer);
    render();
  });

  function createEarth(earthTextuer){
    earth = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.MeshPhongMaterial({
        map: earthTextuer
      })
    );
    earth.position.set(15, 0, 0);
    scene.add(earth);
  }

  // ------------------------------Mars
  loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/82mou/sandbox/master/universe/img/mars.jpg', function(marsTextuer) {
    createMars(marsTextuer);
    render();
  });

  function createMars(marsTextuer){
    mars = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 32, 32),
      new THREE.MeshPhongMaterial({
        map: marsTextuer
      })
    );
    mars.position.set(23, 0, 0);
    scene.add(mars);
  }
  
  // ------------------------------Jupiter
  loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/82mou/sandbox/master/universe/img/jupiter.jpg', function(jupiterTextuer) {
    createJupiter(jupiterTextuer);
    render();
  });

  function createJupiter(jupiterTextuer){
    jupiter = new THREE.Mesh(
      new THREE.SphereGeometry(14, 32, 32),
      new THREE.MeshPhongMaterial({
        map: jupiterTextuer
      })
    );
    jupiter.position.set(78, 0, 0);
    scene.add(jupiter);
  }
  
  // ------------------------------Saturn
  loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/82mou/sandbox/master/universe/img/saturn.jpg', function(saturnTextuer) {
    createSaturn(saturnTextuer);
    render();
  });

  function createSaturn(saturnTextuer){
    saturn = new THREE.Mesh(
      new THREE.SphereGeometry(11, 32, 32),
      new THREE.MeshPhongMaterial({
        map: saturnTextuer
      })
    );
    saturn.position.set(143, 0, 0);
    scene.add(saturn);
  }
  
  // ------------------------------Uranus
  loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/82mou/sandbox/master/universe/img/ouranos.jpg', function(uranusTextuer) {
    createUranus(uranusTextuer);
    render();
  });

  function createUranus(uranusTextuer){
    uranus = new THREE.Mesh(
      new THREE.SphereGeometry(5, 32, 32),
      new THREE.MeshPhongMaterial({
        map: uranusTextuer
      })
    );
    uranus.position.set(288, 0, 0);
    scene.add(uranus);
  }
  
  // ------------------------------Neptune
  loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/82mou/sandbox/master/universe/img/neptune.jpg', function(neptuneTextuer) {
    createNeptune(neptuneTextuer);
    render();
  });

  function createNeptune(neptuneTextuer){
    neptune = new THREE.Mesh(
      new THREE.SphereGeometry(5, 32, 32),
      new THREE.MeshPhongMaterial({
        map: neptuneTextuer
      })
    );
    neptune.position.set(450, 0, 0);
    scene.add(neptune);
  }
  
  // ------------------------------Pluto
  loader = new THREE.TextureLoader();
  loader.load('https://raw.githubusercontent.com/82mou/sandbox/master/universe/img/pluto.jpg', function(plutoTextuer) {
    createPluto(plutoTextuer);
    render();
  });

  function createPluto(plutoTextuer){
    pluto = new THREE.Mesh(
      new THREE.SphereGeometry(.2, 32, 32),
      new THREE.MeshPhongMaterial({
        map: plutoTextuer
      })
    );
    pluto.position.set(590, 0, 0);
    scene.add(pluto);
  }
  
  // ------------------------------
  // ------------------------------
}

function animate(){
  requestAnimationFrame( animate );
  render();
}

function render(){
  earth.rotation.y += 0.01;
  renderer.render(scene, camera);
}
