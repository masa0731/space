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
let controls;
// let pointLight;
let ambientLight;

let x = 0;
let z = 50;

init();
animate();

function init() {

  // レンダラーを作成
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000);

  // シーンを作成
  scene = new THREE.Scene();

  // カメラを作成
  camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, 250);
  // camera.position.set(0, 0, 600);
  // controls = new THREE.OrbitControls(camera);

  
  // 点光源を作成
  // new THREE.PointLight(色, 光の強さ, 距離, 光の減衰率)
  // pointLlight = new THREE.PointLight(0xffffff, 1, 50, 1);
  // scene.add(pointLlight);
  // pointLlight.position.set(0, 0, 0);
  
 // 照明を可視化するヘルパー
  // const lightHelper = new THREE.PointLightHelper(pointLlight);
  // scene.add(lightHelper);

  //環境光源
  ambientLight = new THREE.AmbientLight(0xcccccc);
  scene.add(ambientLight);
  // const testlight = new THREE.AmbientLight(0xFFFFFF, 1.0);
  // scene.add(testlight);

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

  // ------------------------------Sun
  loader = new THREE.TextureLoader();
  loader.load('images/sun.jpg', function(sunTextuer) {
    createSun(sunTextuer);
    render();
  });

  function createSun(sunTextuer){
    sun = new THREE.Mesh(
      new THREE.SphereGeometry(13, 32, 32),
      new THREE.MeshPhongMaterial({
        map: sunTextuer
      })
    );
    sun.position.set(0, 0, 0);
    scene.add(sun);
  }

  // ------------------------------Mercury
  loader = new THREE.TextureLoader();
  loader.load('images/mercury.jpg', function(mercuryTextuer) {
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
    mercury.position.set(19, 0, 0);
    scene.add(mercury);
  }

  // ------------------------------Venus
  loader = new THREE.TextureLoader();
  loader.load('images/venus.jpg', function(venusTextuer) {
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
    venus.position.set(24, 0, 0);
    scene.add(venus);
  }

  // ------------------------------Earth
  loader = new THREE.TextureLoader();
  loader.load('images/earth.jpg', function(earthTextuer) {
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
    earth.position.set(28, 0, 0);
    scene.add(earth);
  }

  // ------------------------------Mars
  loader = new THREE.TextureLoader();
  loader.load('images/mars.jpg', function(marsTextuer) {
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
    mars.position.set(36, 0, 0);
    scene.add(mars);
  }
  
  // ------------------------------Jupiter
  loader = new THREE.TextureLoader();
  loader.load('images/jupiter.jpg', function(jupiterTextuer) {
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
    jupiter.position.set(91, 0, 0);
    scene.add(jupiter);
  }
  
  // ------------------------------Saturn
  loader = new THREE.TextureLoader();
  loader.load('images/saturn.jpg', function(saturnTextuer) {
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
    saturn.position.set(156, 0, 0);
    scene.add(saturn);
  }
  
  // ------------------------------Uranus
  loader = new THREE.TextureLoader();
  loader.load('images/ouranos.jpg', function(uranusTextuer) {
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
    uranus.position.set(301, 0, 0);
    scene.add(uranus);
  }
  
  // ------------------------------Neptune
  loader = new THREE.TextureLoader();
  loader.load('images/neptune.jpg', function(neptuneTextuer) {
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
    neptune.position.set(463, 0, 0);
    scene.add(neptune);
  }
  
  // ------------------------------Pluto
  loader = new THREE.TextureLoader();
  loader.load('images/pluto.jpg', function(plutoTextuer) {
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
    pluto.position.set(603, 0, 0);
    scene.add(pluto);
  }
  
  // ------------------------------

  loader = new THREE.TextureLoader();
  loader.load('star.png', function(starTextuer) {
    createStar(starTextuer);
    render();
  });

  function createStar(starTextuer){
    const geometry = new THREE.Geometry();

  for (let i = 0; i < 50000; i++) {
    geometry.vertices.push(new THREE.Vector3(
      3000 * (Math.random() - 0.5),
      3000 * (Math.random() - 0.5),
      3000 * (Math.random() - 0.5),
    ));
  }

  // マテリアルを作成
  const material = new THREE.PointsMaterial({
    map: starTextuer,
    size: 2,
    color: 0xFFFFFF,
  });
  
  const mesh = new THREE.Points(geometry, material);
  scene.add(mesh);
  }

  

  // ------------------------------

  // ------------------------------
}

function animate(){
  requestAnimationFrame( animate );
  render();
}

function render(){
  // requestAnimationFrame(() => { this.render(); });

  // ------------------------------自転
  sun.rotation.y += THREE.Math.degToRad(0.2);
  mercury.rotation.y += THREE.Math.degToRad(0.5);
  venus.rotation.y -= THREE.Math.degToRad(0.01);
  earth.rotation.y += THREE.Math.degToRad(1);
  mars.rotation.y += THREE.Math.degToRad(1);
  jupiter.rotation.y += THREE.Math.degToRad(2);
  saturn.rotation.y -= THREE.Math.degToRad(2);
  uranus.rotation.x += THREE.Math.degToRad(1.5);
  neptune.rotation.y += THREE.Math.degToRad(1.5);
  pluto.rotation.y += THREE.Math.degToRad(0);

  // controls.update();
  renderer.render(scene, camera);
}