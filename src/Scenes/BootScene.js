import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', 'assets/loading.gif');
  }

  create () {
    this.scene.start('Preloader');
  }
};
