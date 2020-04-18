import * as vscode from 'vscode';
import { getHtmlFromFocusFile } from './contentbuilder';
import { PreviewProviderDef } from '../../previewProviderDef';
import { matchPathEnd } from '../../util/pathmatcher';

async function showFocusTreePreview(document: vscode.TextDocument, panel: vscode.WebviewPanel) {
    panel.webview.html = await getHtmlFromFocusFile(document.getText(), document.uri, panel.webview);
}

async function updateFocusTreePreview(document: vscode.TextDocument, panel: vscode.WebviewPanel) {
    panel.webview.html = await getHtmlFromFocusFile(document.getText(), document.uri, panel.webview);
}

function canPreviewFocusTree(document: vscode.TextDocument) {
    const uri = document.uri;
    if (matchPathEnd(uri.path, ['common', 'national_focus', '*'])) {
        return true;
    }

    const text = document.getText();
    return /(focus_tree|shared_focus)\s*=\s*{/.test(text);
}

export const focusTreePreviewDef: PreviewProviderDef = {
    type: 'focustree',
    show: showFocusTreePreview,
    update: updateFocusTreePreview,
    condition: canPreviewFocusTree,
};
