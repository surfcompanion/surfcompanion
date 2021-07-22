import React from "react";
import { Component } from "react";
import ActionContext from "../../common/action_context";

const YT_URL_REGEX = /^https?\:\/\/(www\.)?youtube\.com/i;
const YT_VIDEO_REGEXES = [
	//
	/^https?\:\/\/(www\.)?youtube\.com\/watch\?v=([^&]+)/i,
];

type YoutubeActionsProps = {
	cx: ActionContext;
};

export default class YoutubeActions extends Component<YoutubeActionsProps> {
	should_activate(): boolean {
		if (YT_URL_REGEX.test(this.props.cx.url)) return true;

		return false;
	}
	render() {
		if (!this.should_activate()) {
			return <></>;
		}
		return (
			<div>
				<h2>Youtube</h2>
				<DownloadVideo cx={this.props.cx}></DownloadVideo>
			</div>
		);
	}
}

const DownloadVideo = (props: YoutubeActionsProps) => {
	const active = !!YT_VIDEO_REGEXES.find((r) => r.test(props.cx.url));
	const class_name = "button is-small is-fullwidth is-fullwidth " + (active ? "is-light is-link" : "button is-static");
	const download_url = `https://yt1s.com/en?q=${encodeURI(props.cx.url)}`;

	return (
		<a className={class_name} target="_blank" href={download_url}>
			[download]
		</a>
	);
};
