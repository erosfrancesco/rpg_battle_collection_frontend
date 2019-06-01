import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-kr_theme';

import 'ace-builds/src-noconflict/ext-language_tools';


const THEME = 'ace/theme/kr_theme'; 
const LANG = 'ace/mode/javascript';


@Component({
  selector: 'app-ace-editor-wrapper',
  templateUrl: './ace-editor-wrapper.component.html',
  styleUrls: ['./ace-editor-wrapper.component.css']
})
export class AceEditorWrapperComponent implements OnInit {

  	@ViewChild('codeEditor') codeEditorElmRef: ElementRef;
    private codeEditor: ace.Ace.Editor;

    @Input() code :string
    @Input() params :string


    onCodeSaved(codeString) {
      console.log("code saved", codeString)
    }

    constructor() { }

    ngOnInit () {
    	ace.require('ace/ext/language_tools');

      const element = this.codeEditorElmRef.nativeElement;

      this.codeEditor = ace.edit(element, this.computeEditorOptions());
      this.codeEditor.setTheme(THEME);
      this.codeEditor.getSession().setMode(LANG);
      this.codeEditor.setShowFoldWidgets(true);
      this.codeEditor.setValue(this.code, 1);

      this.codeEditor.commands.addCommand({
        name: 'saveFile',
        bindKey: {
          win: 'Ctrl-S',
          mac: 'Command-S'
        },
        exec: (editor, args) => {
          this.getCode()
          //this.onCodeSaved(this.code)
        }
      });
    }

    private computeEditorOptions() :Partial<ace.Ace.EditorOptions> {
      const editorOptions: Partial<ace.Ace.EditorOptions> = {
          highlightActiveLine: true,
          minLines: 10,
          maxLines: Infinity
      };

      return Object.assign(editorOptions, { enableBasicAutocompletion: true });
    }

    getCode() :string {
	    this.code = this.codeEditor.getValue();
      console.log("ok,. ocode")
      return this.code
	  }


}