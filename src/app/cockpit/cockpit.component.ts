import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  newServerName = '';
  newServerContent = '';

  @Output() serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();

  onAddServer(nameServer : HTMLInputElement){
    console.log(nameServer.value)
    this.serverCreated.emit({
      serverName: nameServer.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameServer:HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameServer.value,
      serverContent: this.newServerContent
    });
  }

}
