let width = window.innerWidth;
let height = window.innerHeight;
let renderer;
let scene;

let sun;
let mercury;
let venus;
let earth;
let moon;
let mars;
let jupiter;
let saturn;
let uranus;
let neptune;
let pluto;

let sunDistance = 139;

let sunPosition;
let mercuryPosition;
let venusPosition;
let earthPosition;
let moonPosition;
let marsPosition;
let jupiterPosition;
let saturnPosition;
let uranusPosition;
let neptunePosition;
let plutoPosition;

let oneDay;

let controls;
let camera;
let ambientLight;

init();
animate();

function init() {

  // ------------------------------レンダラー
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000);

  // ------------------------------シーン
  scene = new THREE.Scene();

  // ------------------------------カメラ
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth /window.innerHeight, 1, 2000 );
  camera.position.set(0, 0, 500);

  // ------------------------------OrbitControls
  controls = new THREE.OrbitControls(camera,renderer.domElement);
  controls.minDistance = 150;
  controls.maxDistance = 900;
  controls.enableDamping = true;
  controls.dampingFactor = 0.2;
  controls.zoomSpeed = 0.3;

  // ------------------------------環境光源
  ambientLight = new THREE.AmbientLight(0xcccccc);
  scene.add(ambientLight);

  // ------------------------------Sun
  loader = new THREE.TextureLoader();
  loader.load('images/sun.jpg', function(sunTextuer) {
    createSun(sunTextuer);
    render();
  });

  function createSun(sunTextuer){
    sun = new THREE.Mesh(
      new THREE.SphereGeometry(sunDistance, 32, 32),
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
    mercury.position.set(sunDistance + 6, 0, 0);
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
    venus.position.set(sunDistance + 11, 0, 0);
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
    earth.position.set(sunDistance + 15, 0, 0);
    scene.add(earth);
  }

  // ------------------------------Moon
  loader = new THREE.TextureLoader();
  loader.load('images/moon.jpg', function(moonTextuer) {
    createMoon(moonTextuer);
    render();
  });

  function createMoon(moonTextuer){
    moon = new THREE.Mesh(
      new THREE.SphereGeometry(.3, 32, 32),
      new THREE.MeshPhongMaterial({
        map: moonTextuer
      })
    );
    moon.position.set(sunDistance + 17, 0, 0);
    scene.add(moon);
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
    mars.position.set(sunDistance + 23, 0, 0);
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
    jupiter.position.set(sunDistance + 78, 0, 0);
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
    saturn.position.set(sunDistance + 143, 0, 0);
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
    uranus.position.set(sunDistance + 288, 0, 0);
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
    neptune.position.set(sunDistance + 450, 0, 0);
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
    pluto.position.set(sunDistance + 590, 0, 0);
    scene.add(pluto);
  }
  
  // ------------------------------Star

  const starTexture = this.loader.load('images/star.png');
    const starsGeometry = new THREE.Geometry();
    for (var i = 0; i < 5000; i++) {
      var star = new THREE.Vector3();
      star.x = THREE.Math.randFloatSpread(1000);
      star.y = THREE.Math.randFloatSpread(1000);
      star.z = THREE.Math.randFloatSpread(1000);
      starsGeometry.vertices.push(star);
    }
    const starsMaterial = new THREE.PointsMaterial({
      map: starTexture,
      size: 2,
      transparent: true,
    });
    starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(this.starField);

  // ------------------------------

}

function animate(){
  
  requestAnimationFrame( animate );

  render();
}

