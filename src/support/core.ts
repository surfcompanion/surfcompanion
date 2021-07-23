/**
 *
 * @param name
 * @param companion
 * @returns
 */
export function companion(name: string, companion: any): void {
	console.log(`Companion ${name} added`);

	if (typeof companion == "function") {
		console.log(`Companion ${name} executed`);
		companion();
		return;
	}

	throw new Error(`Unknow companion type "${typeof companion}"`);
}

export function copy_to_clipboard(value: any) {
	const listener = (event: ClipboardEvent) => {
		event?.clipboardData?.setData("text/plain", value);
		event?.preventDefault();
	};

	document.addEventListener("copy", listener);
	document.execCommand("copy");
	document.removeEventListener("copy", listener);
}
