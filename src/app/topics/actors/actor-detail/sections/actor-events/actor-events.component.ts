import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../../../../services/actor.model'
import { AppComponent } from '../../../../../app.component'

import { ActivatedRoute } from '@angular/router'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-actor-events',
  templateUrl: './actor-events.component.html',
  styleUrls: ['./actor-events.component.css']
})
export class ActorEventsComponent implements OnInit {

  	constructor(private route: ActivatedRoute, private appComponent: AppComponent, public dialog: MatDialog) { 
	}

	@Input() actor: Actor

	selectedEvent :any
	selectedEventName :string

	/*
		Component 
	*/
	ngOnInit() {
	}

	ngOnDestroy() {
	}

	checkIfParentHasProperties() :boolean {
		return Boolean(this.actor && this.actor.properties)
	}

	checkIfHasEvents() :boolean {
		return Boolean(this.checkIfParentHasProperties() && this.actor.properties.events)
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


	/*
		Actor Events
	*/
	computeEventsList() {
		const events = Object.keys(this.actor.properties.events)
		const indx = events.indexOf("custom");
		if (indx > -1) {
			events.splice(indx, 1)
		}
		return events
	}

	addCustomEvent() {
		this.openNewEventDialog().afterClosed().subscribe(label => {
			if (!label) {
				return
			}

			this.actor.properties.events.custom.push({
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

		const indx = this.actor.properties.events.custom.indexOf(e);
		if (indx > -1) {
			this.actor.properties.events.custom.splice(indx, 1);
		}
	}

}