function render(){

  // ------------------------------自転

  oneDay = 1;
  // 1d = 1s
  sun.rotation.y += THREE.Math.degToRad(.24 / oneDay);
  mercury.rotation.y += THREE.Math.degToRad(.103 / oneDay);
  venus.rotation.y -= THREE.Math.degToRad(0.024 / oneDay);
  earth.rotation.y += THREE.Math.degToRad(6 / oneDay);
  moon.rotation.y += THREE.Math.degToRad(.22 / oneDay);
  mars.rotation.y += THREE.Math.degToRad(6 / oneDay);
  jupiter.rotation.y += THREE.Math.degToRad(14.63 / oneDay);
  saturn.rotation.y -= THREE.Math.degToRad(14.63 / oneDay);
  uranus.rotation.x += THREE.Math.degToRad(8.57 / oneDay);
  neptune.rotation.y += THREE.Math.degToRad(9 / oneDay);
  pluto.rotation.y += THREE.Math.degToRad(0 / oneDay);

  // ------------------------------公転

  // ------------------------------Mercury

  const mercuryT = Date.now() / 14000;
  const mercuryR = sunDistance + 6;
  const mercurylX = mercuryR * Math.cos(mercuryT);
  const mercurylZ = mercuryR * Math.sin(mercuryT);
  const mercurylY = Math.sin(mercuryT / 3.0);
  mercury.position.set(mercurylX, mercurylY, mercurylZ);

  // ------------------------------Venus

  const venusT = Date.now() / 36000;
  const venusR = sunDistance + 11;
  const venuslX = venusR * Math.cos(venusT);
  const venuslZ = venusR * Math.sin(venusT);
  const venuslY = Math.sin(venusT / 3.0);
  venus.position.set(venuslX, venuslY, venuslZ);

  // ------------------------------Earth

  const earthT = Date.now() / 59000;
  const earthR = sunDistance + 15;
  const earthlX = earthR * Math.cos(earthT);
  const earthlZ = earthR * Math.sin(earthT);
  const earthlY = Math.sin(earthT / 3.0);
  earth.position.set(earthlX, earthlY, earthlZ);

  // ------------------------------Moon

  const moonT = Date.now() / 59000;
  const moonR = sunDistance + 17;
  const moonlX = moonR * Math.cos(moonT);
  const moonlZ = moonR * Math.sin(moonT);
  const moonlY = Math.sin(moonT / 3.0);
  moon.position.set(moonlX, moonlY, moonlZ);

  // ------------------------------Mars

  const marsT = Date.now() / 111000;
  const marsR = sunDistance + 23;
  const marslX = marsR * Math.cos(marsT);
  const marslZ = marsR * Math.sin(marsT);
  const marslY = Math.sin(marsT / 3.0);
  mars.position.set(marslX, marslY, marslZ);

  // ------------------------------Jupiter

  const jupiterT = Date.now() / 701000;
  const jupiterR = sunDistance + 78;
  const jupiterlX = jupiterR * Math.cos(jupiterT);
  const jupiterlZ = jupiterR * Math.sin(jupiterT);
  const jupiterlY = Math.sin(jupiterT / 3.0);
  jupiter.position.set(jupiterlX, jupiterlY, jupiterlZ);

   // ------------------------------Saturn

   const saturnT = Date.now() / 1741000;
   const saturnR = sunDistance + 143;
   const saturnlX = saturnR * Math.cos(saturnT);
   const saturnlZ = saturnR * Math.sin(saturnT);
   const saturnlY = Math.sin(saturnT / 3.0);
   saturn.position.set(saturnlX, saturnlY, saturnlZ);

  // ------------------------------Uranus

  const uranusT = Date.now() / 4968000;
  const uranusR = sunDistance + 288;
  const uranuslX = uranusR * Math.cos(uranusT);
  const uranuslZ = uranusR * Math.sin(uranusT);
  const uranuslY = Math.sin(uranusT / 3.0);
  uranus.position.set(uranuslX, uranuslY, uranuslZ);

  // ------------------------------Neptune

  const neptuneT = Date.now() / 9742000;
  const neptuneR = sunDistance + 450;
  const neptunelX = neptuneR * Math.cos(neptuneT);
  const neptunelZ = neptuneR * Math.sin(neptuneT);
  const neptunelY = Math.sin(neptuneT / 3.0);
  neptune.position.set(neptunelX, neptunelY, neptunelZ);

  // ------------------------------Pluto

  const plutoT = Date.now() / 14664000;
  const plutoR = 590;
  const plutolX = plutoR * Math.cos(plutoT);
  const plutolZ = plutoR * Math.sin(plutoT);
  const plutolY = Math.sin(plutoT / 3.0);
  pluto.position.set(plutolX, plutolY, plutolZ);

  renderer.render(scene, camera);

  controls.autoRotate = true;
  controls.autoRotateSpeed = -.5;

  controls.update();
}