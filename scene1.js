class scene1 extends Phaser.Scene {
  constructor(){
    super({key:"scene1"});


    this.__diger = 0;
    this.__diger_obj = "";
    this.__serit = [300, 514];
    this.__yonler = ["L", "R"];
    this.__araba = "";
    this.__diger_uc = 0;
    this.__arac_uc = 0;
    this.__tmp_say = 0;
    this.__hizlan_toggle = 1;
    this.__hiz_k = 0;
    this.__hiz_text = "Hızınız: ";
    this.__hizi = 0;
    this.__hiz_yazi_obj = "";
    this._parmak_obj = "";
    this.__hiz_say = 0;
  }

  preload(){

    this.__diger = 0;
    this.__diger_obj = "";
    this.__serit = [300, 514];
    this.__yonler = ["L", "R"];
    this.__araba = "";
    this.__diger_uc = 0;
    this.__arac_uc = 0;
    this.__tmp_say = 0;
    this.__hizlan_toggle = 1;
    this.__hiz_k = 0;
    this.__hiz_text = "Hızınız: ";
    this.__hizi = 0;
    this.__hiz_yazi_obj = "";
    this._parmak_obj = "";
    this.__hiz_say = 0;

    this.load.image("yol", "assets/yol_tile.png");
    this.load.image("araba", "assets/araba.png");
    this.load.image("diger", "assets/diger_arac.png");
    this.load.image("parmak", "assets/parmakla.png");

  }

  create(){

    this.__hiz_yazi_obj = this.add.text(0,0,"");



    this.background = this.add.tileSprite(0,0,config.width,config.height, "yol");
    this.background.setOrigin(0, 0);
    this.__araba = this.add.image(514,500,"araba");

    this.input.on("pointerdown",function(pointer){

      this.yon_al(pointer.x);
    //console.log(pointer.x);


    }, this);

    // parmnaklari goster

      this._parmak_obj = this.add.image(config.width/2, config.height/2, "parmak");

  }

  update(){

    this.__hiz_yazi_obj.destroy();

      this.__hiz_yazi_obj = this.add.text(0,0,this.__hiz_text + (this.__hizi*10) + "km/s", {font:"40px Georgia self"})


    if (this.__hizlan_toggle == 1){

      this.__hizlan_toggle = 0;

      setTimeout(() => {


        this.__hiz_say += 1;

        if (this.__hiz_say == 1) this._parmak_obj.destroy();


        this.__hizlan_toggle = 1;

        this.__hiz_k += 1;

    }, 3000);



    }

      this.background.tilePositionY -= 6;

    if (this.__diger_obj.y > 600 ) {
      this.__diger_obj.destroy();
      this.__diger  = 0;
    }



    if (this.__diger  !== 1) {

      this.__diger_obj = this.add.image(this.__serit[Phaser.Math.Between(0,1)],0-Phaser.Math.Between(100,300),"diger");
      this.__diger  = 1;


    }

    this.__diger_obj.y += 5+this.__hiz_k;
    this.__hizi = 5+this.__hiz_k;


    this.__diger_uc = this.__diger_obj.y + (234/2);
    if (this.__diger_uc > config.height-234){

      this.Carpis_bak();

    }



  }


    yon_al(pointer){
      var yon;

      if (pointer <= 400){
        yon="L";
      }

      else {
        yon = "R";

      }

      this.__araba.x = this.__serit[this.__yonler.indexOf(yon)]

    //  console.log(yon);




    }

    Carpis_bak(){

      // if both cars are in the same side

      if (this.__araba.x == this.__diger_obj.x){

        this.__arac_uc = this.__araba.y - (234/2);

        if (this.__arac_uc <= this.__diger_uc){

          this.__tmp_say++;

          this.scene.start("scene2");

        //  console.log("carpar   " + this.__tmp_say);

        }


      }

    }


}
