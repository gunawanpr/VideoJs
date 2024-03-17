import { Component, OnInit } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-js',
  templateUrl: './video-js.component.html',
  styleUrls: ['./video-js.component.css']
})
export class VideoJsComponent implements OnInit {
  player: any
  isPlay = "Play"
  iconPlay = "pi pi-play"

  ngOnInit() {
    this.player = videojs('video-app');
  }
  
  play() {
    if(this.isPlay == "Play") {
      this.player.play()
      this.onPlay()
    }else{
      this.player.pause()
      this.onPause()
    }
  }

  restart() {
    this.player.currentTime(0)
    this.player.play()
    this.onPlay()
  }

  stop() {
    this.player.currentTime(0)
    this.player.pause()
    this.onPause()
  }

  onPause() {
    this.isPlay = "Play"
    this.iconPlay = "pi pi-play"
  }

  onPlay() {
    this.isPlay = "Pause"
    this.iconPlay = "pi pi-pause"
  }

  fastForward() {
    const currentTime = this.player.currentTime()
    this.player.currentTime(currentTime + 10)
  }

  fastBackward(){
    const currentTime = this.player.currentTime()
    this.player.currentTime(currentTime - 10)
  }
}
