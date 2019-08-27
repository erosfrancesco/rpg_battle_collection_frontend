import { Component, OnInit } from '@angular/core';
import { Ai } from '../ais.model'
import { AisService } from '../ais.service';


@Component({
  selector: 'app-ai-detail',
  templateUrl: './ai-detail.component.html',
  styleUrls: ['./ai-detail.component.css']
})
export class AiDetailComponent implements OnInit {
	constructor(public service: AisService) { 
	}

	ai: Ai

	/*
	*/
	ngOnInit() {
	}

	onItemFetched(item: Ai) {
		this.ai = new Ai().deserialize(item)
	}

	checkItemProperties() :boolean {
		return Boolean(this.ai && this.ai.properties)
	}

	checkItemProperty(prop :string) :boolean {
		return Boolean(this.ai && this.ai.properties && this.ai.properties[prop])
	}
}
