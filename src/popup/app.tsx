import React, { useContext, useEffect, useState } from "react";
import YoutubeActions from "./actions/youtube.com/YoutubeActions";
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

	const components: JSX.Element[] = [<YoutubeActions cx={action_context} />];

	return (
		<div>
			<h1>Surf Companion</h1>
			{components}
		</div>
	);
}
