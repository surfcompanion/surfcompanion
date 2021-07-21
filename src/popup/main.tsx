import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import YoutubePopup from "../companions/youtube.com/popup";

const Popup = () => {
	const [currentURL, setCurrentURL] = useState<string>();

	useEffect(() => {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			setCurrentURL(tabs[0].url);
		});
	}, []);

	return <>{/^https?:\/\/(www\.)?youtube.com/.test(currentURL || "") && <YoutubePopup></YoutubePopup>}</>;
};

console.log(document.getElementById("root"));

ReactDOM.render(
	<React.StrictMode>
		<Popup />
	</React.StrictMode>,
	document.getElementById("root")
);
