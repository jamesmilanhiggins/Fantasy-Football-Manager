import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { ListMemberComponent }   from './list-member/list-member.component';
import { MemberDetailComponent }   from './member-detail/member-detail.component';
import { AdminComponent }   from './admin/admin.component';
import { AnnouncementComponent }   from './announcement/announcement.component';



const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
   {
     path: 'about',
     component: AboutComponent
   },
   {
    path: 'list-member',
    component: ListMemberComponent
    },
    {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'announcements',
    component: AnnouncementComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
