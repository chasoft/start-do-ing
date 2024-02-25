/**************************************************************************
 *
 * SPR -> Search Params Settings.
 * Holding search params values for the app.
 *
 *************************************************************************/

export const SPR = {
	view: {
		key: "view",
		values: {
			// Show/Hide feedback dialog - /view=full
			fullpage: "full"
		}
	},
	side: {
		key: "side",
		values: {
			// Show/Hide help sidebar - /?side=help
			help: "help"
		}
	},
	dialog: {
		key: "dialog",
		values: {
			// Show/Hide feedback dialog - /?dialog=feedback
			feedback: "feedback"
		}
	},
	date: {
		key: "date",
		values: {}
	},
	tab: {
		key: "tab",
		values: {}
	}
}
