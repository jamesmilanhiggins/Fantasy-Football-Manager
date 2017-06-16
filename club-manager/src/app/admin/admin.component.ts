import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

   ngOnInit() {
   }

   submitForm(firstName: string, lastName: string, userName: string, yearsInLeague: number, lastYearRanking: number, projectionRanking: number, location: string, leagueChampion: number, role: string, jobTitle: string) {
     var newMember: Member = new Member(firstName, lastName, userName, yearsInLeague, lastYearRanking, projectionRanking, location, leagueChampion, role, jobTitle);
     this.memberService.addMember(newMember);
   }

 }
