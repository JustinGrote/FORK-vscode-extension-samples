import { ExtensionContext, window } from "vscode";

export function activate(context: ExtensionContext) {
	const outputChannel = window.createOutputChannel("OutputChannel");
	const logOutputChannel = window.createOutputChannel("LogOutputChannel", {log: true});
	outputChannel.hide();
	logOutputChannel.hide();
}
