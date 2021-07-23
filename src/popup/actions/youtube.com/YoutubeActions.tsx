import React from "react";
import { YoutubeActionsProps, YT_URL_REGEX } from "./Youtube";
import YoutubeDownloadVideoAction from "./YoutubeDownloadVideoAction";

export default function YoutubeActions(props: YoutubeActionsProps) {
	const should_activate = (): boolean => {
		if (YT_URL_REGEX.test(props.cx.url)) return true;
		return false;
	};

	if (!should_activate()) {
		return <></>;
	}

	return (
		<div>
			<h2>Youtube</h2>
			<YoutubeDownloadVideoAction cx={props.cx}></YoutubeDownloadVideoAction>
		</div>
	);
}
