import { Component } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-apps-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss'],
})
export class AppsMessagingComponent {
  chatOwner = data.chatsOwner
  chats = data.chats
  activeChatIndex = 0
  selectedChatData = this.chats[0]

  changeChatData(companionName) {
    this.selectedChatData = this.chats.find(function(item) {
      if (companionName === item.companionName) {
        return item
      }
    })
  }
}
