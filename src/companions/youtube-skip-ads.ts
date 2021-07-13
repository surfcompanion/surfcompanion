import { companion } from "../support/core";

export default companion("Youtube ad skipper", function () {
	/**
	 *
	 */
	function check_player() {
		document.querySelectorAll("#player-container-outer").forEach((container) => {
			let video = container.querySelector("video") as HTMLVideoElement;
			let ad_progress_bar = container.querySelector(".ytp-ad-persistent-progress-bar-container") as HTMLDivElement;
			let ad_skip_button = container.querySelector(".ytp-ad-skip-button") as HTMLDivElement;

			if (!(ad_progress_bar && video)) return;

			if (RegExp(/none/i).test(ad_progress_bar.style.display)) return;

			if (video.currentTime < video.duration - 0.5) {
				video.playbackRate = 10;
				video.currentTime = video.duration - 0.4;
			}

			if (ad_skip_button) {
				ad_skip_button.dispatchEvent(
					new MouseEvent("click", {
						bubbles: true,
						cancelable: true,
						clientX: 0,
						clientY: 0,
					})
				);
			}
		});
	}

	/**
	 *
	 */
	setInterval(function () {
		check_player();
	}, 420);
});
