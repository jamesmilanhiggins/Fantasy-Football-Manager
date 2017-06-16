import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers(){
    return this.members;
  }

  getMemberById(memberId: string){
    return this.database.object('members/' + memberId);
  }
  addMember(newMember: Member) {
  this.members.push(newMember);
  }

  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({firstName: localUpdatedMember.firstName,
                                lastName: localUpdatedMember.lastName,
                                userName: localUpdatedMember.userName,
                                yearsInLeague: localUpdatedMember.yearsInLeague,
                                lastYearRanking: localUpdatedMember.lastYearRanking,
                                projectionRanking: localUpdatedMember.projectionRanking,
                                location: localUpdatedMember.location,
                                leagueChampion: localUpdatedMember.leagueChampion,
                                role: localUpdatedMember.role,
                                jobTitle: localUpdatedMember.jobTitle,
                                image: localUpdatedMember.image});
  }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }


}
