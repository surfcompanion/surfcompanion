function companion(name, companion) {
	console.log(`Companion ${name} added`);

	if (typeof companion == "function") {
		console.log(`Companion ${name} executed`);
		companion();
	}

	throw new Error(`Unknow companion type.`);
}
