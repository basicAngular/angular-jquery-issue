import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from '../../area/admin/blogs/blog-list/blog-list.component';
import { BlogDetailsComponent } from '../../area/admin/blogs/blog-details/blog-details.component';
import { CreateBlogComponent } from '../../area/admin/blogs/create-blog/create-blog.component';
import { EnterprisesListComponent } from '../../area/admin/enterprises/enterprises-list/enterprises-list.component';
import { EnterprisesDetailsComponent } from '../../area/admin/enterprises/enterprises-details/enterprises-details.component';
import { OfficersListComponent } from '../../area/admin/officers/officers-list/officers-list.component';
import { OfficersDetailsComponent } from '../../area/admin/officers/officers-details/officers-details.component';
import { MonthlyReportComponent } from '../../area/admin/reports/monthly-report/monthly-report.component';
import { WeeklyReportComponent } from '../../area/admin/reports/weekly-report/weekly-report.component';
import { YearlyReportComponent } from '../../area/admin/reports/yearly-report/yearly-report.component';
import { AlertNotificationComponent } from '../../area/admin/settings/alert-notification/alert-notification.component';
import { BookingSettingComponent } from '../../area/admin/settings/booking-setting/booking-setting.component';
import { UserListComponent } from './user/user-list/user-list.component';

// admin routing goes here
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserListComponent,
    BlogListComponent,
    BlogDetailsComponent,
    CreateBlogComponent,
    EnterprisesListComponent,
    EnterprisesDetailsComponent,
    OfficersListComponent,
    OfficersDetailsComponent,
    MonthlyReportComponent,
    WeeklyReportComponent,
    YearlyReportComponent,
    AlertNotificationComponent,
    BookingSettingComponent,
  ]
})
export class AdminModule { }
