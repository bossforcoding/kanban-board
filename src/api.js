const apiKey = 'bosber'
export const queryParams = `?apiKey=${encodeURIComponent(apiKey)}`;

// fetch di tutte le boards
export async function fetchBoards(url) {
    try {
        const response = await fetch(url + "/boards");
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
}

// fetch di tutte le issues
export async function fetchIssues(url, board) {
    try {
        const response = await fetch(url + `/boards/${board}/` + queryParams);
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
}

export async function postNewIssue(url, board, newIssue) {
    try {
        const response = await fetch(url + `/boards/${[board]}/issues` + queryParams, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": newIssue.title,
                "type": newIssue.type,
                "status": newIssue.status
            })
        });
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
}

export function changeStatus(url, movedIssue, status) {
    return fetch(url + `issues/${[movedIssue.id]}/status` + queryParams, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "status": status.replace(" ", "_")
        })
    })
}

export async function filterIssues(url, board, filterTermParams, filterTypeParams) {
    try {
        const response = await fetch(url + `/boards/${board}/search` + queryParams + filterTermParams + filterTypeParams);
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
}