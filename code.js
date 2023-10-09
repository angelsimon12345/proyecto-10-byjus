var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bbe0cff5-7104-4b5a-9a15-0daa8fcc3d72","7c08afa0-db2f-4676-8280-8ae992ce43b2","afc1191f-fbbc-42ab-a1f8-6afbc2c93339","1961fdb5-26ae-4596-b3fa-84b08842f11b","38fb15b2-ecb6-4a65-b72e-9f1f05b255f9"],"propsByKey":{"bbe0cff5-7104-4b5a-9a15-0daa8fcc3d72":{"name":"cars_1","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":1,"looping":true,"frameDelay":12,"version":"5yKXS6pVqOnb.cPNb36vti1tw3xgrINo","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":133},"rootRelativePath":"assets/bbe0cff5-7104-4b5a-9a15-0daa8fcc3d72.png"},"7c08afa0-db2f-4676-8280-8ae992ce43b2":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"afc1191f-fbbc-42ab-a1f8-6afbc2c93339":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"1961fdb5-26ae-4596-b3fa-84b08842f11b":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"38fb15b2-ecb6-4a65-b72e-9f1f05b255f9":{"name":"kidportrait_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JGw3x8mqIDdntLjBneM5sF1rRaODdxDs/category_faces/kidportrait_09.png","frameSize":{"x":298,"y":366},"frameCount":1,"looping":true,"frameDelay":2,"version":"JGw3x8mqIDdntLjBneM5sF1rRaODdxDs","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":298,"y":366},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JGw3x8mqIDdntLjBneM5sF1rRaODdxDs/category_faces/kidportrait_09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 3;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var stategame = "serve";

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
  
  
  
  
  
 

function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  if (stategame == "serve") {
    textSize(15);
    text("bienvenido, presiona espacio para comenzar", 30, 200);
    car1.setAnimation("cars_1");
    car1.scale = 0.1;
    car2.setAnimation("car_yellow_1");
    car2.scale = 0.1;
    car3.setAnimation("car_red_1");
    car3.scale = 0.1;
    car4.setAnimation("car_green_1");
    car4.scale = 0.1;
    if (keyDown("space")) {
      car1.velocityY = 8;
      car3.velocityY = -8;
      car2.velocityY = 8;
      car4.velocityY = -8;
      stategame = "play";
    }
  }
  if (stategame == "play") {
    if(keyDown("right")){
      sam.x = sam.x + 2;
    }
    if(keyDown("left")){
      sam.x = sam.x - 2;
    } else {
      car1.bounceOff(boundary1);
      car1.bounceOff(boundary2);
      car2.bounceOff(boundary1);
      car2.bounceOff(boundary2);
      car3.bounceOff(boundary1);
      car3.bounceOff(boundary2);
      car4.bounceOff(boundary1);
      car4.bounceOff(boundary2);
    }
    if(
       sam.isTouching(car1)||
       sam.isTouching(car2)||
       sam.isTouching(car3)||
       sam.isTouching(car4))
    {
       sam.x = 20;
       sam.y = 190;
       life = life - 1;
    }
    if (life == 0 || sam.x > 345) {
      stategame = "end";
    }
  }
  if (stategame == "end") {
    car1.destroy();
    car2.destroy();
    car3.destroy();
    car4.destroy();
    if (life == 0) {
      text("perdiste,vuelve a intentarlo", 80, 200);
    }
    if (sam.x > 345) {
      text("!!GANASTE!!", 100, 200);
    }
  }
  
  
 
  
  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
