$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(310,620,100,110, "grey"); 
createPlatform(490,520,100,110, "grey"); 
createPlatform(700,520,100,110, "grey"); 
createPlatform(910,520,100,110, "grey"); 
createPlatform(1500,120,100,110, "grey"); 
createPlatform(1100,620,100,110, "grey"); 
createPlatform(1100,390,100,110, "grey"); 
createPlatform(300,390,100,110, "grey");  
createPlatform(700,240,100,110, "grey"); 
createPlatform(900,290,100,110, "grey");
createPlatform(500,290,100,110, "grey");
createPlatform(1300,290,100,110, "greey");
createPlatform(100,290,100,110, "grey");
createPlatform(1100,160,100,110, "grey");
createPlatform(300,160,100,110, "grey");



    // TODO 3 - Create Collectables
createCollectable("steve", 130, 250);
createCollectable("diamond", 300, 360);
createCollectable("steve", 720, 500);
createCollectable("diamond", 1150, 350);
createCollectable("steve", 1150, 560);
createCollectable("diamond", 600, 200);


    
    // TODO 4 - Create Cannons
createCannon("top", 800, 1700);
createCannon("right", 580, 1950);
createCannon("bottom", 550, 1800);
createCannon("left", 200, 2200);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
