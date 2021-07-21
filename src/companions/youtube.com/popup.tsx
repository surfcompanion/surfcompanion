import React from "react";
import { useEffect, useState } from "react";

export default function YoutubePopup() {
	const [currentURL, set_current_url] = useState<string>("");

	useEffect(() => {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			set_current_url(tabs[0].url || "");
		});
	}, []);

	const is_video_url = () => {
		if (/^https?:\/\/(www\.)?youtube.com\/watch\?v=/.test(currentURL || "")) return true;
		return false;
	};

	const download_url = () => {
		if (is_video_url()) {
			return `https://yt1s.com/en?q=${encodeURI(currentURL)}`;
		}
		return "";
	};

	const download_button = () => {
		if (download_url()) {
			return (
				<a target="_blank" href={download_url()}>
					[download]
				</a>
			);
		}
	};

	return (
		<div>
			<h3>Youtube</h3>
			{download_button()}
		</div>
	);
}
