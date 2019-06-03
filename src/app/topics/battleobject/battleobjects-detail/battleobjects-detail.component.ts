import { Component, OnInit } from '@angular/core';
import { BattleObjects } from '../../../services/battleobjects.model'
import { AppComponent } from '../../../app.component'
import { ActivatedRoute } from '@angular/router'

import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/ambiance';

@Component({
  selector: 'app-battleobjects-detail',
  templateUrl: './battleobjects-detail.component.html',
  styleUrls: ['./battleobjects-detail.component.css']
})
export class BattleobjectsDetailComponent implements OnInit {
	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 
		appComponent.fabButtonIcon = "save"
		appComponent.fabButtonAction = () => this.updateItemChanges();
		appComponent.showSpinner = true
	}

	private sub: any;
	battleobject: BattleObjects
	originalBattleObject: BattleObjects
	service = this.appComponent.objectsService

	//animationService = this.appComponent.animationsService

	//newAnimation: EncodedAnimationFunction = new EncodedAnimationFunction()

	/*
	*/
	fetchItemById(id, onFetched: Function) {
		this.service.getItemById(id, (err, item) => {
			if (err) {
				console.error(err)
				return
			}

			/*
			console.log( battleObject.properties.animations, this.animationService.getItemById(battleObject.properties.animations) )

			this.animationService.getItemById(battleObject.properties.animations).then(animations => {
				onFetched(battleObject);
			}).catch(err => console.error(err))
			*/
			console.log(item.deserialize(item))
			this.battleobject = item.deserialize(item)
			onFetched(this.battleobject);
		})
	}

	updateItemChanges() {
		const updates = {}
		this.service.updateItemById(this.battleobject.id, this.battleobject, battleObject => console.log())
	}

	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItemById(params['id'], battleobject => {

			//this.originalBattleObject = battleobject
			this.appComponent.navTitle = battleobject.label
			
			setTimeout(() => {
				this.appComponent.showSpinner = false
			}, 200);

			this.setupNewItemForAnimation()
		}) );
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}


	/*
	*/
	checkItemProperties() :boolean {
		return Boolean(this.battleobject && this.battleobject.properties)
	}

	checkItemProperty(prop :string) :boolean {
		return Boolean(this.battleobject && this.battleobject.properties && this.battleobject.properties[prop])
	}

	addNewAnimation() {
		//this.battleobject.properties.animations.push(this.newAnimation)
		this.setupNewItemForAnimation()
	}

	setupNewItemForAnimation() {
		//this.newAnimation.label = "new_animation_label"
		//this.newAnimation.body = ""
	}

}
