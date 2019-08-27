import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../../actors.model';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DialogLabelComponent } from 'src/app/shared/dialogs/dialog-label/dialog-label.component';


@Component({
  selector: 'app-actor-events',
  templateUrl: './actor-events.component.html',
  styleUrls: ['./actor-events.component.css']
})
export class ActorEventsComponent implements OnInit {

  	constructor(public dialog: MatDialog) { 
	}

	@Input() parent: Actor

	selectedEvent :any
	selectedEventName :string

	/*
		Component 
	*/
	ngOnInit() {
	}

	// ngOnDestroy() {
	// }

	checkIfParentHasProperties() :boolean {
		return Boolean(this.parent && this.parent.properties)
	}

	checkIfHasEvents() :boolean {
		return Boolean(this.checkIfParentHasProperties() && this.parent.properties.events)
	}

	stopPropagation(event) {
    	event.stopPropagation();
  	}


	/*
		Dialog
	*/
	openNewEventDialog() :MatDialogRef<DialogLabelComponent> {
		return this.dialog.open(DialogLabelComponent, { data: {label: "new_event"} });
	}


	// /*
	// 	Actor Events
	// */
	// computeEventsList() {
	// 	const events = Object.keys(this.actor.properties.events)
	// 	const indx = events.indexOf("custom");
	// 	if (indx > -1) {
	// 		events.splice(indx, 1)
	// 	}
	// 	return events
	// }

	addCustomEvent() {
		this.openNewEventDialog().afterClosed().subscribe(label => {
			if (!label) {
				return
			}

			this.parent.properties.events.custom.push({
				name: label, 
				value: {
					params: "scene, options, callback",
					body: "callback();"
				}
			});
	    });
	}

	selectEvent(e, name) {
		if (!name) {
			this.selectedEvent = e.value
			this.selectedEventName = e.name
		} else {
			this.selectedEvent = e
			this.selectedEventName = name
		}
	}

	removeCustomElement(e) {
		if (this.selectedEvent === e.value) {
			this.selectedEvent = null
		}

		const indx = this.parent.properties.events.custom.indexOf(e);
		if (indx > -1) {
			this.parent.properties.events.custom.splice(indx, 1);
		}
	}

}
