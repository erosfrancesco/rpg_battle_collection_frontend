import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../organization.service';
import { Organization } from '../organization.model';
import { Observable, Subscription } from 'rxjs';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { DialogLabelComponent } from 'src/app/shared/dialogs/dialog-label/dialog-label.component';
import { DialogConfirmComponent } from 'src/app/shared/dialogs/dialog-confirm/dialog-confirm.component';
import { ErrorMessageComponent } from 'src/app/shared/snackbars/error-message/error-message.component';
import { SuccessfulMessageComponent } from 'src/app/shared/snackbars/successful-message/successful-message.component';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {

  organizations: Observable<Organization[]>
  sub: Subscription;

  constructor(public service: OrganizationService, public dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.organizations = this.service.getItems()
    this.sub = this.organizations.subscribe()
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }




  /*
  */
  editLabel(item :Organization) {
    const sub = this.openEditDialog(item).afterClosed()
    .subscribe(name => {
      sub.unsubscribe()
      if (!name) {
        return
      }
      
      const sub2 = this.service.update(item.id, {name})
      .subscribe(() => {
        sub2.unsubscribe()
        this.snackBar.openFromComponent(SuccessfulMessageComponent, { duration: 2000 })
      }, err => {
        sub2.unsubscribe()
        this.snackBar.openFromComponent(ErrorMessageComponent, { duration: 2000 })
        console.log("** [UPDATE] error **", err)
      });
    });
  }

  deleteItem(item :Organization) :void {
    const sub = this.openConfirmDialog().afterClosed().subscribe(confirm => {
      sub.unsubscribe()
      if (!confirm) {
        return
      }

      const sub2 = this.service.delete(item.id)
      .subscribe(() => {
        sub2.unsubscribe()
        this.showSnackbar("Operation succeded")
      }, err => {
        sub2.unsubscribe()
        this.showSnackbar("Operation failed. Check your console")
        console.log("** [DELETE] error **", err)
      });
    });
  }


  /*
  */
  openEditDialog(item :Organization) :MatDialogRef<DialogLabelComponent> {
    return this.dialog.open(DialogLabelComponent, { data: {label: item.name} });
  }

  openConfirmDialog() :MatDialogRef<DialogConfirmComponent> {
    return this.dialog.open(DialogConfirmComponent, { data: {} });
  }

  /*
  */
  stopPropagation(event){
    event.stopPropagation();
  }

  computeItemUrl(item :Organization) {
    return '/organization/' + item.id
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 2000
    });
  }

}
