class scene2 extends Phaser.Scene {

  constructor(){super({key:"scene2"});

  this.__tekrar_toggle = 0;

}



  create(){

    setTimeout(() => {


      this.__tekrar_toggle = 1;

    }, 2000);

    this.add.text(config.width/2,config.height/2,"Çarptın", {font:"40px Georgia self"});

    this.input.on("pointerdown",function(){



      if (this.__tekrar_toggle == 1){

        this.__tekrar_toggle = 0;

     this.scene.start("scene1");
    }
  }, this);



//    console.log("scene 2");


  }



}
