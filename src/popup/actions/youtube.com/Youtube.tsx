import ActionContext from "../../common/action_context";

export const YT_URL_REGEX = /^https?\:\/\/(www\.)?youtube\.com/i;

export const YT_VIDEO_REGEXES = [
	//
	/^https?\:\/\/(www\.)?youtube\.com\/watch\?v=([^&]+)/i,
];

export type YoutubeActionsProps = {
	cx: ActionContext;
};
