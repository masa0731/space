let width = window.innerWidth;
let height = window.innerHeight;
let renderer;
let scene;

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

let camera;
let ambientLight;


init();
animate();

function init() {

  //レンダラー
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000);

  //シーン
  scene = new THREE.Scene();

  //カメラ
  camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, 200);

  //環境光源
  ambientLight = new THREE.AmbientLight(0xcccccc);
  scene.add(ambientLight);
  // const testlight = new THREE.AmbientLight(0xFFFFFF, 1.0);
  // scene.add(testlight);

  

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
    moon.position.set(29, 0, 0);
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
  
  // ------------------------------Star

  const starTexture = this.loader.load('images/star.png');
    const starsGeometry = new THREE.Geometry();
    for (var i = 0; i < 50000; i++) {
      var star = new THREE.Vector3();
      star.x = THREE.Math.randFloatSpread(2000);
      star.y = THREE.Math.randFloatSpread(2000);
      star.z = THREE.Math.randFloatSpread(2000);
      starsGeometry.vertices.push(star);
    }
    const starsMaterial = new THREE.PointsMaterial({
      map: starTexture,
      size: 5,
      transparent: true,
    });
    starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(this.starField);

  // ------------------------------
}

function animate(){
  requestAnimationFrame( animate );

  let controls = new THREE.OrbitControls(camera,renderer.domElement);
  // controls.target.set( 0, 0, 0 );
  // controls.autoRotate = true;
  controls.minDistance = 50;
  controls.maxDistance = 1000;
  controls.enableDamping = true;
  controls.dampingFactor = .001;
  controls.zoomSpeed = .005;
  controls.update();

  render();
}

