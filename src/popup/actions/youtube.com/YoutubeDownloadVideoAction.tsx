import React from "react";
import { useTheme } from "../../common/theme";
import { YoutubeActionsProps, YT_VIDEO_REGEXES } from "./Youtube";

export default function YoutubeDownloadVideoAction(props: YoutubeActionsProps) {
	const theme = useTheme();
	const active = !!YT_VIDEO_REGEXES.find((r) => r.test(props.cx.url));
	const download_url = `https://yt1s.com/en?q=${encodeURI(props.cx.url)}`;

	return (
		<a className={theme.button_class(active)} target="_blank" href={download_url}>
			[download]
		</a>
	);
}
