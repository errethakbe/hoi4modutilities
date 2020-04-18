import * as vscode from 'vscode';
import { previewManager } from './previewmanager';
import { contextContainer } from './context';
import { localize } from './util/i18n';
import { PreviewCommand, PreviewWebviewType } from './constants';

export function activate(context: vscode.ExtensionContext) {
    contextContainer.current = context;
    context.subscriptions.push({
        dispose() {
            contextContainer.current = null;
        }
    });

    context.subscriptions.push(vscode.commands.registerCommand(PreviewCommand, previewManager.showPreview, previewManager));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument(previewManager.onCloseTextDocument, previewManager));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(previewManager.onChangeTextDocument, previewManager));
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(previewManager.onChangeActiveTextEditor, previewManager));
	context.subscriptions.push(vscode.window.registerWebviewPanelSerializer(PreviewWebviewType, previewManager));
	
	// Trigger context value setting
	previewManager.onChangeActiveTextEditor(vscode.window.activeTextEditor);
	
	// For debug
    context.subscriptions.push(vscode.commands.registerCommand('hoi4modutilities.test', () => {
        console.log(localize('hoi4modutilities.testout', 'asd {0} {1}', 1, 'haha'));
    }));
}

export function deactivate() {}