function render(){

  // ------------------------------自転

  // sanple
  // sun.rotation.y += THREE.Math.degToRad(0.2);
  // mercury.rotation.y += THREE.Math.degToRad(0.5);
  // venus.rotation.y -= THREE.Math.degToRad(0.01);
  // earth.rotation.y += THREE.Math.degToRad(5);
  // mars.rotation.y += THREE.Math.degToRad(1);
  // jupiter.rotation.y += THREE.Math.degToRad(2);
  // saturn.rotation.y -= THREE.Math.degToRad(2);
  // uranus.rotation.x += THREE.Math.degToRad(1.5);
  // neptune.rotation.y += THREE.Math.degToRad(1.5);
  // pluto.rotation.y += THREE.Math.degToRad(0);

  // 1y = 1m
  // sun.rotation.y += THREE.Math.degToRad(1.4);
  // mercury.rotation.y += THREE.Math.degToRad(3.5);
  // venus.rotation.y -= THREE.Math.degToRad(0.07);
  // earth.rotation.y += THREE.Math.degToRad(35);
  // mars.rotation.y += THREE.Math.degToRad(7);
  // jupiter.rotation.y += THREE.Math.degToRad(14);
  // saturn.rotation.y -= THREE.Math.degToRad(14);
  // uranus.rotation.x += THREE.Math.degToRad(10.5);
  // neptune.rotation.y += THREE.Math.degToRad(10.5);
  // pluto.rotation.y += THREE.Math.degToRad(0);

  // 1y = 1h
  sun.rotation.y += THREE.Math.degToRad(.23);
  mercury.rotation.y += THREE.Math.degToRad(.06);
  venus.rotation.y -= THREE.Math.degToRad(0.001);
  earth.rotation.y += THREE.Math.degToRad(.58);
  moon.rotation.y += THREE.Math.degToRad(.65);
  mars.rotation.y += THREE.Math.degToRad(.12);
  jupiter.rotation.y += THREE.Math.degToRad(.23);
  saturn.rotation.y -= THREE.Math.degToRad(.23);
  uranus.rotation.x += THREE.Math.degToRad(.18);
  neptune.rotation.y += THREE.Math.degToRad(.18);
  pluto.rotation.y += THREE.Math.degToRad(0);


  // ------------------------------公転

  // ------------------------------Mercury

  // const mercuryT = Date.now() / 2376;
  const mercuryT = Date.now() / 142560;
  const mercuryR = 19;
  const mercurylX = mercuryR * Math.cos(mercuryT);
  const mercurylZ = mercuryR * Math.sin(mercuryT);
  const mercurylY = Math.sin(mercuryT / 3.0);
  mercury.position.set(mercurylX, mercurylY, mercurylZ);

  // ------------------------------Venus

  // const venusT = Date.now() / 6075;
  const venusT = Date.now() / 364500;
  const venusR = 24;
  const venuslX = venusR * Math.cos(venusT);
  const venuslZ = venusR * Math.sin(venusT);
  const venuslY = Math.sin(venusT / 3.0);
  venus.position.set(venuslX, venuslY, venuslZ);

  // ------------------------------Earth

  // const earthT = Date.now() / 9855;
  const earthT = Date.now() / 591300;
  const earthR = 28;
  const earthlX = earthR * Math.cos(earthT);
  const earthlZ = earthR * Math.sin(earthT);
  const earthlY = Math.sin(earthT / 3.0);
  earth.position.set(earthlX, earthlY, earthlZ);

  // ------------------------------Moon

  // const moonT = Date.now() / 9855;
  const moonT = Date.now() / 591300;
  const moonR = 30;
  const moonlX = moonR * Math.cos(moonT);
  const moonlZ = moonR * Math.sin(moonT);
  const moonlY = Math.sin(moonT / 3.0);
  moon.position.set(moonlX, moonlY, moonlZ);

  // ------------------------------Mars

  // const marsT = Date.now() / 18549;
  const marsT = Date.now() / 1112940;
  const marsR = 36;
  const marslX = marsR * Math.cos(marsT);
  const marslZ = marsR * Math.sin(marsT);
  const marslY = Math.sin(marsT / 3.0);
  mars.position.set(marslX, marslY, marslZ);

  // ------------------------------Jupiter

  // const jupiterT = Date.now() / 116910;
  const jupiterT = Date.now() / 7014600;
  const jupiterR = 91;
  const jupiterlX = jupiterR * Math.cos(jupiterT);
  const jupiterlZ = jupiterR * Math.sin(jupiterT);
  const jupiterlY = Math.sin(jupiterT / 3.0);
  jupiter.position.set(jupiterlX, jupiterlY, jupiterlZ);

   // ------------------------------Saturn

  //  const saturnT = Date.now() / 290304;
   const saturnT = Date.now() / 17418240;
   const saturnR = 156;
   const saturnlX = saturnR * Math.cos(saturnT);
   const saturnlZ = saturnR * Math.sin(saturnT);
   const saturnlY = Math.sin(saturnT / 3.0);
   saturn.position.set(saturnlX, saturnlY, saturnlZ);

  // ------------------------------Uranus

  // const uranusT = Date.now() / 828009;
  const uranusT = Date.now() / 49680540;
  const uranusR = 301;
  const uranuslX = uranusR * Math.cos(uranusT);
  const uranuslZ = uranusR * Math.sin(uranusT);
  const uranuslY = Math.sin(uranusT / 3.0);
  uranus.position.set(uranuslX, uranuslY, uranuslZ);

  // ------------------------------Neptune

  // const neptuneT = Date.now() / 1623807;
  const neptuneT = Date.now() / 97428420;
  const neptuneR = 463;
  const neptunelX = neptuneR * Math.cos(neptuneT);
  const neptunelZ = neptuneR * Math.sin(neptuneT);
  const neptunelY = Math.sin(neptuneT / 3.0);
  neptune.position.set(neptunelX, neptunelY, neptunelZ);

  // ------------------------------Pluto

  // const plutoT = Date.now() / 2444040;
  const plutoT = Date.now() / 146642400;
  const plutoR = 603;
  const plutolX = plutoR * Math.cos(plutoT);
  const plutolZ = plutoR * Math.sin(plutoT);
  const plutolY = Math.sin(plutoT / 3.0);
  pluto.position.set(plutolX, plutolY, plutolZ);

  
  renderer.render(scene, camera);
}