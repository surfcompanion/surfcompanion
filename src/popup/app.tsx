import React, { useEffect, useState } from "react";
import { Component } from "react";
import YoutubeActions from "./actions/youtube.com/youtube.com";
import ActionContext from "./common/action_context";

export default function App() {
	const [current_url, set_current_url] = useState<string>("");

	useEffect(() => {
		if (!chrome.tabs) return;

		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			set_current_url(tabs[0].url || "");
		});
	}, []);

	const action_context = new ActionContext();
	action_context.url = current_url;

	const components: JSX.Element[] = [<YoutubeActions cx={action_context} />].filter((c) => !!c);

	return (
		<div>
			<h1>Surf Companion</h1>
			{components}
		</div>
	);
}
