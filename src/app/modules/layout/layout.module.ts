import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSiteAppComponent } from './components/layout-site-app/layout-site-app.component';
import { LayoutSitePcComponent } from './components/layout-site-pc/layout-site-pc.component';
import { LayoutEntryPcComponent } from './components/layout-entry-pc/layout-entry-pc.component';
import { LayoutEntryAppComponent } from './components/layout-entry-app/layout-entry-app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutSiteAppComponent,
    LayoutSitePcComponent,
    LayoutEntryPcComponent,
    LayoutEntryAppComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
