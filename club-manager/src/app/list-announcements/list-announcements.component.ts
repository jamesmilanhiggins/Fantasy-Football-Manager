import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Announcement } from '../announcement.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list-announcements',
  templateUrl: './list-announcements.component.html',
  styleUrls: ['./list-announcements.component.css'],
  providers: [MemberService]
})
export class ListAnnouncementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
