import React, { Context, createContext, useContext } from "react";

export type ThemeContextType = {
	button_active_class: string;
	button_inactive_class: string;
};

export const ThemeContext = createContext<ThemeContextType>({
	button_active_class: "button is-small is-fullwidth is-fullwidth is-light is-link",
	button_inactive_class: "button is-small is-fullwidth is-fullwidth is-static",
});

class Theme {
	theme: ThemeContextType;

	constructor(theme: ThemeContextType) {
		this.theme = theme;
	}

	button_class(active: boolean): string {
		if (active) return this.theme.button_active_class;
		return this.theme.button_inactive_class;
	}
}

export const useTheme = () => {
	return new Theme(useContext(ThemeContext));
};
