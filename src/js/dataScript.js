import { 
	getUrlParam,
	setHomePage,
	setGroupSquad,
	setSquad,
	setPlayerInfo,
	setAllLeagueInfo,
	setLeagueInfo,
	showLoading,
	errApiLimit,
	errDataOffline,
	showAddBookmarkConfirm,
	showRemoveBookmarkConfirm,
} from './helper.js';

import { 
	saveBarcelonaData,
	getBarcelonaData,
	saveLeagueByID,
	getLeagueByID,
	savePlayerByID,
	getPlayerByID,
	bookmarkPlayer,
	getAllBookmarkPlayer,
	getBookmarkPlayerById,
	deleteBookmarkPlayer,
	bookmarkLeague,
	getAllBookmarkLeague,
	getBookmarkLeagueById,
	deleteBookmarkLeague,
} from './db.js';

import baseAPI from './api.js';

const online = window.navigator.onLine;

export function home() {
	if (online) {
		showLoading('homepage');
		const base = new baseAPI();
		base.teamInfo()
		.then(info => {
			setHomePage(info);
			saveBarcelonaData(info);
		})
		.catch(() => errApiLimit())
	} else {
		getBarcelonaData(81)
		.then(info => {
			setHomePage(info);
		})
		.catch(() => errDataOffline())
	}
}

export function allSquadInfo() {
	if (online) {
		showLoading('team-squad');
		const base = new baseAPI();
		base.teamInfo()
		.then(info => {
			setSquadInfo(info);
			saveBarcelonaData(info);
		})
		.catch(() => errApiLimit())
	} else {
		getBarcelonaData(81)
		.then(info => {
			setSquadInfo(info)
		})
		.catch(() => errDataOffline())
	}

	function setSquadInfo(info) {
		setGroupSquad();
		const arrTeam = document.querySelectorAll("#team-squad .group");
		arrTeam.forEach(mem => {
			let team = "";
			const spec = info.squad.filter(dt => dt.position === mem.id);
			spec.forEach(dt => team = setSquad(team, dt))
			mem.innerHTML = team;
		});
	}
}

export function allLeagueInfo() {
	if (online) {
		showLoading('competition-info');
		const base = new baseAPI();
		base.teamInfo()
		.then(info => {
			setAllLeagueInfo(info.activeCompetitions)
			saveBarcelonaData(info);
		})
		.catch(() => errApiLimit())
	} else {
		getBarcelonaData(81)
		.then(info => {
			setAllLeagueInfo(info.activeCompetitions)
		})
		.catch(() => errDataOffline())
	}
}

export async function playerInfo() {
	showLoading('player-info');
	const playerID = getUrlParam('id');
	const isPlayerAvailableOnDB = await getBookmarkPlayerById(parseInt(playerID));
	if (isPlayerAvailableOnDB) {
		// get data from indexedDB
		setPlayerInfo(isPlayerAvailableOnDB);
		const btnConfirm = document.getElementById("btn-player");
		btnConfirm.style.backgroundColor = "#B71C1C";
		btnConfirm.innerText = "Delete from Favorite List?";
		btnConfirm.onclick = () => {
			deleteBookmarkPlayer(isPlayerAvailableOnDB);
			showRemoveBookmarkConfirm(btnConfirm, isPlayerAvailableOnDB.name);
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		};
	} else {
		if (online) {
			// get data from server
			const base = new baseAPI();
			base.playerInfo(playerID)
			.then(info => {
				setPlayerInfo(info);
				savePlayerByID(info);
				const btnConfirm = document.getElementById("btn-player");
				btnConfirm.onclick = () => {
					bookmarkPlayer(info);
					showAddBookmarkConfirm(btnConfirm, info.name);
					setTimeout(() => {
						window.location.reload();
					}, 2000);
				}
			})
			.catch(() => errApiLimit())
		} else {
			getPlayerByID(parseInt(playerID))
			.then(info => {
				setPlayerInfo(info);
				const btnConfirm = document.getElementById("btn-player");
				btnConfirm.onclick = () => {
					bookmarkPlayer(info);
					showAddBookmarkConfirm(btnConfirm, info.name)
					setTimeout(() => {
						window.location.reload();
					}, 2000);
				}
			})
			.catch(() => errDataOffline())
		}
	}
}

export async function leagueInfo() {
	showLoading('league-info');
	const leagueID = getUrlParam('id');
	const isLeagueAvailableOnDB = await getBookmarkLeagueById(parseInt(leagueID));
	if (isLeagueAvailableOnDB) {
		// get data from indexedDB
		setLeagueInfo(isLeagueAvailableOnDB);
		const btnConfirm = document.getElementById("btn-league");
		btnConfirm.style.backgroundColor = "#B71C1C";
		btnConfirm.innerText = "Delete from Favorite List?";
		btnConfirm.onclick = () => {
			deleteBookmarkLeague(isLeagueAvailableOnDB);
			showRemoveBookmarkConfirm(btnConfirm, isLeagueAvailableOnDB.competition.name);
			window.location.reload();
		};
	} else {
		if (online) {
			// get data from server
			const base = new baseAPI();
			base.leagueInfo(parseInt(leagueID))
			.then(info => {
				setLeagueInfo(info);
				saveLeagueByID(info);
				const btnConfirm = document.getElementById("btn-league");
				btnConfirm.onclick = () => {
					bookmarkLeague(info);
					showAddBookmarkConfirm(btnConfirm, info.competition.name)
					window.location.reload();
				}
			})
			.catch(() => errApiLimit())
		} else {
			getLeagueByID(parseInt(leagueID))
			.then(info => {
				setLeagueInfo(info);
				const btnConfirm = document.getElementById("btn-league");
				btnConfirm.onclick = () => {
					bookmarkLeague(info);
					showAddBookmarkConfirm(btnConfirm, info.competition.name)
					window.location.reload();
				}
			})
			.catch(() => errDataOffline())
		}
	}
}

export function getBookmark() {
	getAllBookmarkPlayer().then((players) => {
		let rowHTML = `<div class="row" id="bookmark-player"></div>`;
		let playersHTML = "";
		if (players.length > 0) {
			players.forEach((player) => playersHTML = setSquad(playersHTML, player));
		} else {
			playersHTML = `
				<h3>You haven't favorited any player yet?</h3>
				<a href="#team"><p class="yellow-text center">Search Player</p></a>
			`;
		}
		
		document.getElementById("bookmarkSquad").innerHTML = rowHTML;
		document.getElementById("bookmark-player").innerHTML = playersHTML;
	});

	getAllBookmarkLeague().then((leagues) => {
		let leagueHTML = "";
		if (leagues.length > 0) {
			leagueHTML = setAllLeagueInfo(leagues, true);
		} else {
			leagueHTML = `
				<h3>You haven't favorited any league yet?</h3>
				<a href="#competition"><p class="yellow-text center">Search League</p></a>
			`;
			document.getElementById("bookmarkLeague").innerHTML = leagueHTML;
		}
	});
}