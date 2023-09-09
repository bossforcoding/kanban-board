export function saveData(id_board, issues) {
    for (let i = 0; i < issues.length; i++) {
        let key = issues[i].id;
        localStorage.setItem(id_board + key, JSON.stringify(issues[i]));
    }
}

