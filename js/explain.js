// let width = window.innerWidth;
// let height = window.innerHeight;
// let renderer;
// let scene;

// let sun;
// let mercury;
// let venus;
// let earth;
// let moon;
// let mars;
// let jupiter;
// let saturn;
// let uranus;
// let neptune;
// let pluto;

// let sunDistance = 80;

// let sunPosition;
// let mercuryPosition;
// let venusPosition;
// let earthPosition;
// let moonPosition;
// let marsPosition;
// let jupiterPosition;
// let saturnPosition;
// let uranusPosition;
// let neptunePosition;
// let plutoPosition;

// let oneDay;

// let controls;
// let camera;
// let ambientLight;


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
  camera.position.set(0, 0, 550);

  // ------------------------------OrbitControls
  controls = new THREE.OrbitControls(camera,renderer.domElement);
  controls.minDistance = 150;
  controls.maxDistance = 900;
  controls.enableDamping = true;
  controls.dampingFactor = 0.2;
  controls.zoomSpeed = 0.3;

  // ------------------------------環境光源
  ambientLight = new THREE.AmbientLight(0xffffff);
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
    sun.position.set( -580, 0, 0);
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
      new THREE.SphereGeometry(20, 32, 32),
      new THREE.MeshPhongMaterial({
        map: mercuryTextuer
      })
    );
    mercury.position.set(sunDistance - 500, 0, 0);
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
      new THREE.SphereGeometry(40, 32, 32),
      new THREE.MeshPhongMaterial({
        map: venusTextuer
      })
    );
    venus.position.set(sunDistance - 410, 0, 0);
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
      new THREE.SphereGeometry(40, 32, 32),
      new THREE.MeshPhongMaterial({
        map: earthTextuer
      })
    );
    earth.position.set(sunDistance - 300, 0, 0);
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
      new THREE.SphereGeometry(10, 32, 32),
      new THREE.MeshPhongMaterial({
        map: moonTextuer
      })
    );
    moon.position.set(sunDistance - 230, 0, 0);
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
      new THREE.SphereGeometry(30, 32, 32),
      new THREE.MeshPhongMaterial({
        map: marsTextuer
      })
    );
    mars.position.set(sunDistance -150, 0, 0);
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
      new THREE.SphereGeometry(70, 32, 32),
      new THREE.MeshPhongMaterial({
        map: jupiterTextuer
      })
    );
    jupiter.position.set(sunDistance , 0, 0);
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
      new THREE.SphereGeometry(60, 32, 32),
      new THREE.MeshPhongMaterial({
        map: saturnTextuer
      })
    );
    saturn.position.set(sunDistance + 170, 0, 0);
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
      new THREE.SphereGeometry(50, 32, 32),
      new THREE.MeshPhongMaterial({
        map: uranusTextuer
      })
    );
    uranus.position.set(sunDistance + 320, 0, 0);
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
      new THREE.SphereGeometry(50, 32, 32),
      new THREE.MeshPhongMaterial({
        map: neptuneTextuer
      })
    );
    neptune.position.set(sunDistance + 470, 0, 0);
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
      new THREE.SphereGeometry(10, 32, 32),
      new THREE.MeshPhongMaterial({
        map: plutoTextuer
      })
    );
    pluto.position.set(sunDistance + 620, 0, 0);
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
  earth.rotation.y += THREE.Math.degToRad(.24 / oneDay);
  moon.rotation.y += THREE.Math.degToRad(.22 / oneDay);
  mars.rotation.y += THREE.Math.degToRad(.24 / oneDay);
  jupiter.rotation.y += THREE.Math.degToRad(.24 / oneDay);
  saturn.rotation.y -= THREE.Math.degToRad(.24 / oneDay);
  uranus.rotation.x += THREE.Math.degToRad(.24 / oneDay);
  neptune.rotation.y += THREE.Math.degToRad(.24 / oneDay);
  pluto.rotation.y += THREE.Math.degToRad(.24 / oneDay);

  renderer.render(scene, camera);
}

// ------------------------------click

// let mouse = new THREE.Vector2();
// canvas.addEventListener('mousemove', handleMouseMove);

// function handleMouseMove(event) {
//   const element = event.currentTarget;
//   // canvas要素上のXY座標
//   const x = event.clientX - element.offsetLeft;
//   const y = event.clientY - element.offsetTop;
//   // canvas要素の幅・高さ
//   const w = element.offsetWidth;
//   const h = element.offsetHeight;

//   // -1〜+1の範囲で現在のマウス座標を登録する
//   mouse.x = ( x / w ) * 2 - 1;
//   mouse.y = -( y / h ) * 2 + 1;
// }

// tick();
// // 毎フレーム時に実行されるループイベントです
// function tick() {

//   // レイキャスト = マウス位置からまっすぐに伸びる光線ベクトルを生成
//   raycaster.setFromCamera(mouse, camera);

//   // その光線とぶつかったオブジェクトを得る
//   const intersects = raycaster.intersectObjects(scene.children);

//   if(intersects.length > 0){
//     // ぶつかったオブジェクトに対してなんかする
//     mesh.material.color.setHex(0xff0000);
//   }else {
//     // それ以外は元の色にする
//     mesh.material.color.setHex(0xffffff);
//   }

//   // レンダリング
//   renderer.render(scene, camera);
//   requestAnimationFrame(tick);
// }